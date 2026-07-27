/**
 * funfacts.js — SEMUA isi & tampilan halaman "Fun Facts Sekolah" ada di sini.
 *
 * Ini file KHUSUS untuk Fun Facts (terpisah dari jadwal & data jurusan) —
 * supaya kalau mau menambah/mengubah/menghapus kartu fakta, cukup edit file
 * ini saja tanpa menyentuh js/app.js atau file jadwal sama sekali.
 *
 * Tiap kartu = satu object di array funFactsData, dengan field:
 * - "id"     penanda unik kartu (bebas, hanya dipakai untuk animasi/urutan).
 * - "title"  judul kartu, tampil tebal di bagian atas.
 * - "icon"   kunci ilustrasi, harus salah satu kunci di FACT_ICONS di bawah.
 * - "accent" warna aksen kartu, merujuk ke variabel warna css/style.css
 *            (boleh pakai token --subj-*, --gold, atau --accent).
 * - "items"  daftar baris fakta (teks biasa). Format "Label: nilai" atau
 *            "Label = nilai" atau "Label — nilai" otomatis dirapikan jadi
 *            dua kolom oleh app.js (lihat classifyFactRow()); baris angka
 *            pendek otomatis jadi kotak angka besar yang "menghitung naik".
 *
 * CARA MENAMBAH KARTU BARU:
 *   1. Tambahkan object baru di array funFactsData (boleh di mana saja).
 *   2. Pilih "icon" yang sudah ada di FACT_ICONS, atau tambahkan ilustrasi
 *      SVG baru sendiri di FACT_ICONS dengan kunci baru.
 *   3. Kartu otomatis tampil di halaman Fun Facts, urut sesuai urutan array.
 *
 * CARA MENGUBAH ANGKA JUMLAH GURU (paling sering diedit tiap semester):
 *   Cari komentar "Fakta jumlah guru" di bawah — itu menandai baris/kartu
 *   yang berisi angka jumlah guru & tenaga kependidikan. Tinggal edit
 *   angkanya langsung di teks "items", tidak perlu ubah bagian lain.
 */

/* ---- Ilustrasi dua-warna untuk tiap kartu (SVG asli, bukan trace/ikon pihak lain) ---- */
const FACT_ICONS = {
  // Grafik batang naik + topi wisuda kecil — untuk kartu ringkasan angka sekolah.
  chart: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<rect x="6" y="28" width="8" height="12" rx="2.5" fill="currentColor" opacity="0.25"/>'
    + '<rect x="20" y="20" width="8" height="20" rx="2.5" fill="currentColor" opacity="0.4"/>'
    + '<rect x="34" y="11" width="8" height="29" rx="2.5" fill="currentColor" opacity="0.6"/>'
    + '<path d="M5 40h38" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
    + '<path d="M38 4l8 3.6-8 3.6-8-3.6L38 4z" fill="currentColor"/>'
    + '<path d="M33 9v3.8c0 1.3 2.3 2.4 5 2.4s5-1.1 5-2.4V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>',
  // Simpul jaringan (satu sekolah, banyak jurusan) — untuk kartu guru per jurusan.
  network: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M24 24L10 12M24 24L38 12M24 24L9 34M24 24L39 34M24 24V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>'
    + '<circle cx="24" cy="8" r="3.4" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="10" cy="12" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="38" cy="12" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="9" cy="34" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="39" cy="34" r="4.2" fill="currentColor" opacity="0.75"/>'
    + '<circle cx="24" cy="24" r="7" fill="currentColor"/>'
    + '</svg>',
  // Buku terbuka (ragam mata pelajaran) — untuk kartu guru mapel umum.
  book: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M24 14c-3.8-2.6-9.4-3.4-15.5-2.4v23c6.1-1 11.7-.2 15.5 2.4 3.8-2.6 9.4-3.4 15.5-2.4v-23C33.4 10.6 27.8 11.4 24 14z" fill="currentColor" opacity="0.16"/>'
    + '<path d="M24 14c-3.8-2.6-9.4-3.4-15.5-2.4v23c6.1-1 11.7-.2 15.5 2.4 3.8-2.6 9.4-3.4 15.5-2.4v-23C33.4 10.6 27.8 11.4 24 14z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
    + '<path d="M24 14v23" stroke="currentColor" stroke-width="2"/>'
    + '<path d="M12 17.5h7M12 22.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>'
    + '<path d="M29 17.5h7M29 22.5h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>'
    + '<circle cx="38" cy="8" r="2.4" fill="currentColor"/>'
    + '<circle cx="43" cy="13" r="1.5" fill="currentColor" opacity="0.6"/>'
    + '</svg>',
  // Bagan organisasi (1 di atas, 2 di bawah) — untuk kartu struktur kepemimpinan.
  orgchart: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M24 16v6M24 22H12v5M24 22h12v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>'
    + '<rect x="16" y="6" width="16" height="11" rx="3" fill="currentColor"/>'
    + '<rect x="4" y="27" width="16" height="11" rx="3" fill="currentColor" opacity="0.62"/>'
    + '<rect x="28" y="27" width="16" height="11" rx="3" fill="currentColor" opacity="0.62"/>'
    + '</svg>',
  // Ijazah bergaris + lencana bintang — untuk kartu arti gelar akademik.
  diploma: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<rect x="5" y="8" width="27" height="20" rx="2.5" fill="currentColor" opacity="0.14" stroke="currentColor" stroke-width="2"/>'
    + '<path d="M10.5 14.5h16M10.5 19.5h16M10.5 24.5h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" opacity="0.8"/>'
    + '<path d="M32 33l-2 8 3.6-2.2L36 41l2-8" fill="currentColor" opacity="0.85"/>'
    + '<circle cx="35" cy="30" r="8" fill="currentColor"/>'
    + '<path d="M35 26.3l1.7 3.4 3.8.5-2.75 2.7.65 3.8-3.4-1.8-3.4 1.8.65-3.8-2.75-2.7 3.8-.5z" fill="var(--surface)"/>'
    + '</svg>',
  // Medali pita + bintang — untuk kartu guru bergelar magister.
  medal: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<path d="M15 4h8l-2.6 16h-2.8z" fill="currentColor" opacity="0.55"/>'
    + '<path d="M33 4h-8l2.6 16h2.8z" fill="currentColor" opacity="0.55"/>'
    + '<circle cx="24" cy="30.5" r="13" fill="currentColor"/>'
    + '<path d="M24 23.2l2.5 5.1 5.6.8-4 4 .95 5.6L24 36l-5 2.7.95-5.6-4-4 5.6-.8z" fill="var(--surface)"/>'
    + '</svg>',
};

/* ---- Kartu-kartu Fun Facts, urut sesuai tampilan di halaman ---- */
const funFactsData = [
  {
    id: 'sekolah-dalam-angka',
    title: 'SMK Negeri 1 Bitung dalam Angka',
    icon: 'chart',
    accent: '--accent',
    items: [
      // Fakta jumlah guru: total guru se-sekolah (dihitung dari nama guru unik
      // di dokumen Pembagian Tugas Mengajar). Update angka ini tiap semester.
      '62 guru mengajar pada Semester Ganjil 2026/2027 (data Pembagian Tugas Mengajar)',
      'Dokumen sumber ini hanya mencakup guru — belum ada data tenaga kependidikan (Tata Usaha & Layanan Operasional) untuk semester ini',
      'Mengelola 41 rombongan belajar: 14 di kelas X, 14 di kelas XI, dan 13 di kelas XII',
      'Membina 7 konsentrasi keahlian: AKL, MPLB, Bisnis Ritel, TJKT, Kuliner, Perhotelan, dan ULW',
    ],
  },
  {
    id: 'guru-produktif-per-jurusan',
    title: 'Guru Produktif per Jurusan',
    icon: 'network',
    accent: '--subj-tik',
    items: [
      // Fakta jumlah guru: sebaran guru produktif per jurusan.
      'MPLB (Manajemen Perkantoran dan Layanan Bisnis): 9 guru',
      'AKL (Akuntansi dan Keuangan Lembaga): 8 guru',
      'Bisnis Ritel (disebut "Pemasaran" untuk kelas X): 7 guru',
      'TJKT (Teknik Jaringan Komputer dan Telekomunikasi): 6 guru',
      'ULW (Usaha Layanan Wisata, "Usaha Layanan Pariwisata" untuk kelas X): 3 guru',
      'Perhotelan: 3 guru',
      'Kuliner: 3 guru',
      'Sejumlah guru mengajar produktif di lebih dari satu jurusan (mis. MPLB merangkap AKL/Bisnis Ritel), jadi total di atas tidak sama dengan jumlah guru unik',
    ],
  },
  {
    id: 'guru-mapel-umum',
    title: 'Guru Mata Pelajaran Umum',
    icon: 'book',
    accent: '--subj-ipa',
    items: [
      // Fakta jumlah guru: sebaran guru mata pelajaran umum.
      'Pendidikan Pancasila: 8 guru',
      'Bahasa Inggris: 7 guru',
      'Matematika: 6 guru',
      'Pendidikan Agama: 6 guru (2 Islam, 3 Kristen Protestan, 1 Katolik)',
      'Informatika dan Projek IPAS (PIPAS): masing-masing 5 guru',
      'Bahasa Indonesia dan PJOK: masing-masing 4 guru',
      'Sejarah: 3 guru',
      'Bahasa Jepang: 2 guru',
      'Seni Budaya: 1 guru',
    ],
  },
  {
    id: 'struktur-kepemimpinan',
    title: 'Struktur Kepemimpinan Sekolah',
    icon: 'orgchart',
    accent: '--gold',
    items: [
      'Kepala Sekolah: Drs. Christo Alexandro Lewan',
      'Wakil Kurikulum: Maria M. Lengkong, S.Pd., M.Pd.',
      'Wakil Hubungan Masyarakat: Ronald I. Rumampuk, S.Pd., Gr.',
      'Wakil Kesiswaan: Olivia L.I. Wowiling, S.Pd.',
      '7 Ketua Konsentrasi Keahlian (K3) memimpin tiap jurusan produktif: AKL, TJKT, Bisnis Ritel, MPLB, Kuliner, Perhotelan, dan ULW',
    ],
  },
  {
    id: 'arti-gelar-akademik',
    title: 'Arti Gelar Akademik & Profesi Guru',
    icon: 'diploma',
    accent: '--subj-pkn',
    items: [
      'S.Pd = Sarjana Pendidikan · M.Pd = Magister Pendidikan',
      'S.Pd.I = Sarjana Pendidikan Islam · S.Pd.K = Sarjana Pendidikan Kristen',
      'S.Fils = Sarjana Filsafat (Keagamaan) · S.Ag = Sarjana Agama',
      // Fakta jumlah guru: proporsi guru bergelar profesi Gr. (lulusan PPG).
      'Gr. = gelar profesi Guru, disandang setelah lulus Pendidikan Profesi Guru (PPG) — 3 dari 62 guru (±5%) tercatat bergelar Gr. di dokumen ini',
      'MM = Magister Manajemen · SE = Sarjana Ekonomi · S.Th = Sarjana Theologia',
      'S.ST.Par = Sarjana Terapan Pariwisata · S.IP = Sarjana Ilmu Politik · SKM = Sarjana Kesehatan Masyarakat',
      'Drs./Dra. dan Ir. adalah gelar gaya lama (sebelum aturan 1993), setara sarjana S1 pada masanya',
    ],
  },
  {
    id: 'guru-gelar-magister',
    title: 'Guru dengan Gelar Magister',
    icon: 'medal',
    accent: '--subj-agama',
    items: [
      'Maria M. Lengkong, S.Pd., M.Pd. — Wakil Kurikulum',
      'Triltje Lumihi, S.Pd., M.Pd. — K3 Bisnis Ritel',
      'Irvin Sibula, S.Pd., M.Pd.',
      'Charmi C. Manansang, S.Pd., M.Pd.',
      'Amelia Natari, S.Pd., M.Pd.',
      'Ritna David, S.Pd., MM — K3 ULW',
      'Amos Pandia, S.Pd., MM',
      'Drs. Paramata Mohune, MM',
    ],
  },
];
