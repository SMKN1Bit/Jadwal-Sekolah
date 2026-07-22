/**
 * app.js — Logika aplikasi Jadwal Pelajaran SMK Negeri 1 Bitung.
 * Bergantung pada data.js (majorsData, scheduleData, funFactsData) yang
 * dimuat sebelumnya.
 */

/* ===================================================================
   0. IKON (inline SVG, tanpa dependensi font/CDN eksternal)
   =================================================================== */
const ICONS = {
  chart: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17.2" cy="9" r="2.6"/><path d="M16 13.2c2.6.5 4.6 2.5 4.6 4.8"/></svg>',
  bookOpen: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5C10 4 6.5 3.5 4 4v15c2.5-.5 6 0 8 1.5 2-1.5 5.5-2 8-1.5V4c-2.5-.5-6 0-8 1.5z"/><path d="M12 5.5v15"/></svg>',
  graduation: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l10-4 10 4-10 4-10-4z"/><path d="M6 10.3V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.7"/><path d="M22 8v6"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.4 2"/></svg>',
  chevronRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
};
/* ===================================================================
   0c. ILUSTRASI FUN FACTS
   Dulu setiap kartu fun fact hanya memakai satu ikon garis tipis yang
   diulang bergantian (terkesan seperti "logo" generik). Sekarang tiap
   kartu punya ilustrasi dua-warna orisinal (bukan trace gambar lain)
   yang menggambarkan isinya, plus warna aksen sendiri — dipetakan lewat
   variabel warna mata-pelajaran/tema yang sudah ada supaya otomatis
   cocok di tema terang maupun gelap tanpa token warna baru.
   =================================================================== */
const FACT_ACCENTS = ['--accent', '--subj-tik', '--subj-ipa', '--gold', '--subj-pkn', '--subj-agama'];

const FACT_ILLUSTRATIONS = [
  // 0. Sekolah dalam angka — grafik batang naik + topi wisuda kecil
  '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<rect x="6" y="28" width="8" height="12" rx="2.5" fill="currentColor" opacity="0.25"/>'
    + '<rect x="20" y="20" width="8" height="20" rx="2.5" fill="currentColor" opacity="0.4"/>'
    + '<rect x="34" y="11" width="8" height="29" rx="2.5" fill="currentColor" opacity="0.6"/>'
    + '<path d="M5 40h38" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
    + '<path d="M38 4l8 3.6-8 3.6-8-3.6L38 4z" fill="currentColor"/>'
    + '<path d="M33 9v3.8c0 1.3 2.3 2.4 5 2.4s5-1.1 5-2.4V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>',
  // 1. Guru produktif per jurusan — simpul jaringan (satu sekolah, banyak jurusan)
  '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M24 24L10 12M24 24L38 12M24 24L9 34M24 24L39 34M24 24V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>'
    + '<circle cx="24" cy="8" r="3.4" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="10" cy="12" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="38" cy="12" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="9" cy="34" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="39" cy="34" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="24" cy="24" r="7" fill="currentColor"/>'
    + '</svg>',
  // 2. Guru mapel umum — buku terbuka (ragam mata pelajaran)
  '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M24 14c-3.8-2.6-9.4-3.4-15.5-2.4v23c6.1-1 11.7-.2 15.5 2.4 3.8-2.6 9.4-3.4 15.5-2.4v-23C33.4 10.6 27.8 11.4 24 14z" fill="currentColor" opacity="0.16"/>'
    + '<path d="M24 14c-3.8-2.6-9.4-3.4-15.5-2.4v23c6.1-1 11.7-.2 15.5 2.4 3.8-2.6 9.4-3.4 15.5-2.4v-23C33.4 10.6 27.8 11.4 24 14z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
    + '<path d="M24 14v23" stroke="currentColor" stroke-width="2"/>'
    + '<path d="M12 17.5h7M12 22.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>'
    + '<path d="M29 17.5h7M29 22.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>'
    + '<circle cx="38" cy="8" r="2.4" fill="currentColor"/>'
    + '<circle cx="43" cy="13" r="1.5" fill="currentColor" opacity="0.6"/>'
    + '</svg>',
  // 3. Struktur kepemimpinan — bagan organisasi (1 di atas, 2 di bawah)
  '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M24 16v6M24 22H12v5M24 22h12v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>'
    + '<rect x="16" y="6" width="16" height="11" rx="3" fill="currentColor"/>'
    + '<rect x="4" y="27" width="16" height="11" rx="3" fill="currentColor" opacity="0.62"/>'
    + '<rect x="28" y="27" width="16" height="11" rx="3" fill="currentColor" opacity="0.62"/>'
    + '</svg>',
  // 4. Arti gelar akademik — ijazah bergaris + lencana bintang
  '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<rect x="5" y="8" width="27" height="20" rx="2.5" fill="currentColor" opacity="0.14" stroke="currentColor" stroke-width="2"/>'
    + '<path d="M10.5 14.5h16M10.5 19.5h16M10.5 24.5h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" opacity="0.8"/>'
    + '<path d="M32 33l-2 8 3.6-2.2L36 41l2-8" fill="currentColor" opacity="0.85"/>'
    + '<circle cx="35" cy="30" r="8" fill="currentColor"/>'
    + '<path d="M35 26.3l1.7 3.4 3.8.5-2.75 2.7.65 3.8-3.4-1.8-3.4 1.8.65-3.8-2.75-2.7 3.8-.5z" fill="var(--surface)"/>'
    + '</svg>',
  // 5. Guru bergelar magister — medali pita + bintang
  '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M15 4h8l-2.6 16h-2.8z" fill="currentColor" opacity="0.55"/>'
    + '<path d="M33 4h-8l2.6 16h2.8z" fill="currentColor" opacity="0.55"/>'
    + '<circle cx="24" cy="30.5" r="13" fill="currentColor"/>'
    + '<path d="M24 23.2l2.5 5.1 5.6.8-4 4 .95 5.6L24 36l-5 2.7.95-5.6-4-4 5.6-.8z" fill="var(--surface)"/>'
    + '</svg>',
];

/* ===================================================================
   0b. IKON SERAGAM HARIAN (Senin–Jumat)
   Ilustrasi baju diambil dari aset SVG asli (siluet garis/outline),
   diwarnai lewat CSS (fill pada elemen <path>) supaya satu bentuk aset
   bisa dipakai ulang untuk beberapa hari dengan warna berbeda. Celana
   digambar terpisah (bentuk generik, sengaja sederhana) di bawah tiap
   baju supaya tetap menyampaikan pasangan atasan+bawahan seperti versi
   sebelumnya. Referensi <clipPath>/<linearGradient>/<pattern> bersama
   didefinisikan sekali di index.html (prefix id "uniform").
   - Senin & Selasa : seragam nasional, putih & abu-abu, celana panjang
   - Rabu           : identitas jurusan, gradasi pastel berjalan pelan
   - Kamis          : batik sekolah (putih + motif biru & biru pastel)
   - Jumat          : dua tampilan silih berganti (transisi pelan,
                      seperti animasi hari Rabu) — Pramuka (coklat muda
                      & coklat tua, celana panjang) dan Olahraga (biru
                      tua ke biru pastel dengan blok hitam di bahu &
                      perut, celana pendek hitam)
   =================================================================== */

/* Siluet baju polos — dipakai utk Senin/Selasa (putih) & Rabu (pastel) */
const SHIRT_PLAIN_BODY = `M511.044,301.576c-0.068-3.54-1.009-7.112-2.932-10.384l-15.105-25.687c-0.293-0.498-0.63-0.952-1-1.366l-98.369-167.24
			c-2.847-4.875-6.509-9.219-10.834-12.852c-8.886-7.462-20.105-11.548-31.703-11.548h-2.195c-0.009,0-0.017-0.002-0.025-0.002
			h-27.488c-7.23-15.857-34.534-25.6-66.379-25.6c-31.845,0-59.149,9.743-66.379,25.6h-27.484c-0.008,0-0.016,0.002-0.025,0.002
			h-2.205c-11.595,0-22.823,4.09-31.697,11.55c-4.326,3.634-7.991,7.983-10.839,12.864L18.328,264.828
			c-0.368,0.415-0.7,0.871-0.99,1.367L1.739,292.912c-1.799,3.078-2.672,6.437-2.725,9.763c-0.229,7.143,3.379,14.182,10.003,18.007
			l24.456,14.122c9.53,5.501,21.708,2.289,27.283-7.196l57.725-98.286l-0.015,184.509c0,3.316,1.92,6.331,4.924,7.733l58.82,27.452
			c46.141,21.531,99.446,21.531,145.577,0l58.82-27.452c3.004-1.402,4.924-4.417,4.924-7.732l0.015-184.814l58.278,98.145
			c5.591,9.428,17.73,12.597,27.229,7.112l23.338-13.474C507.466,316.72,511.308,309.2,511.044,301.576z M493.404,300.176
			c0.398,0.677,0.569,1.419,0.569,2.151c-0.104,1.352-0.845,2.631-2.107,3.359l-23.35,13.484c-1.397,0.806-3.195,0.336-4.018-1.051
			l-10.652-17.942l28.786-18.313L493.404,300.176z M191.41,89.565l27.849,31.827l-13.956,14.202l-28.757-46.029H191.41z
			 M244.513,150.254l4.079,4.662c0.213,0.243,0.436,0.471,0.668,0.683c3.478,3.188,8.99,2.961,12.178-0.682l4.052-4.631
			l14.853,209.063l-25.345,25.345l-25.345-25.345L244.513,150.254z M318.621,89.565h15.756l-29.232,52.617l-15.029-20.04
			L318.621,89.565z M216.138,70.771c10-4.285,23.915-6.808,38.877-6.808s28.877,2.522,38.877,6.808
			c6.19,2.653,9.98,5.561,11.523,7.967l-32.698,37.368c-0.004,0.005-0.008,0.01-0.012,0.015l-6.554,7.49
			c-0.007,0.008-0.016,0.014-0.023,0.022l-11.114,12.704l-17.647-20.168c-0.018-0.02-0.032-0.042-0.05-0.063l-32.7-37.371
			C206.16,76.33,209.95,73.422,216.138,70.771z M46.039,318.629c-0.821,1.401-2.621,1.875-4.022,1.065l-24.47-14.125
			c-0.871-0.503-1.384-1.381-1.462-2.31c0.012-0.481,0.128-0.964,0.387-1.408l11.623-19.904l30.125,15.949L46.039,318.629z
			 M390.353,193.581c-4.429-7.459-15.87-4.319-15.871,4.356l-0.017,210.459l-53.896,25.154c-41.557,19.395-89.577,19.395-131.142,0
			l-53.895-25.153l0.017-210.458c0.001-8.697-11.487-11.822-15.891-4.322L67.02,283.243l-30.311-16.047l94.416-161.68
			c1.861-3.189,4.253-6.027,7.08-8.402c5.175-4.351,11.576-6.942,18.279-7.451l40.08,64.154c2.924,4.681,9.455,5.396,13.324,1.46
			l18.496-18.822l-16.032,225.57c-0.175,2.468,0.729,4.89,2.478,6.639l34.133,34.133c3.332,3.332,8.735,3.332,12.068,0
			l34.133-34.133c1.749-1.749,2.653-4.171,2.478-6.639l-15.806-222.479l17.551,23.403c3.709,4.946,11.284,4.429,14.286-0.976
			l40.162-72.291c6.598,0.561,12.884,3.142,17.993,7.432c2.826,2.374,5.218,5.212,7.077,8.398l95.07,161.631l-28.989,18.442
			L390.353,193.581z`;

/* Siluet baju batik */
const SHIRT_BATIK_BODY = `M509.293,207.213L418.037,91.069c-0.882-15.422-23.822-31.649-81.117-49.402l-23.069-22.246l-1.677-3.354
				C307.053,4.973,296.813-1,285.72-1h-58.88c-11.093,0-21.333,5.973-26.453,16.213l-2.276,3.982L174.787,42.52
				c-55.091,17.07-77.724,32.729-80.736,46.978L1.56,207.213C-1.853,210.627-1,216.6,3.267,219.16L63,261.827
				c2.56,1.707,5.973,1.707,8.533,0.853l47.787-25.259V503.32c0,5.12,3.413,8.533,8.533,8.533h256c5.12,0,8.533-3.413,8.533-8.533
				V237.872l46.933,24.808c2.56,1.707,5.973,0.853,8.533-0.853l59.733-42.667C511.853,216.6,512.707,210.627,509.293,207.213z
				 M201.24,39.107l26.453,58.027l-18.773,9.387l-20.48-54.613L201.24,39.107z M309.883,39.376l12.531,12.531l-20.48,54.613
				l-18.874-9.027L309.883,39.376z M225.987,16.067h58.88c5.12,0,9.387,2.56,11.093,6.827l1.707,1.707l-41.813,90.453l-7.064-15.282
				c-0.074-0.891-0.273-1.782-0.616-2.638l-33.759-73.282l0.479-0.958C217.453,18.627,221.72,16.067,225.987,16.067z M68.973,244.76
				l-47.787-34.133l83.139-106.045c4.031,4.423,7.608,12.896,10.727,24.125c1.707,6.827,2.56,14.507,3.413,23.04
				c0,2.56,0.853,5.12,0.853,7.68c0,1.707,0,2.56,0,2.56v56.32L68.973,244.76z M136.387,493.933v-332.8c0-0.853,0-1.707,0-3.413
				c0-2.56,0-5.12-0.853-8.533c-0.853-8.533-2.56-17.067-4.267-24.747c-3.997-15.99-9.555-28.338-17.892-35.015
				c0.844-0.844,1.697-1.697,3.385-3.385c10.207-7.852,28.369-16.426,57.128-25.722l23.086,61.562
				c1.707,5.12,7.68,6.827,11.947,4.267l26.651-13.651l12.602,27.304c3.413,6.827,12.8,6.827,15.36,0l12.602-27.304l26.651,13.651
				c4.267,2.56,10.24,0,11.947-4.267l23.086-61.562c28.758,9.296,46.921,17.871,57.128,25.722c1.551,0.775,2.396,2.249,3.178,3.153
				c-8.277,6.619-14.314,19.066-17.685,35.247c-0.213,0.96-0.427,1.933-0.638,2.918c-1.058,4.925-2.075,10.142-2.842,15.442
				c-0.307,2.12-0.573,4.253-0.787,6.387c0,2.56-0.853,5.973-0.853,8.533c0,1.707,0,2.56,0,3.413v62.293c0,0,0,0.001,0,0.001
				v270.506H136.387z M442.733,243.907l-50.347-25.6v-57.173c0,0,0-0.853,0-2.56c0-2.56,0-5.12,0.853-7.68
				c0.853-7.68,1.707-15.36,3.413-23.04c1.805-7.823,4.459-14.365,7.064-19.343c1.153-1.947,2.361-3.58,3.601-4.862l83.202,106.125
				L442.733,243.907z`;
const SHIRT_BATIK_DOT_A = `M255.853,161.133c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533
				S260.973,161.133,255.853,161.133z`;
const SHIRT_BATIK_DOT_B = `M255.853,195.267c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533
				C264.387,198.68,260.973,195.267,255.853,195.267z`;

/* Siluet baju pramuka (setangan leher sudah menyatu di bentuk kerah) */
const SHIRT_PRAMUKA_BODY = `M509.182,283.864l-92.495-117.721c-3.135-14.587-26.224-30.186-80.362-46.686l-24.084-24.084
				c-2.878-2.878-7.117-3.187-10.301-1.36l-38.404-23.039V58.736c0-4.713-3.82-8.533-8.533-8.533
				c-9.427,0-17.067-7.64-17.067-17.067c0-9.427,7.64-17.067,17.067-17.067c9.427,0,17.067,7.64,17.067,17.067
				c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533c0-18.853-15.281-34.133-34.133-34.133
				c-18.853,0-34.133,15.281-34.133,34.133c0,15.906,10.877,29.269,25.6,33.058v4.775l-38.385,23.034
				c-0.133-0.076-0.273-0.138-0.41-0.206c-1.043-0.523-2.176-0.841-3.334-0.913c-0.331-0.02-0.664-0.022-0.996-0.004
				c-0.332,0.018-0.664,0.055-0.994,0.113c-0.99,0.172-1.961,0.521-2.862,1.056c-0.602,0.357-1.174,0.797-1.7,1.323l-24.085,24.085
				c-55.36,16.873-78.251,32.804-80.636,47.005L0.824,283.864c-3.006,3.826-2.21,9.388,1.75,12.216l59.733,42.667
				c2.619,1.871,6.068,2.109,8.919,0.615l47.273-24.76l-0.004,187.868c0,4.713,3.821,8.533,8.533,8.533h127.974h128
				c4.713,0,8.533-3.82,8.533-8.533V314.618l47.243,24.745c2.851,1.493,6.3,1.255,8.919-0.615l59.733-42.667
				C511.392,293.252,512.189,287.691,509.182,283.864z M255,85.755l38.401,23.036l-20.224,43.812h-36.318l-20.227-43.825L255,85.755
				z M263.26,174.084c-0.037,0.081-0.064,0.163-0.099,0.245l-8.136,17.637l-10.29-22.295h20.563L263.26,174.084z M201.204,116.096
				l11.566,25.054l13.59,29.44l1.448,3.138l-19.339,9.672l-20.327-54.242L201.204,116.096z M308.84,116.108l13.049,13.049
				L301.561,183.4l-19.319-9.662L308.84,116.108z M118.493,295.339l-50.536,26.47l-48.194-34.424l83.48-106.247
				c4.321,4.616,7.991,12.989,10.712,24.276c1.722,7.144,2.95,14.876,3.757,22.619c0.283,2.718,0.492,5.238,0.639,7.491
				c0.078,1.205,0.123,2.08,0.143,2.575V295.339z M135.562,493.936v-256c-0.027-0.921-0.081-2.016-0.178-3.519
				c-0.159-2.468-0.386-5.209-0.692-8.157c-0.876-8.445-2.215-16.902-4.13-24.867c-3.871-16.101-9.48-28.307-17.93-35.133
				c0.928-0.943,2.09-1.982,3.517-3.108c9.953-7.858,28.324-16.546,56.905-25.617l22.76,60.733
				c1.778,4.745,7.276,6.904,11.808,4.638l27.341-13.674l11.506,24.933v279.772H135.562z M263.536,493.936v-279.67l11.55-25.025
				l27.321,13.664c4.532,2.267,10.029,0.107,11.808-4.638l22.76-60.734c28.582,9.071,46.954,17.759,56.907,25.618
				c1.422,1.122,2.58,2.157,3.506,3.097c-3.997,3.204-7.39,7.708-10.271,13.333c-0.184,0.357-0.369,0.712-0.548,1.078
				c-0.191,0.391-0.379,0.791-0.565,1.193c-0.259,0.556-0.514,1.122-0.764,1.697c-0.131,0.302-0.263,0.602-0.391,0.909
				c-0.366,0.871-0.723,1.76-1.069,2.672c-0.017,0.045-0.035,0.087-0.052,0.132c-0.393,1.04-0.772,2.108-1.14,3.199
				c-0.039,0.116-0.076,0.236-0.115,0.352c-0.308,0.924-0.608,1.866-0.899,2.826c-0.086,0.283-0.171,0.569-0.256,0.856
				c-0.239,0.809-0.473,1.631-0.701,2.464c-0.096,0.35-0.194,0.697-0.288,1.051c-0.222,0.838-0.438,1.69-0.65,2.551
				c-0.071,0.287-0.147,0.563-0.217,0.852c-1.918,7.959-3.261,16.41-4.14,24.85c-0.307,2.946-0.534,5.685-0.695,8.152
				c-0.098,1.502-0.152,2.596-0.174,3.216l-0.005,62.871c0,0.132,0.021,0.261,0.027,0.392l-0.004,193.042H263.536z M442.05,321.809
				l-50.513-26.458v-57.415c0.011-0.158,0.056-1.088,0.142-2.419c0.146-2.255,0.354-4.778,0.636-7.498
				c0.803-7.749,2.029-15.487,3.748-22.638c0.215-0.893,0.437-1.763,0.663-2.619c0.057-0.215,0.115-0.426,0.172-0.638
				c0.161-0.593,0.325-1.174,0.491-1.749c0.087-0.3,0.173-0.604,0.262-0.899c0.148-0.494,0.299-0.973,0.451-1.452
				c0.217-0.685,0.438-1.357,0.663-2.011c0.064-0.187,0.128-0.376,0.192-0.56c0.184-0.523,0.37-1.036,0.558-1.538
				c0.021-0.057,0.043-0.113,0.064-0.169c2.124-5.614,4.54-9.928,7.111-12.7l83.552,106.34L442.05,321.809z`;
const SHIRT_PRAMUKA_POCKET = `M340.337,255.006h-51.2c-4.713,0-8.533,3.821-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h51.2
				c4.713,0,8.533-3.82,8.533-8.533v-51.2C348.87,258.826,345.049,255.006,340.337,255.006z M331.803,306.206H297.67v-34.133h34.133
				V306.206z`;
const SHIRT_PRAMUKA_BUTTON = `M195.27,255.003c-18.853,0-34.133,15.281-34.133,34.133c0,18.853,15.281,34.133,34.133,34.133
				c18.853,0,34.133-15.281,34.133-34.133C229.403,270.284,214.122,255.003,195.27,255.003z M195.27,306.203
				c-9.427,0-17.067-7.64-17.067-17.067s7.64-17.067,17.067-17.067c9.427,0,17.067,7.64,17.067,17.067
				S204.697,306.203,195.27,306.203z`;

/* Siluet baju olahraga */
const SHIRT_OLAHRAGA_BODY = `M511.133,429.52L418.205,92.966c-0.094-10.283-12.442-28.442-80.879-49.314l-13.099-13.09
				c-0.003-0.003-0.005-0.004-0.008-0.007l-10.006-10.006l-2.065-4.147C307.088,6.281,296.925,0,285.61,0h-59.196
				c-11.324,0-21.495,6.289-26.547,16.427l-2.057,4.122l-10.015,10.015c-0.003,0.003-0.005,0.004-0.008,0.007l-13.082,13.082
				c-68.275,20.821-80.725,38.938-80.888,49.237L6.328,409.811c-0.035,0.107-0.078,0.21-0.109,0.32
				c-0.046,0.16-0.076,0.32-0.112,0.481l-5.251,19.02c-3.499,13.363,4.454,27.307,17.732,31.113l26.624,7.603
				c6.75,1.929,13.815,1.033,19.891-2.483c6.076-3.533,10.342-9.242,11.964-15.898l42.428-159.838v179.209
				c0,23.518,19.14,42.667,42.667,42.667H349.87c23.526,0,42.667-19.149,42.667-42.667v-179.2l37.541,141.476
				c0.002,0.008,0.003,0.016,0.006,0.024c0.001,0.004,0.003,0.008,0.004,0.012l4.817,18.155c1.672,6.835,5.939,12.535,12.015,16.068
				c6.084,3.524,13.15,4.403,19.891,2.475l26.624-7.595C506.713,456.946,514.666,442.994,511.133,429.52z M210.866,31.633
				c0.649-0.648,1.186-1.399,1.604-2.227l2.671-5.367c2.15-4.301,6.46-6.972,11.273-6.972h59.196c4.804,0,9.122,2.662,11.273,6.963
				l2.688,5.385c0.41,0.819,0.964,1.587,1.621,2.236l6.576,6.581c-10.585,18.409-30.317,30.03-51.764,30.03
				c-21.447,0-41.172-11.614-51.749-30.022L210.866,31.633z M56.528,451.11c-2.022,1.178-4.386,1.485-6.622,0.819l-26.624-7.603
				c-4.429-1.263-7.083-5.914-5.948-10.257l3.041-11.013l42.932,12.262l-2.769,10.433C59.976,448.021,58.55,449.932,56.528,451.11z
				 M136.562,469.337V224.703c0-4.284-3.183-7.91-7.432-8.465c-0.375-0.051-0.742-0.068-1.109-0.068c-3.823,0-7.245,2.56-8.243,6.34
				l-52.09,196.302L24.92,406.595l85.556-309.892c0.307-0.87,0.469-1.783,0.486-2.714c0.879-1.929,9.276-16.128,70.724-34.611
				c1.348-0.41,2.577-1.143,3.576-2.142l6.579-6.588c12.504,19.025,32.939,31.645,55.63,34.2v410.088h-85.309
				C148.04,494.937,136.562,483.451,136.562,469.337z M392.255,222.519c-1.101-4.139-5.069-6.852-9.353-6.272
				c-4.25,0.555-7.432,4.181-7.432,8.465v244.625c0,14.114-11.486,25.6-25.6,25.6h-85.332V84.849
				c22.697-2.555,43.133-15.175,55.636-34.209l6.596,6.596c0.998,0.998,2.227,1.732,3.576,2.142
				c61.448,18.483,69.845,32.683,70.724,34.611c0.017,0.725,0.111,1.442,0.307,2.15l85.692,310.351l-42.76,12.211L392.255,222.519z
				 M488.75,444.334l-26.633,7.603c-2.244,0.631-4.599,0.35-6.622-0.819c-2.031-1.186-3.456-3.089-4.053-5.53l-2.754-10.381
				l42.925-12.258l3.042,11.017C495.824,438.412,493.17,443.071,488.75,444.334z`;
const SHIRT_OLAHRAGA_LOGO = `M366.938,127.999c-13.943,0-26.342,6.724-34.133,17.092c-7.791-10.368-20.19-17.092-34.133-17.092
				c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533c14.114,0,25.6,11.486,25.6,25.6c0,4.719,3.823,8.533,8.533,8.533
				s8.533-3.814,8.533-8.533c0-14.114,11.486-25.6,25.6-25.6c4.71,0,8.533-3.814,8.533-8.533S371.648,127.999,366.938,127.999z`;

/* Celana generik (bentuk sederhana, bukan dari aset — aset yang dikirim
   hanya berupa baju) supaya siluet atasan+bawahan tetap terlihat sebagai
   satu setelan pada badge kecil. */
const PANTS_LONG_PATH = 'M14,49 L50,49 L50,74 L37.5,74 L37.5,58 L26.5,58 L26.5,74 L14,74 Z';
const PANTS_SHORT_PATH = 'M14,49 L50,49 L50,65.5 L37.5,65.5 L37.5,58 L26.5,58 L26.5,65.5 L14,65.5 Z';

/* Bagian yang dianimasikan blok hitam (bahu & perut, ±30% baju) pada
   baju olahraga — posisi dikira-kira dari proporsi siluet aslinya. */
const OLAHRAGA_BLOCK_SHOULDER = { x: 66, y: 50, w: 380, h: 78 };
const OLAHRAGA_BLOCK_BELLY = { x: 66, y: 298, w: 380, h: 96 };

function shirtViewport(bodyContent, viewBoxSize) {
  return `<svg x="8" y="0" width="48" height="48" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" overflow="visible">${bodyContent}</svg>`;
}

const UNIFORM_LOOKS = {
  putih: () => shirtViewport(
    `<path class="uniform-shirt-fill" d="${SHIRT_PLAIN_BODY}"></path>`,
    512.06
  ),
  pastel: () => shirtViewport(
    `<path class="uniform-shirt-fill uniform-shirt-pastel" d="${SHIRT_PLAIN_BODY}"></path>`,
    512.06
  ),
  batik: () => shirtViewport(
    `<g clip-path="url(#uniformClipBatik)">
       <rect x="0" y="0" width="512.853" height="512.853" fill="url(#uniformBatikPattern)"></rect>
     </g>
     <path class="uniform-shirt-outline" d="${SHIRT_BATIK_BODY}"></path>
     <path class="uniform-shirt-accent" d="${SHIRT_BATIK_DOT_A}"></path>
     <path class="uniform-shirt-accent" d="${SHIRT_BATIK_DOT_B}"></path>`,
    512.853
  ),
  pramuka: () => shirtViewport(
    `<path class="uniform-shirt-fill" d="${SHIRT_PRAMUKA_BODY}"></path>
     <path class="uniform-shirt-accent" d="${SHIRT_PRAMUKA_POCKET}"></path>
     <path class="uniform-shirt-accent" d="${SHIRT_PRAMUKA_BUTTON}"></path>`,
    512.006
  ),
  olahraga: () => shirtViewport(
    `<g clip-path="url(#uniformClipOlahraga)">
       <rect x="0" y="0" width="512.003" height="512.003" fill="url(#uniformOlahragaGradient)"></rect>
       <rect x="${OLAHRAGA_BLOCK_SHOULDER.x}" y="${OLAHRAGA_BLOCK_SHOULDER.y}" width="${OLAHRAGA_BLOCK_SHOULDER.w}" height="${OLAHRAGA_BLOCK_SHOULDER.h}" class="uniform-olahraga-block"></rect>
       <rect x="${OLAHRAGA_BLOCK_BELLY.x}" y="${OLAHRAGA_BLOCK_BELLY.y}" width="${OLAHRAGA_BLOCK_BELLY.w}" height="${OLAHRAGA_BLOCK_BELLY.h}" class="uniform-olahraga-block"></rect>
     </g>
     <path class="uniform-shirt-outline" d="${SHIRT_OLAHRAGA_BODY}"></path>
     <path class="uniform-olahraga-block" d="${SHIRT_OLAHRAGA_LOGO}"></path>`,
    512.003
  ),
};

/* Satu "tampilan" = baju + celana yg sepadan, dipakai langsung (Senin,
   Selasa, Rabu, Kamis) atau silih berganti berpasangan (Jumat). */
const UNIFORM_CONFIG = {
  SENIN: { looks: [{ shirt: 'putih', shirtClass: 'uniform-shirt-putih', pants: PANTS_LONG_PATH, pantsClass: 'uniform-pants-abu' }] },
  SELASA: { looks: [{ shirt: 'putih', shirtClass: 'uniform-shirt-putih', pants: PANTS_LONG_PATH, pantsClass: 'uniform-pants-abu' }] },
  RABU: { looks: [{ shirt: 'pastel', shirtClass: 'uniform-shirt-pastel-anim', pants: PANTS_LONG_PATH, pantsClass: 'uniform-pants-netral' }] },
  KAMIS: { looks: [{ shirt: 'batik', shirtClass: 'uniform-shirt-batik', pants: PANTS_LONG_PATH, pantsClass: 'uniform-pants-abu' }] },
  JUMAT: {
    looks: [
      { shirt: 'pramuka', shirtClass: 'uniform-shirt-pramuka', pants: PANTS_LONG_PATH, pantsClass: 'uniform-pants-coklat-tua', fadeClass: 'uniform-look-a' },
      { shirt: 'olahraga', shirtClass: 'uniform-shirt-olahraga', pants: PANTS_SHORT_PATH, pantsClass: 'uniform-pants-hitam', fadeClass: 'uniform-look-b' },
    ],
  },
};

function uniformIconSVG(dayKey) {
  const cfg = UNIFORM_CONFIG[dayKey];
  if (!cfg) return '';
  const looksMarkup = cfg.looks.map((look) => {
    const shirtSVG = UNIFORM_LOOKS[look.shirt]();
    return `<g class="uniform-look ${look.fadeClass || ''}">
      <g class="uniform-shirt ${look.shirtClass}">${shirtSVG}</g>
      <path class="uniform-pants ${look.pantsClass}" d="${look.pants}"></path>
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 64 76" role="img" aria-label="Seragam hari ${DAY_LABELS[dayKey] || ''}">${looksMarkup}</svg>`;
}

/* ===================================================================
   1. UTIL: tanggal & hari (Bahasa Indonesia, tanpa Intl agar konsisten
      di semua browser/WebView tanpa bergantung pada data locale).
   =================================================================== */
const DAY_KEYS = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT'];
const DAY_LABELS = { SENIN: 'Senin', SELASA: 'Selasa', RABU: 'Rabu', KAMIS: 'Kamis', JUMAT: 'Jumat' };
const DAY_FULL = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTH_FULL = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function todayDayKey() {
  const map = { 1: 'SENIN', 2: 'SELASA', 3: 'RABU', 4: 'KAMIS', 5: 'JUMAT' };
  return map[new Date().getDay()] || null;
}

/**
 * Mencari data jurusan (nama lengkap, singkatan, daftar rombel) dari
 * majorsData berdasarkan tingkat kelas & kunci jurusan.
 */
function getMajorInfo(kelas, majorKey) {
  const list = majorsData && majorsData[kelas];
  if (!list) return null;
  return list.find((m) => m.key === majorKey) || null;
}

function getMondayOfWeek(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getWeekDates() {
  const monday = getMondayOfWeek(new Date());
  const map = {};
  DAY_KEYS.forEach((key, idx) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + idx);
    map[key] = d;
  });
  return map;
}

function parseTimeRange(str) {
  const m = String(str || '').match(/(\d{1,2})[.:](\d{2})\s*-\s*(\d{1,2})[.:](\d{2})/);
  if (!m) return null;
  return [parseInt(m[1], 10) * 60 + parseInt(m[2], 10), parseInt(m[3], 10) * 60 + parseInt(m[4], 10)];
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ===================================================================
   2. WARNA MATA PELAJARAN
   =================================================================== */
const SUBJECT_COLOR_MAP = [
  ['Matematika', '--subj-matematika'],
  ['IPAS', '--subj-ipa'],
  ['Bahasa Indonesia', '--subj-bindo'],
  ['Bahasa Inggris', '--subj-binggris'],
  ['Bahasa Jepang', '--subj-mulok'],
  ['Seni Budaya', '--subj-senibudaya'],
  ['Sejarah', '--subj-sejarah'],
  ['Informatika', '--subj-informatika'],
  ['Agama', '--subj-agama'],
  ['Olahraga', '--subj-pjok'],
  ['Kewirausahaan', '--subj-wirausaha'],
  ['Mata Pelajaran Pilihan', '--subj-mulok'],
  ['Profil Pelajar Pancasila', '--subj-lainnya'],
  ['Istirahat', '--subj-istirahat'],
  ['Upacara', '--subj-lainnya'],
  ['Ibadah', '--subj-lainnya'],
];

function getSubjectColorVar(subject) {
  for (const [key, varName] of SUBJECT_COLOR_MAP) {
    if (subject.includes(key)) return varName;
  }
  // Mata pelajaran konsentrasi/produktif jurusan (mis. Dasar-Dasar TJKT,
  // Akuntansi Keuangan, dst.) memakai warna aksen sekolah agar menonjol.
  return '--subj-produktif';
}

/* ===================================================================
   3. TEMA — deteksi otomatis, simpan pilihan terakhir, default terang.
   =================================================================== */
const THEME_KEY = 'jp-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  if (meta && bg) meta.setAttribute('content', bg);
}

function setTheme(theme, persist) {
  applyTheme(theme);
  if (persist) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage unavailable */ }
  }
}

function initTheme() {
  // Atribut data-theme sudah diset secara sinkron oleh skrip di <head>
  // (sebelum render pertama) agar tidak ada kedipan tema. Di sini kita
  // hanya menyinkronkan meta theme-color & memasang listener.
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark', true);
    });
  }

  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        let saved = null;
        try { saved = localStorage.getItem(THEME_KEY); } catch (err) { /* noop */ }
        if (saved === 'light' || saved === 'dark') return; // pilihan manual selalu diutamakan
        setTheme(e.matches ? 'dark' : 'light', false);
      });
    } catch (e) { /* matchMedia change listener unsupported — abaikan */ }
  }
}

/* ===================================================================
   4. STATE & NAVIGASI (dengan riwayat browser agar tombol back
      perangkat / gesture iOS bekerja seperti aplikasi native)
   =================================================================== */
let currentState = {
  selectedClass: null,
  selectedMajor: null,
  selectedRombel: null,
  selectedDay: null,
  currentScreen: 'mainMenu',
};

const SCREEN_IDS = ['mainMenu', 'jurusanSelection', 'rombelSelection', 'daySelection', 'scheduleDisplay', 'funFactsDisplay'];

function setActiveScreen(screenName, direction) {
  SCREEN_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active', 'enter-right', 'enter-left');
  });
  const target = document.getElementById(screenName);
  if (target) {
    target.classList.add('active');
    if (direction === 'forward') target.classList.add('enter-right');
    if (direction === 'backward') target.classList.add('enter-left');
  }
  currentState.currentScreen = screenName;

  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.hidden = screenName === 'mainMenu';

  updateBreadcrumb();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function pushHistory(screenName) {
  const state = Object.assign({}, currentState, { currentScreen: screenName });
  try { history.pushState(state, '', '#' + screenName); } catch (e) { /* noop */ }
}

function goToScreen(screenName, opts) {
  opts = opts || {};
  const push = opts.push !== false;
  const direction = opts.direction || 'forward';

  switch (screenName) {
    case 'mainMenu':
      updateCurrentDate();
      renderContinueCard();
      break;
    case 'jurusanSelection':
      renderJurusanGrid(currentState.selectedClass);
      break;
    case 'rombelSelection':
      renderRombelGrid(currentState.selectedClass, currentState.selectedMajor);
      break;
    case 'daySelection':
      renderDaySelection();
      break;
    case 'scheduleDisplay':
      renderSchedule(currentState.selectedDay);
      break;
    case 'funFactsDisplay':
      renderFunFacts();
      break;
  }

  setActiveScreen(screenName, direction);
  if (push) pushHistory(screenName);
}

/* ===================================================================
   5. BREADCRUMB
   =================================================================== */
function updateBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  const { currentScreen, selectedClass, selectedMajor, selectedRombel, selectedDay } = currentState;

  if (currentScreen === 'mainMenu') {
    bc.hidden = true;
    bc.innerHTML = '';
    return;
  }

  const segments = [{ label: 'Beranda', onClick: () => goToScreen('mainMenu') }];
  const major = getMajorInfo(selectedClass, selectedMajor);

  if (currentScreen === 'funFactsDisplay') {
    segments.push({ label: 'Fun Facts', current: true });
  } else {
    segments.push({
      label: `Kelas ${selectedClass}`,
      current: currentScreen === 'jurusanSelection',
      onClick: currentScreen !== 'jurusanSelection' ? () => goToScreen('jurusanSelection') : null,
    });
    if (currentScreen === 'rombelSelection' || currentScreen === 'daySelection' || currentScreen === 'scheduleDisplay') {
      const hasMultipleRombel = major && major.rombels.length > 1;
      segments.push({
        label: major ? major.short : '',
        current: currentScreen === 'rombelSelection',
        onClick: currentScreen !== 'rombelSelection' && hasMultipleRombel ? () => goToScreen('rombelSelection') : null,
      });
    }
    if (currentScreen === 'daySelection' || currentScreen === 'scheduleDisplay') {
      segments.push({
        label: `${major ? major.short : ''} ${selectedRombel}`,
        current: currentScreen === 'daySelection',
        onClick: currentScreen !== 'daySelection' ? () => goToScreen('daySelection') : null,
      });
    }
    if (currentScreen === 'scheduleDisplay') {
      segments.push({ label: DAY_LABELS[selectedDay] || '', current: true });
    }
  }

  bc.innerHTML = '';
  segments.forEach((seg, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'crumb-sep';
      sep.innerHTML = ICONS.chevronRight;
      bc.appendChild(sep);
    }
    if (seg.current || !seg.onClick) {
      const span = document.createElement('span');
      span.className = 'crumb';
      span.textContent = seg.label;
      if (seg.current) span.setAttribute('aria-current', 'true');
      bc.appendChild(span);
    } else {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'crumb';
      btn.textContent = seg.label;
      btn.addEventListener('click', seg.onClick);
      bc.appendChild(btn);
    }
  });
  bc.hidden = false;
}

/* ===================================================================
   6. BERANDA — tanggal & kartu "lanjutkan"
   =================================================================== */
function updateCurrentDate() {
  const now = new Date();
  const text = `${DAY_FULL[now.getDay()]}, ${now.getDate()} ${MONTH_FULL[now.getMonth()]} ${now.getFullYear()}`;
  const el = document.getElementById('currentDate');
  if (el) el.textContent = text;
}

function getLastRombel() {
  try {
    const raw = localStorage.getItem('jp-last-rombel');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed && parsed.kelas && parsed.jurusan && parsed.rombel &&
      scheduleData[parsed.kelas] &&
      scheduleData[parsed.kelas][parsed.jurusan] &&
      scheduleData[parsed.kelas][parsed.jurusan][parsed.rombel]
    ) {
      return parsed;
    }
  } catch (e) { /* noop */ }
  return null;
}

function saveLastRombel(kelas, jurusan, rombel) {
  try { localStorage.setItem('jp-last-rombel', JSON.stringify({ kelas, jurusan, rombel })); } catch (e) { /* noop */ }
}

function renderContinueCard() {
  const card = document.getElementById('continueCard');
  if (!card) return;
  const last = getLastRombel();
  if (!last) { card.hidden = true; return; }

  const majorInfo = getMajorInfo(last.kelas, last.jurusan);
  const majorShort = majorInfo ? majorInfo.short : last.jurusan;

  const todayKey = todayDayKey();
  const labelEl = document.getElementById('continueLabel');
  const targetEl = document.getElementById('continueTarget');

  if (todayKey) {
    labelEl.textContent = 'Lihat Jadwal Hari Ini';
    targetEl.textContent = `${majorShort} ${last.rombel} · Kelas ${last.kelas} • ${DAY_LABELS[todayKey]}`;
  } else {
    labelEl.textContent = 'Lanjutkan';
    targetEl.textContent = `${majorShort} ${last.rombel} · Kelas ${last.kelas}`;
  }

  card.hidden = false;
  card.onclick = () => {
    currentState.selectedClass = last.kelas;
    currentState.selectedMajor = last.jurusan;
    currentState.selectedRombel = last.rombel;
    if (todayKey) {
      currentState.selectedDay = todayKey;
      goToScreen('scheduleDisplay');
    } else {
      goToScreen('daySelection');
    }
  };
}

/* ===================================================================
   7. RENDER: PILIH JURUSAN & PILIH ROMBEL
   =================================================================== */
function renderJurusanGrid(kelas) {
  const titleEl = document.getElementById('jurusanTitle');
  if (titleEl) titleEl.textContent = `Pilih Jurusan — Kelas ${kelas}`;

  const grid = document.getElementById('jurusanGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const majors = majorsData[kelas];
  if (!majors || !majors.length) {
    grid.innerHTML = '<p class="no-data">Tidak ada data jurusan untuk kelas ini.</p>';
    return;
  }

  const frag = document.createDocumentFragment();
  majors.forEach((m, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'jurusan-btn stagger-item';
    btn.style.animationDelay = `${i * 30}ms`;
    btn.dataset.jurusan = m.key;
    const rombelCount = m.rombels.length;
    btn.innerHTML = `
      <span class="jurusan-badge">${escapeHtml(m.short)}</span>
      <span class="jurusan-info">
        <span class="jurusan-name">${escapeHtml(m.name)}</span>
        <span class="jurusan-sub">${rombelCount} rombel</span>
      </span>
      <svg class="icon chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    `;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

function renderRombelGrid(kelas, jurusanKey) {
  const major = getMajorInfo(kelas, jurusanKey);
  const titleEl = document.getElementById('rombelTitle');
  if (titleEl) titleEl.textContent = major ? `Pilih Kelas — ${major.name}` : 'Pilih Kelas';

  const grid = document.getElementById('rombelGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const data = scheduleData[kelas] && scheduleData[kelas][jurusanKey];
  if (!data || !major) {
    grid.innerHTML = '<p class="no-data">Tidak ada data untuk jurusan ini.</p>';
    return;
  }

  const rombels = Object.keys(data).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const frag = document.createDocumentFragment();
  rombels.forEach((r, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rombel-btn stagger-item';
    btn.style.animationDelay = `${i * 25}ms`;
    btn.dataset.rombel = r;
    btn.textContent = `${major.short} ${r}`;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

/* ===================================================================
   8. RENDER: PILIH HARI (dengan tanggal asli minggu ini + badge "Hari ini")
   =================================================================== */
function renderDaySelection() {
  const { selectedClass, selectedMajor, selectedRombel } = currentState;
  const major = getMajorInfo(selectedClass, selectedMajor);

  const titleEl = document.getElementById('dayTitle');
  if (titleEl) titleEl.textContent = major ? `${major.short} ${selectedRombel} — Kelas ${selectedClass}` : 'Pilih Hari';

  const grid = document.getElementById('dayGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const weekDates = getWeekDates();
  const todayKey = todayDayKey();
  const frag = document.createDocumentFragment();

  DAY_KEYS.forEach((key, i) => {
    const d = weekDates[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'day-btn stagger-item' + (key === todayKey ? ' is-today' : '');
    btn.style.animationDelay = `${i * 35}ms`;
    btn.dataset.day = key;
    btn.innerHTML = `
      <span class="day-date-badge"><span class="dnum">${d.getDate()}</span><span class="dmon">${MONTH_SHORT[d.getMonth()]}</span></span>
      <span class="day-info">
        <span class="day-name">${DAY_LABELS[key]}</span>
        ${key === todayKey ? '<span class="day-today-tag">Hari ini</span>' : ''}
      </span>
      <span class="day-uniform-icon">${uniformIconSVG(key)}</span>
    `;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

/* ===================================================================
   9. RENDER: JADWAL (dengan penanda "Sekarang" bila relevan)
   =================================================================== */
function renderSchedule(day) {
  currentState.selectedDay = day;
  const { selectedClass, selectedMajor, selectedRombel } = currentState;
  const major = getMajorInfo(selectedClass, selectedMajor);

  const titleEl = document.getElementById('scheduleTitle');
  if (titleEl) {
    titleEl.textContent = major
      ? `${DAY_LABELS[day] || day} — ${major.short} ${selectedRombel} (Kelas ${selectedClass})`
      : `${DAY_LABELS[day] || day}`;
  }

  const iconEl = document.getElementById('scheduleUniformIcon');
  if (iconEl) iconEl.innerHTML = uniformIconSVG(day);

  const list = document.getElementById('scheduleList');
  if (!list) return;
  list.innerHTML = '';

  const schedule = scheduleData[selectedClass] && scheduleData[selectedClass][selectedMajor] && scheduleData[selectedClass][selectedMajor][selectedRombel]
    ? scheduleData[selectedClass][selectedMajor][selectedRombel][day]
    : null;

  const isViewingToday = day === todayDayKey();
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  if (schedule && schedule.length) {
    const frag = document.createDocumentFragment();
    schedule.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = 'schedule-item stagger-item';
      row.style.animationDelay = `${i * 25}ms`;

      let isNow = false;
      if (isViewingToday) {
        const range = parseTimeRange(item.time);
        if (range && nowMinutes >= range[0] && nowMinutes < range[1]) isNow = true;
      }
      if (isNow) row.classList.add('is-now');

      const colorVar = getSubjectColorVar(item.subject || '');
      row.innerHTML = `
        <span class="time-slot">${escapeHtml(item.time || '')}</span>
        <span class="subject-cell">
          <span class="subject-dot" style="--subject-color: var(${colorVar})"></span>
          <span class="subject-name">${escapeHtml(item.subject || '')}</span>
          ${isNow ? '<span class="now-tag">Sekarang</span>' : ''}
        </span>
      `;
      frag.appendChild(row);
    });
    list.appendChild(frag);
  } else {
    list.innerHTML = '<div class="no-data">Tidak ada jadwal untuk hari ini.</div>';
  }
}

/* ===================================================================
   10. RENDER: FUN FACTS
   =================================================================== */

/**
 * Memecah satu baris teks fun fact menjadi pasangan label/nilai bila
 * memungkinkan, supaya tampil rapi seperti daftar (label di kiri,
 * nilai di kanan) alih-alih satu kalimat panjang yang "ditempel".
 * Mengembalikan baris: { label, value } (label null jika tidak ada pola).
 */
function splitFactLabelValue(text) {
  let idx = text.indexOf(': ');
  if (idx !== -1) {
    return { label: text.slice(0, idx).trim(), value: text.slice(idx + 2).trim() };
  }
  idx = text.indexOf(' = ');
  if (idx !== -1) {
    return { label: text.slice(0, idx).trim(), value: text.slice(idx + 3).trim() };
  }
  idx = text.indexOf(' — ');
  if (idx !== -1) {
    return { label: text.slice(0, idx).trim(), value: text.slice(idx + 3).trim() };
  }
  return { label: null, value: text.trim() };
}

function parseFactEntry(raw) {
  const rows = [];
  String(raw)
    .split(/\s+·\s+/)
    .forEach((part) => {
      part = part.trim();
      if (!part) return;
      // Dua pasangan "label: nilai" yang digabung dengan em dash, mis.
      // "Guru perempuan: 47 orang — Guru laki-laki: 21 orang" → 2 baris.
      const dashParts = part.split(/\s+—\s+/);
      if (dashParts.length === 2 && dashParts[0].includes(': ') && dashParts[1].includes(': ')) {
        dashParts.forEach((p) => rows.push(splitFactLabelValue(p)));
        return;
      }
      rows.push(splitFactLabelValue(part));
    });
  return rows;
}

/**
 * Menentukan cara terbaik menampilkan satu baris { label, value }:
 * - 'stat' → nilai ringkas & diawali angka (mis. "47 orang (±69%)",
 *   "7 guru") → cocok jadi kotak angka besar yang bisa dianimasikan.
 * - 'row'  → berlabel tapi isinya kalimat/nama/daftar panjang → tetap
 *   satu baris teks yang mengalir wajar, label ditebalkan sebagai
 *   awalan, BUKAN dipaksa jadi dua kolom sejajar yang gampang
 *   berdempetan saat teksnya panjang.
 * - 'text' → tanpa label sama sekali → paragraf biasa.
 */
function classifyFactRow(row) {
  if (!row.label) return { type: 'text', value: row.value };
  const m = row.value.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (m && row.value.length <= 42) {
    return { type: 'stat', label: row.label, number: m[1], unit: m[2] };
  }
  return { type: 'row', label: row.label, value: row.value };
}

/* Animasi hitung naik 0 → target, dipakai untuk kotak angka fun facts.
   Menghormati preferensi Reduce Motion (dicek oleh pemanggil). */
function animateCountUp(el, target) {
  const duration = 900;
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = String(target);
  }
  requestAnimationFrame(tick);
}

/* Angka baru mulai menghitung begitu kotaknya benar-benar terlihat
   (scroll ke dalam viewport), bukan langsung semua sekaligus saat
   render — biar terasa hidup saat pengguna menggulir daftar fakta. */
function setupFactStatObserver(container) {
  const nums = container.querySelectorAll('.fact-stat-number[data-target]');
  if (!nums.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    nums.forEach((el) => { el.textContent = el.dataset.target; });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      animateCountUp(el, isNaN(target) ? 0 : target);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  nums.forEach((el) => observer.observe(el));
}

function renderFunFacts() {
  const container = document.getElementById('factsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!funFactsData || !funFactsData.length) {
    container.innerHTML = '<p class="no-data">Tidak ada data fun facts tersedia.</p>';
    return;
  }

  const frag = document.createDocumentFragment();
  funFactsData.forEach((fact, i) => {
    const card = document.createElement('div');
    card.className = 'card fact-card stagger-item';
    const delay = `${i * 70}ms`;
    card.style.animationDelay = delay;
    card.style.setProperty('--stagger-delay', delay);
    card.style.setProperty('--fact-accent', `var(${FACT_ACCENTS[i % FACT_ACCENTS.length]})`);

    const rows = (fact.items || []).flatMap((it) => parseFactEntry(it)).map(classifyFactRow);
    const stats = rows.filter((r) => r.type === 'stat');
    const textRows = rows.filter((r) => r.type !== 'stat');

    const statsHtml = stats.length ? `
      <div class="fact-stats">
        ${stats.map((s) => `
          <div class="fact-stat">
            <span class="fact-stat-number" data-target="${parseInt(s.number, 10) || 0}">0</span>
            ${s.unit ? `<span class="fact-stat-unit">${escapeHtml(s.unit)}</span>` : ''}
            <span class="fact-stat-label">${escapeHtml(s.label)}</span>
          </div>
        `).join('')}
      </div>` : '';

    const textHtml = textRows.length ? `
      <ul class="fact-list">
        ${textRows.map((r) => (r.type === 'row'
          ? `<li class="fact-text"><span class="fact-text-label">${escapeHtml(r.label)}:</span> ${escapeHtml(r.value)}</li>`
          : `<li class="fact-text">${escapeHtml(r.value)}</li>`)).join('')}
      </ul>` : '';

    card.innerHTML = `
      <div class="fact-card-head">
        <div class="fact-illustration">${FACT_ILLUSTRATIONS[i % FACT_ILLUSTRATIONS.length]}</div>
        <h3>${escapeHtml(fact.title)}</h3>
      </div>
      ${statsHtml}
      ${textHtml}
    `;
    frag.appendChild(card);
  });
  container.appendChild(frag);
  setupFactStatObserver(container);
}

/* ===================================================================
   11. INSTALL APP (PWA) — Android/Chrome via beforeinstallprompt,
       iOS via tutorial khusus, browser lain via fallback umum.
   =================================================================== */
let deferredInstallPrompt = null;

function isStandaloneDisplay() {
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}

function isIOSDevice() {
  const ua = window.navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/* Di iOS, "Add to Home Screen" cuma ada di menu Share Safari. Kalau
   halaman dibuka lewat browser lain (atau in-app browser medsos),
   pengguna perlu diarahkan buka dulu di Safari — deteksi dari
   penanda user-agent khas tiap browser/in-app browser tsb. */
function detectNonSafariIOSBrowser() {
  if (!isIOSDevice()) return null;
  const ua = window.navigator.userAgent || '';
  if (/CriOS/i.test(ua)) return 'Chrome';
  if (/FxiOS/i.test(ua)) return 'Firefox';
  if (/EdgiOS/i.test(ua)) return 'Edge';
  if (/OPiOS/i.test(ua)) return 'Opera';
  if (/DuckDuckGo/i.test(ua)) return 'DuckDuckGo';
  if (/GSA/i.test(ua)) return 'Google App';
  if (/FBAN|FBAV/i.test(ua)) return 'Facebook';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/Line\//i.test(ua)) return 'LINE';
  return null; // default: anggap Safari
}

function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.hidden = false;
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.hidden = true;
}

function initModals() {
  const bindClose = (closeId, overlayId) => {
    const closeBtn = document.getElementById(closeId);
    const overlay = document.getElementById(overlayId);
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(overlayId));
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(overlayId); });
  };
  bindClose('iosModalClose', 'iosModalOverlay');
  bindClose('genericModalClose', 'genericModalOverlay');

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeModal('iosModalOverlay');
    closeModal('genericModalOverlay');
  });
}

function initInstallUI() {
  const card = document.getElementById('installCard');
  const action = document.getElementById('installAction');
  const dismiss = document.getElementById('installDismiss');
  if (!card || !action || !dismiss) return;

  if (isStandaloneDisplay()) { card.hidden = true; return; }

  let dismissed = false;
  try { dismissed = localStorage.getItem('jp-install-dismissed') === '1'; } catch (e) { /* noop */ }
  card.hidden = dismissed;

  dismiss.addEventListener('click', (e) => {
    e.stopPropagation();
    card.hidden = true;
    try { localStorage.setItem('jp-install-dismissed', '1'); } catch (err) { /* noop */ }
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!dismissed) card.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    card.hidden = true;
    deferredInstallPrompt = null;
  });

  action.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      try {
        const choice = await deferredInstallPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') card.hidden = true;
      } catch (e) { /* noop */ }
      deferredInstallPrompt = null;
    } else if (isIOSDevice()) {
      const otherBrowser = detectNonSafariIOSBrowser();
      const notice = document.getElementById('iosBrowserNotice');
      const nameEl = document.getElementById('iosBrowserName');
      if (notice) {
        if (otherBrowser) {
          if (nameEl) nameEl.textContent = otherBrowser;
          notice.hidden = false;
        } else {
          notice.hidden = true;
        }
      }
      openModal('iosModalOverlay');
    } else {
      openModal('genericModalOverlay');
    }
  });
}

/* ===================================================================
   12. PROTEKSI ASET GAMBAR
   Mencegah cara unduh kasual (klik-kanan "Simpan Gambar Sebagai...",
   tap-tahan di mobile, drag keluar halaman) KHUSUS pada elemen
   bergambar (logo sekolah & elemen bertanda .protected-img/
   .protected-bg untuk pemakaian di masa depan). Listener sengaja
   dibatasi ke elemen ini saja — klik-kanan & seleksi teks di bagian
   lain halaman (mis. untuk menyalin jadwal) tetap berfungsi normal.

   Catatan jujur: ini hanya menghalangi jalur unduh yang umum/kasual.
   Tidak ada teknik front-end yang benar-benar kedap terhadap pengguna
   yang membuka DevTools atau mengambil screenshot — itu di luar
   jangkauan proteksi sisi-klien mana pun.
   =================================================================== */
const PROTECTED_IMAGE_SELECTOR = 'img, .protected-img, .protected-bg, .school-logo, .logo-shield';

function initImageProtection() {
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest && e.target.closest(PROTECTED_IMAGE_SELECTOR)) e.preventDefault();
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.closest && e.target.closest(PROTECTED_IMAGE_SELECTOR)) e.preventDefault();
  });
}

/* ===================================================================
   13. SERVICE WORKER (dukungan offline)
   =================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((err) => {
        console.error('Pendaftaran service worker gagal:', err);
      });
    });
  }
}

/* ===================================================================
   14. EVENT LISTENERS (delegasi pada kontainer yang persisten)
   =================================================================== */
function initEventListeners() {
  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.addEventListener('click', () => history.back());

  const gradeGrid = document.getElementById('gradeGrid');
  if (gradeGrid) {
    gradeGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.grade-btn');
      if (!btn) return;
      currentState.selectedClass = btn.dataset.class;
      currentState.selectedMajor = null;
      currentState.selectedRombel = null;
      goToScreen('jurusanSelection');
    });
  }

  const jurusanGrid = document.getElementById('jurusanGrid');
  if (jurusanGrid) {
    jurusanGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.jurusan-btn');
      if (!btn) return;
      const jurusanKey = btn.dataset.jurusan;
      currentState.selectedMajor = jurusanKey;
      currentState.selectedRombel = null;

      const major = getMajorInfo(currentState.selectedClass, jurusanKey);
      if (major && major.rombels.length === 1) {
        // Hanya ada 1 rombel di jurusan ini — langsung lompat ke pilih hari.
        currentState.selectedRombel = major.rombels[0];
        saveLastRombel(currentState.selectedClass, jurusanKey, currentState.selectedRombel);
        goToScreen('daySelection');
      } else {
        goToScreen('rombelSelection');
      }
    });
  }

  const rombelGrid = document.getElementById('rombelGrid');
  if (rombelGrid) {
    rombelGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.rombel-btn');
      if (!btn) return;
      currentState.selectedRombel = btn.dataset.rombel;
      saveLastRombel(currentState.selectedClass, currentState.selectedMajor, currentState.selectedRombel);
      goToScreen('daySelection');
    });
  }

  const dayGrid = document.getElementById('dayGrid');
  if (dayGrid) {
    dayGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.day-btn');
      if (!btn) return;
      currentState.selectedDay = btn.dataset.day;
      goToScreen('scheduleDisplay');
    });
  }

  const funFactsBtn = document.getElementById('funFactsBtn');
  if (funFactsBtn) funFactsBtn.addEventListener('click', () => goToScreen('funFactsDisplay'));

  window.addEventListener('popstate', (e) => {
    const state = e.state;
    if (!state) {
      currentState = { selectedClass: null, selectedMajor: null, selectedRombel: null, selectedDay: null, currentScreen: 'mainMenu' };
      goToScreen('mainMenu', { push: false, direction: 'backward' });
      return;
    }
    currentState = Object.assign({}, state);
    goToScreen(state.currentScreen, { push: false, direction: 'backward' });
  });
}

/* ===================================================================
   15. INISIALISASI
   =================================================================== */
function init() {
  initTheme();
  updateCurrentDate();
  renderContinueCard();
  initInstallUI();
  initModals();
  initImageProtection();
  initServiceWorker();
  initEventListeners();

  try {
    history.replaceState(Object.assign({}, currentState, { currentScreen: 'mainMenu' }), '', '#mainMenu');
  } catch (e) { /* noop */ }

  setActiveScreen('mainMenu', null);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
