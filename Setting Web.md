# Setting Web — Panduan Mengatur Data Jadwal Pelajaran SMK Negeri 1 Bitung

Dokumen ini menjelaskan **di file mana** tiap jenis data website ini diatur,
**apa fungsinya**, dan **bagaimana cara mengeditnya**, disusun berurutan
dari yang paling mendasar sampai yang paling "kosmetik".

Prinsip semua file data (folder `js/data/`) di proyek ini sama: **satu
jenis data hanya diatur di SATU file**. Jadi kalau mau mengubah sesuatu,
cari dulu file yang tepat di bawah ini — jangan cari-ganti manual di
banyak file sekaligus.

## Daftar isi & urutan ketergantungan

| # | File | Isinya | Diedit kalau... |
|---|------|--------|------------------|
| 1 | `js/data/majors.js` | Daftar kelas, jurusan, & rombel | Ada jurusan/rombel baru, atau kelas naik tingkat |
| 2 | `js/data/subjects.js` | Nama lengkap & warna tiap mata pelajaran | Nama mapel salah/kepanjangan, atau mapel baru |
| 3 | `js/data/schedule.js` | Urutan mapel tiap hari, tiap rombel | Jadwal berubah (tukar jam, ganti guru/mapel) |
| 4 | `js/data/time.js` | Jam masuk, durasi tiap jenis kegiatan | Jam bel/durasi salah |
| 5 | `js/uniform.js` | Seragam harian (Senin–Jumat) | Aturan seragam berubah |
| 6 | `js/data/funfacts.js` | Kartu statistik di halaman "Fun Facts" | Update data guru/statistik tiap semester |
| 7 | `index.html` & `manifest.json` | Nama sekolah, deskripsi, judul tab | Ganti identitas sekolah (jarang) |

Urutan di atas bukan kebetulan: `majors.js` menentukan kode jurusan yang
dipakai `schedule.js`; `schedule.js` memakai kode mapel yang artinya
diambil dari `subjects.js`; lalu `time.js` menghitung jam tayangnya. Kalau
menambah jurusan/mapel baru, urutan pengeditan yang aman **mengikuti
urutan tabel di atas** (1 → 2 → 3 → 4).

---

## 1. `js/data/majors.js` — Kelas, Jurusan, & Rombel

**Fungsi:** menentukan jurusan (konsentrasi keahlian) apa saja yang
tersedia di tiap tingkat kelas (10/11/12), dan berapa rombel (kelas
paralel) tiap jurusan itu punya. Ini yang menentukan tombol-tombol yang
muncul di layar "Pilih Jurusan" & "Pilih Rombel".

**Struktur data** (per tingkat kelas, berisi array jurusan):

```js
"10": [
  {
    "key": "akl",              // kode internal, JANGAN diubah sembarangan
    "name": "Akuntansi dan Keuangan Lembaga",  // nama lengkap di layar
    "short": "AKL",             // singkatan (judul jadwal, breadcrumb)
    "rombels": ["1", "2", "3"]  // daftar nomor rombel di jurusan ini
  },
  ...
]
```

**Cara mengedit:**
- **Ganti nama jurusan** → ubah `"name"` (dan `"short"` kalau perlu). Aman,
  tidak memengaruhi file lain.
- **Tambah/kurangi rombel** (mis. AKL 10 sekarang jadi 4 kelas) → tambah/
  hapus angka di array `"rombels"`.
- **Tambah jurusan baru** → tambah object baru di array tingkat kelasnya,
  lalu **wajib** tambahkan juga jadwalnya di `schedule.js` dengan `"key"`
  yang **sama persis**. Kalau cuma diedit di sini saja, jurusan itu akan
  tampil tapi jadwalnya kosong.
- Jurusan dengan **hanya 1 rombel** (mis. ULW, Perhotelan, Kuliner)
  otomatis melewati langkah "Pilih Rombel" di aplikasi — tidak perlu
  pengaturan tambahan untuk itu.

---

## 2. `js/data/subjects.js` — Nama & Warna Mata Pelajaran

**Fungsi:** kamus terjemahan dari **kode singkat** (yang dipakai di
`schedule.js`, mis. `"DASAR_AKL"`) menjadi **nama lengkap** yang tampil
di layar (mis. "Dasar-Dasar Akuntansi dan Keuangan Lembaga") beserta
warna kartunya.

**Struktur data:**

```js
const SUBJECTS = {
  MATEMATIKA: { name: "Matematika", color: "--subj-matematika" },
  DASAR_AKL: { name: "Dasar-Dasar Akuntansi dan Keuangan Lembaga", color: "--subj-produktif" },
  ...
};
```

**Cara mengedit:**
- **Nama mapel salah/kepanjangan** → cari kodenya, ubah `"name"`-nya saja.
  Otomatis berlaku ke **semua** rombel & hari yang memakai kode itu —
  tidak perlu cari-ganti manual di `schedule.js`.
- **Ganti warna kartu mapel** → ubah `"color"` ke salah satu variabel
  `--subj-*` yang ada di `css/style.css` (cari bagian yang berkomentar
  warna, contoh: `--subj-matematika`, `--subj-ipa`, `--subj-produktif`,
  dst). Boleh berbagi satu warna untuk beberapa mapel serumpun.
- **Tambah mapel/kegiatan baru** → tambah baris baru dengan kode BARU
  (huruf besar, unik, tanpa spasi — pakai underscore `_`), lalu pakai
  kode itu di `schedule.js`. Kalau lupa didaftarkan di sini, kode itu
  akan tampil apa adanya (belum diterjemahkan) di layar jadwal — ini
  sengaja dibuat begitu supaya kesalahan ketik kode langsung ketahuan.
- Kode-kode kegiatan non-mapel (`ISTIRAHAT`, `UPACARA`, `IBADAH_PAGI`,
  `IBADAH_JUMAT`, `OLAHRAGA_KERJA_BAKTI`, `SISWA_TIBA`) juga diatur di
  sini untuk nama & warnanya — tapi **jamnya** diatur di `time.js` (lihat
  bagian 4).

---

## 3. `js/data/schedule.js` — Susunan Jadwal per Hari, per Rombel

**Fungsi:** menyimpan urutan KODE mapel dari jam pertama sampai terakhir,
untuk setiap kombinasi Kelas → Jurusan → Rombel → Hari. Ini file yang
paling sering dibuka setiap semester (pergantian jadwal mengajar).

**PENTING:** file ini **tidak menyimpan jam sama sekali** — hanya urutan
kode. Jam yang tampil di layar dihitung otomatis oleh `time.js` (bagian
4). Jangan menulis jam manual di sini.

**Struktur data:**

```js
const scheduleData = {
  "10": {                    // tingkat kelas
    "akl": {                 // kode jurusan (harus sama dgn "key" di majors.js)
      "1": {                 // nomor rombel
        "SENIN": ["UPACARA", "PJOK", "PJOK", ..., "ISTIRAHAT", ...],
        "SELASA": [...],
        "RABU": [...],
        "KAMIS": [...],
        "JUMAT": [...]
      },
      "2": { ... }
    },
    "mplb": { ... }
  },
  "11": { ... },
  "12": { ... }
};
```

**Cara mengedit:**
1. Cari tingkat kelas (`"10"`/`"11"`/`"12"`) → kode jurusan → nomor
   rombel → nama hari (huruf besar: `SENIN`..`JUMAT`).
2. Setiap hari adalah **daftar kode berurutan** dari jam pertama ke
   terakhir (satu kode = satu jam pelajaran, KECUALI kode non-mapel yang
   durasinya beda seperti `ISTIRAHAT`/`UPACARA`).
3. Ganti/tambah/hapus kode dalam daftar itu sesuai kebutuhan. Jam
   otomatis terhitung ulang mengikuti urutan barunya — **tidak perlu
   dihitung manual**.
4. Kode yang dipakai **harus sudah terdaftar** di `subjects.js` (bagian
   2). Kalau mapelnya benar-benar baru, daftarkan dulu di `subjects.js`.
5. Baris "Semua Siswa Sudah Berada Di Sekolah" (jam 06.30) **tidak perlu
   ditulis di sini** — itu ditambahkan otomatis oleh `time.js` di depan
   jadwal setiap hari, untuk semua rombel sekaligus.

**Tips:** kalau butuh menambah jurusan/rombel baru, pastikan sudah
didaftarkan lebih dulu di `majors.js` (bagian 1) dengan `"key"` yang
sama persis dengan yang dipakai sebagai nama objek jurusan di sini.

---

## 4. `js/data/time.js` — Jam Masuk & Durasi Tiap Kegiatan

**Fungsi:** **satu-satunya** tempat mengatur jam masuk sekolah dan durasi
tiap jenis kegiatan (1 jam pelajaran biasa, istirahat, upacara, ibadah,
dll). `schedule.js` hanya menyimpan urutan kode; file inilah yang
menghitung jam mulai/selesainya dan menyusunnya menjadi teks seperti
`"07.00 - 07.45"`.

**Bagian-bagian penting:**

```js
// Jam masuk pelajaran pertama, per hari:
const JAM_MASUK = {
    SENIN: "06.30",
    SELASA: "07.00",
    RABU: "07.00",
    KAMIS: "07.00",
    JUMAT: "07.00",
};

// Jam "Semua Siswa Sudah Berada Di Sekolah" — sama tiap hari, selalu
// jadi baris paling pertama di jadwal (ditambah otomatis, semua rombel):
const JAM_SISWA_TIBA = "06.30";

// Durasi standar 1 jam pelajaran biasa (menit):
const DURASI_MAPEL_DEFAULT = 45;

// Durasi kegiatan non-mapel yang beda dari durasi standar (menit):
const DURASI_KHUSUS = {
    ISTIRAHAT: 30,
    UPACARA: 45,
    IBADAH_PAGI: 20,
    IBADAH_JUMAT: 30,
    OLAHRAGA_KERJA_BAKTI: 45,
};
```

**Cara mengedit (contoh nyata):**
- *"Senin ternyata masuk jam 06.45, bukan 06.30"* → ubah
  `JAM_MASUK.SENIN` jadi `"06.45"`.
- *"Jam kedatangan siswa berubah jadi 06.15"* → ubah `JAM_SISWA_TIBA`
  jadi `"06.15"`. Otomatis berlaku ke semua hari & semua rombel.
- *"1 jam pelajaran biasa ternyata 43 menit, bukan 45"* → ubah
  `DURASI_MAPEL_DEFAULT` jadi `43`. Berlaku ke semua mapel biasa di semua
  hari/rombel sekaligus.
- *"Istirahat ternyata 40 menit, bukan 30"* → ubah
  `DURASI_KHUSUS.ISTIRAHAT` jadi `40`.
- *"Ada kegiatan baru dengan durasi khusus"* → tambah baris baru di
  `DURASI_KHUSUS` dengan kode yang sama seperti yang dipakai di
  `schedule.js` (dan sudah didaftarkan namanya di `subjects.js`).

Format jam selalu `"HH.MM"` (pakai titik, bukan titik dua), dua digit,
mis. `"07.00"`, bukan `"7.0"`.

---

## 5. `js/uniform.js` — Seragam Harian

**Fungsi:** menentukan ikon seragam apa yang tampil untuk tiap hari
(Senin–Jumat) di layar "Pilih Hari" & judul layar Jadwal.

**Bagian yang paling sering diedit — `UNIFORM_CONFIG`:**

```js
const UNIFORM_CONFIG = {
  SENIN: { looks: [{ shirt: 'putih', shirtClass: 'uniform-shirt-putih', pantsType: 'panjang', pantsClass: 'uniform-pants-abu' }] },
  ...
  JUMAT: {
    looks: [
      { shirt: 'pramuka', ... , fadeClass: 'uniform-look-a' },
      { shirt: 'olahraga', ..., fadeClass: 'uniform-look-b' },
    ],
  },
};
```

**Cara mengedit:**
- **Ganti model baju/celana suatu hari** → ubah `shirt` (pilihan:
  `'putih'`, `'pastel'`, `'batik'`, `'pramuka'`, `'olahraga'`) dan/atau
  `pantsType` (`'panjang'` atau `'pendek'`) pada hari itu.
- **Ganti warna baju/celana** → ubah `shirtClass`/`pantsClass` ke kelas
  CSS yang tersedia (cari daftarnya di `css/style.css`, bagian
  `.uniform-shirt-*` dan `.uniform-pants-*`).
- **Satu hari punya 2 seragam bergantian** (seperti Jumat: Pramuka ↔
  Olahraga) → isi array `looks` dengan lebih dari satu object, masing-
  masing diberi `fadeClass` berbeda. Untuk hari dengan **1 seragam saja**,
  array `looks` cukup berisi satu object dan `fadeClass` boleh dihapus.
- Tidak perlu menyentuh bagian atas file ini (data SVG siluet baju) kecuali
  memang ingin mengganti bentuk ilustrasinya — itu di luar kebutuhan
  pengaturan data rutin.

---

## 6. `js/data/funfacts.js` — Kartu "Fun Facts Sekolah"

**Fungsi:** seluruh isi halaman "Fun Facts" (statistik guru, struktur
kepemimpinan, dll). Terpisah dari data jadwal supaya bisa diedit tanpa
menyentuh file lain.

**Struktur satu kartu:**

```js
{
  id: 'sekolah-dalam-angka',        // penanda unik (bebas)
  title: 'SMK Negeri 1 Bitung dalam Angka',  // judul kartu
  icon: 'chart',                     // kunci ilustrasi (lihat FACT_ICONS)
  accent: '--accent',                // warna aksen (boleh --subj-*, --gold, --accent)
  items: [
    'Total 68 guru & tenaga kependidikan (data ... Semester Ganjil 2026/2027)',
    '60 di antaranya adalah guru, 8 adalah tenaga kependidikan',
    ...
  ],
}
```

**Cara mengedit:**
- **Update angka tiap semester** (paling sering) → cari komentar
  `// Fakta jumlah guru:` di dalam file, lalu edit langsung teks pada
  `items` yang bersangkutan.
- **Tambah kartu baru** → tambah object baru di array `funFactsData`
  (boleh diletakkan di mana saja dalam array — urutan array = urutan
  tampil). Pilih `icon` yang sudah tersedia di `FACT_ICONS`, atau buat
  ilustrasi SVG baru dengan kunci baru di situ juga.
- **Format baris `items`** yang ditulis `"Label: nilai"`, `"Label = nilai"`,
  atau `"Label — nilai"` otomatis dirapikan jadi dua kolom oleh aplikasi;
  baris berupa angka pendek otomatis jadi kotak angka besar yang
  "menghitung naik" saat halaman dibuka.

---

## 7. Identitas Sekolah (jarang diubah)

Nama sekolah, judul tab browser, dan deskripsi PWA **tidak** diatur lewat
`js/data/`, melainkan tertulis langsung di:
- `index.html` — tag `<title>`, meta `description`, teks `.school-name`.
- `manifest.json` — field `"name"` dan `"description"` (dipakai saat
  aplikasi di-install sebagai PWA).

Ini jarang perlu diubah kecuali identitas sekolah berubah total (mis.
proyek diadaptasi ulang untuk sekolah lain).

---

## Ringkasan alur kerja tiap semester

Urutan paling praktis kalau ada pembagian tugas mengajar baru:

1. **`majors.js`** — pastikan daftar jurusan & jumlah rombel masih sesuai.
2. **`subjects.js`** — daftarkan dulu kode & nama mapel baru (kalau ada).
3. **`schedule.js`** — susun ulang urutan kode mapel tiap hari, tiap
   rombel, sesuai jadwal baru.
4. **`time.js`** — cek lagi apakah jam masuk/durasi masih sesuai jam bel
   sekolah yang berlaku.
5. **`uniform.js`** — cek apakah aturan seragam masih sama.
6. **`funfacts.js`** — update angka jumlah guru & statistik lain.

Setelah semua diedit, tidak perlu proses build apa pun — cukup simpan
file, lalu buka/refresh websitenya (lihat `README.md` untuk cara
menjalankan secara lokal).
