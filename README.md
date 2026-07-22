# Jadwal Pelajaran — SMK Negeri 1 Bitung (versi PWA)

Aplikasi jadwal pelajaran berbasis kartu, siap diinstal sebagai **PWA**
(Progressive Web App) di Android maupun iOS. Proyek ini awalnya dibangun
untuk SMP Negeri 2 Bitung, lalu diadaptasi ulang untuk **SMK Negeri 1
Bitung** dengan navigasi yang mengikuti struktur jurusan (konsentrasi
keahlian) SMK.

## Cara menjalankan / menguji

Service worker (untuk dukungan offline & install) **butuh server**,
tidak bisa dibuka langsung lewat `file://`. Cara tercepat:

```bash
cd jadwal-sekolah-pwa
python3 -m http.server 8080
# lalu buka http://localhost:8080 di browser
```

Untuk dipasang secara nyata (agar tombol "Install Aplikasi" benar‑benar
aktif), unggah seluruh isi folder ini ke hosting apa pun yang mendukung
**HTTPS** (GitHub Pages, Netlify, Vercel, Firebase Hosting, cPanel,
dll.) — PWA install hanya berfungsi di atas HTTPS (atau localhost untuk
testing).

## Perubahan besar: dari SMP Negeri 2 Bitung ke SMK Negeri 1 Bitung

**Navigasi baru mengikuti struktur jurusan SMK**
- Alur sekarang: Beranda → **Kelas** (10/11/12) → **Jurusan** (konsentrasi
  keahlian) → **Rombel** → **Hari** → Jadwal — menambah satu langkah baru
  (pilih jurusan) dibanding versi SMP.
- 7 jurusan didukung: AKL, MPLB, Bisnis Ritel, TJKT, Kuliner, Perhotelan,
  dan ULW. Jurusan yang hanya punya 1 rombel (Kuliner, Perhotelan, ULW)
  otomatis melewati langkah "pilih rombel" karena tidak ada pilihan lain.
- Breadcrumb & kartu "Lanjutkan" di Beranda ikut disesuaikan (contoh:
  `Beranda › Kelas 10 › TJKT › TJKT 2 › Senin`).

**Sumber data jadwal**
- Seluruh 41 rombel (kelas X, XI, XII) beserta jadwal Senin–Jumat
  disusun ulang dari file *Pembagian Tugas Mengajar Tahun 2026/2027
  Semester Ganjil (Sementara)* yang diberikan — bukan data contoh.
- Dokumen sumber hanya mencantumkan kode singkatan mata pelajaran
  (mis. `DDP`, `ASJ`, `APJDM`) tanpa legenda. Nama lengkapnya
  direkonstruksi memakai referensi struktur Kurikulum Merdeka SMK yang
  berlaku umum (dicari lewat web search); sebagian besar (mapel umum,
  serta mapel konsentrasi TJKT/AKL/MPLB) cukup pasti, beberapa mapel
  produktif jurusan lain adalah rekonstruksi terbaik dari singkatannya.
  Silakan koreksi bila ada nama yang kurang tepat.
- Dokumen sumber juga tidak mencantumkan jam dinding, hanya "jam ke-1,
  ke-2, dst". Waktu yang ditampilkan memakai estimasi standar (1 JP =
  45 menit, mengikuti pola Upacara/Ibadah/Istirahat/OR-Kerja Bakti apa
  adanya dari dokumen) — sesuaikan `js/data.js` bila sekolah punya jam
  bel resmi yang berbeda.

**Ikon seragam harian (baru)**
- Setiap baris hari di layar "Pilih Hari", serta di judul layar Jadwal,
  kini menampilkan ikon seragam:
  - **Senin & Selasa** — seragam nasional putih & abu-abu.
  - **Rabu** — identitas jurusan; warnanya sengaja **beranimasi
    gradasi berjalan pelan** (bukan warna tetap satu jurusan) memakai
    CSS `hue-rotate`.
  - **Kamis** — batik sekolah, motif titik sederhana putih + biru
    pastel + biru (bukan reproduksi motif batik tertentu).
  - **Jumat** — dipilih seragam **olahraga** (biru tua & biru pastel)
    karena dokumen jadwal menunjukkan slot "OR/Kerja Bakti" tiap Jumat
    pagi di semua rombel. Bila yang dipakai sekolah ternyata seragam
    **pramuka** (coklat), tinggal ganti konfigurasi hari Jumat di
    `UNIFORM_CONFIG` (`js/app.js`).
  - Selasa tidak disebutkan eksplisit oleh pemberi tugas — didefault
    sama seperti Senin (seragam nasional), asumsi paling umum dipakai
    sekolah Indonesia.
  - Ikon digambar sebagai SVG asli (bukan hasil trace gambar referensi
    berwatermark yang dikirim) — hanya gaya siluetnya yang mengikuti
    referensi tersebut.

**Fun Facts diperbarui**
- Statistik guru & tenaga kependidikan kini memakai data nyata dari
  file kategorisasi guru SMK Negeri 1 Bitung (68 orang): sebaran guru
  produktif per jurusan, guru mapel umum, struktur kepemimpinan
  sekolah, hingga gelar akademik.
- Kategori baru: **arti gelar akademik & profesi guru** (mis. `Gr.` =
  gelar profesi lulusan Pendidikan Profesi Guru/PPG, `S.ST.Par` =
  Sarjana Terapan Pariwisata, dsb.) — dicari lewat web search agar
  akurat, plus daftar guru bergelar magister.

**Logo**
- Logo resmi SMK Negeri 1 Bitung tidak disertakan dalam berkas yang
  diberikan, jadi `assets/logo.svg` untuk sementara diganti lambang
  perisai + roda gigi + topi wisuda yang digambar orisinal (bukan hasil
  trace lambang resmi apa pun). Ikon PWA (`icons/*.png`) ikut
  digenerate ulang dari logo sementara ini. **Ganti file ini** dengan
  logo resmi sekolah bila tersedia.
- **Dioptimalkan untuk Safari/iOS (baru)**: bentuk perisai dipakai 4
  lapis (isi gradasi + bayangan, highlight kaca, glow tengah) tapi
  path-nya sebelumnya diduplikasi mentah 3×, membuat file 218 KB.
  Sekarang path unik disimpan sekali di `<defs>` dan 3 lapisannya
  memakai `<use>` — hasil render 100% identik (sudah diverifikasi
  piksel-per-piksel) tapi file turun jadi ~110 KB. Ini penting khusus
  di iOS karena Safari me-raster filter SVG (`feDropShadow`,
  `feGaussianBlur`) lewat CPU, jadi geometri sebesar ini yang
  digandakan 3× di elemen `background-image` kecil (92×92) bisa terasa
  berat/patah-patah di iPhone lama saat animasi transisi kartu
  berjalan. Kalau nanti ganti ke logo resmi, pertahankan pola
  `<defs><path id="..."></defs>` + `<use>` ini bila desainnya juga
  berlapis-lapis.

**Proteksi aset gambar (baru)**
- Logo di Beranda kini dipasang sebagai CSS `background-image` (bukan
  `<img>`), sehingga browser tidak menawarkan menu "Simpan Gambar
  Sebagai..." untuk elemen ini sama sekali.
- Ditambah lapisan transparan (`.logo-shield`) di atasnya, plus
  `contextmenu`/`dragstart` di-*preventDefault*-kan khusus untuk
  elemen bergambar (lihat `initImageProtection()` di `js/app.js`) —
  klik-kanan & seleksi teks di bagian lain halaman (mis. untuk
  menyalin jadwal) **tetap berfungsi normal**.
- Kelas util `.protected-img` / `.protected-bg` sudah disiapkan bila
  nanti menambah gambar lain (mis. galeri foto kegiatan sekolah) yang
  juga perlu dilindungi — tinggal pasang class-nya.
- **Batasan jujur**: ini hanya menghalangi jalur unduh kasual/umum.
  Tidak ada teknik front-end yang benar-benar kedap terhadap pengguna
  yang membuka DevTools atau mengambil screenshot layar.

**Screenshot manifest (baru)**
- `screenshots/screenshot-narrow.png` & `screenshot-wide.png` sebelumnya
  adalah file placeholder yang identik (512×512, sama persis) padahal
  `manifest.json` mendeklarasikan ukuran 824×1830 dan 1920×1200 — tidak
  cocok dengan file aslinya. Sekarang keduanya diganti tangkapan layar
  asli dari aplikasi (bukan mockup): layar **Jadwal** 1080×2400 untuk
  `form_factor: "narrow"`, dan layar **Beranda** 1920×1080 untuk
  `form_factor: "wide"` — `sizes` di manifest sudah disesuaikan agar
  cocok. Ini dipakai Chrome/Android (termasuk Chrome di iOS) untuk
  pratinjau "richer install UI"; Safari asli di iPhone tidak memakai
  field ini sama sekali untuk Add to Home Screen, jadi perbaikan ini
  murni soal konsistensi & Android.

**Panduan install iOS (baru: deteksi browser)**
- Modal "Cara Install di iPhone" sudah ada sejak awal (tombol Share →
  Add to Home Screen → Add), dipicu otomatis untuk iPhone/iPad lewat
  `isIOSDevice()` di `js/app.js` saat `beforeinstallprompt` tidak
  tersedia (memang tidak pernah ada di Safari/iOS).
- Ditambahkan pengecekan baru: `detectNonSafariIOSBrowser()` membaca
  penanda user-agent khas Chrome (`CriOS`), Firefox (`FxiOS`), Edge
  (`EdgiOS`), Opera (`OPiOS`), DuckDuckGo, Google App, serta in-app
  browser Facebook/Instagram/LINE. Kalau salah satu terdeteksi, modal
  menampilkan catatan kuning di atas langkah-langkah: nama browser
  yang terdeteksi + arahan untuk membuka halaman ini di **Safari**
  dulu (karena "Add to Home Screen" cuma ada di menu Share Safari).
  Kalau tidak terdeteksi (dianggap Safari), catatan ini tetap
  tersembunyi seperti sebelumnya.
- Sudah diuji lewat emulasi user-agent Safari, Chrome-iOS, dan
  in-app browser Instagram — ketiganya berperilaku benar.

## Struktur file

```
jadwal-sekolah-pwa/
├─ index.html
├─ manifest.json
├─ sw.js                  ← service worker (cache offline)
├─ assets/logo.svg        ← logo sementara (lihat catatan di atas)
├─ css/
│  ├─ style.css           ← semua desain, token warna, layout
│  └─ animations.css      ← animasi yang disengaja & secukupnya
├─ js/
│  ├─ data.js             ← data jurusan, jadwal & fun facts
│  └─ app.js              ← seluruh logika aplikasi + ikon seragam
└─ icons/                 ← ikon PWA hasil generate dari logo.svg
```

## Warisan dari versi SMP Negeri 2 Bitung

Fondasi desain & fitur di bawah ini dibangun pada revisi sebelumnya dan
tetap dipertahankan pada versi SMK ini:

- Seluruh tampilan berbasis kartu (`card`), font sistem bawaan (tanpa
  request jaringan), animasi "effortless" yang menghormati *Reduce
  Motion*.
- Breadcrumb yang bisa diklik, kartu "Lanjutkan" yang mengingat
  rombel & hari terakhir dibuka, tanggal asli per minggu berjalan pada
  pemilih hari, serta penanda **"Sekarang"** otomatis pada jam
  pelajaran yang sedang berlangsung.
- Tombol kembali perangkat / gesture-back iOS berfungsi via History
  API, bukan langsung keluar halaman.
- PWA lengkap: `manifest.json` + ikon maskable, `sw.js` untuk mode
  offline penuh, tombol "Install Aplikasi" dengan jalur khusus
  Android/Chrome, iOS (tutorial), dan browser lain (panduan umum).
- Tema terang/gelap otomatis mengikuti sistem, tersimpan begitu diubah
  manual, tanpa kedipan warna saat halaman dimuat.

## Catatan

- Warna per mata pelajaran memakai palet kalem/profesional yang sama
  dengan versi sebelumnya, ditambah beberapa warna baru untuk mapel
  khas SMK (Sejarah, Seni Budaya, Informatika, Kewirausahaan), dan
  warna aksen sekolah untuk seluruh mapel produktif/konsentrasi jurusan
  agar mudah dikenali di jadwal.
- **Fun Facts (halaman "Fun Facts Sekolah"):** tiap kartu kini punya
  ilustrasi dua-warna orisinal sendiri (bukan satu ikon garis yang
  diulang), dengan warna aksen berbeda per kartu memakai token warna
  yang sudah ada (`--subj-*`, `--gold`, `--accent`) supaya otomatis
  pas di tema terang/gelap. Baris berisi angka ringkas (mis. jumlah
  guru per jurusan) ditampilkan sebagai kotak angka besar yang
  "menghitung naik" saat digulir ke dalam layar; baris berisi kalimat,
  nama, atau daftar panjang ditampilkan mengalir sebagai satu baris
  teks (label ditebalkan sebagai awalan), bukan dipaksa dua kolom
  sejajar seperti sebelumnya — perubahan ini yang memperbaiki tampilan
  yang tadinya terasa bertumpuk/berdempetan saat labelnya panjang.
  Logika ada di `classifyFactRow()`, `FACT_ILLUSTRATIONS`, dan
  `renderFunFacts()` di `js/app.js`. Karena `css/style.css`,
  `css/animations.css`, dan `js/app.js` berubah, `CACHE_VERSION` di
  `sw.js` sudah dinaikkan — kalau mengedit file-file itu lagi, naikkan
  lagi versinya (lihat komentar di `sw.js`).
