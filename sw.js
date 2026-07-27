/**
 * sw.js — Service worker untuk Jadwal Pelajaran SMK Negeri 1 Bitung.
 * Strategi: cache-first untuk app shell (HTML/CSS/JS/ikon), dengan
 * fallback ke cache saat offline. Naikkan CACHE_VERSION setiap kali
 * isi file di bawah ini berubah agar pengguna menerima versi baru.
 */

const CACHE_VERSION = 'jadwal-smkn1-v6';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/animations.css',
  './js/data/subjects.js',
  './js/data/time.js',
  './js/data/majors.js',
  './js/data/schedule.js',
  './js/data/funfacts.js',
  './js/uniform.js',
  './js/app.js',
  './assets/logo.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Hanya tangani permintaan GET sesama origin (app shell).
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Offline & tidak ada di cache — untuk navigasi, kembalikan
          // shell utama agar SPA ini tetap bisa tampil.
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('', { status: 504, statusText: 'Offline' });
        });
    })
  );
});
