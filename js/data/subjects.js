/**
 * subjects.js — Nama & warna setiap mata pelajaran, dalam SATU tempat.
 *
 * KENAPA FILE INI ADA:
 * Jadwal (js/data/schedule.js) TIDAK menyimpan nama mata pelajaran secara
 * lengkap berulang-ulang. Setiap slot jadwal cuma menyimpan KODE singkat
 * (mis. "MATEMATIKA", "DASAR_AKL"), lalu kode itu dicocokkan ke sini untuk
 * diambil nama lengkap & warnanya lewat getSubjectName() / getSubjectColorVar().
 *
 * CARA MEMPERBAIKI NAMA MATA PELAJARAN YANG SALAH/KEPANJANGAN:
 * 1. Cari kodenya di bawah (kunci di kiri, mis. DASAR_TJKT).
 * 2. Ubah teks "name" di sebelah kanannya.
 * 3. Selesai — SEMUA rombel & hari di jadwal yang memakai kode itu otomatis
 *    ikut berubah. Tidak perlu cari-ganti manual di ratusan baris jadwal.
 *
 * "color" merujuk ke variabel warna di css/style.css (bagian "--subj-*").
 * Boleh dipakai bersama oleh beberapa mata pelajaran yang serumpun.
 */

const SUBJECTS = {
    // ---- MATA PELAJARAN UMUM (semua jurusan) ----
    MATEMATIKA: { name: "Matematika", color: "--subj-matematika" },
    B_INDONESIA: { name: "Bahasa Indonesia", color: "--subj-bindo" },
    B_INGGRIS: { name: "Bahasa Inggris", color: "--subj-binggris" },
    B_JEPANG: { name: "Bahasa Jepang", color: "--subj-mulok" },
    AGAMA: { name: "Pendidikan Agama dan Budi Pekerti", color: "--subj-agama" },
    PJOK: { name: "Pendidikan Jasmani, Olahraga, dan Kesehatan", color: "--subj-pjok" },
    SEJARAH: { name: "Sejarah", color: "--subj-sejarah" },
    SENI_BUDAYA: { name: "Seni Budaya", color: "--subj-senibudaya" },
    INFORMATIKA: { name: "Informatika", color: "--subj-informatika" },
    PKWU: { name: "Produk Kreatif dan Kewirausahaan", color: "--subj-wirausaha" },
    KIK: { name: "Kreativitas, Inovasi, dan Kewirausahaan", color: "--subj-wirausaha" },
    P5: { name: "Projek Penguatan Profil Pelajar Pancasila", color: "--subj-lainnya" },
    PANCASILA: { name: "Pendidikan Pancasila", color: "--subj-pkn" },
    IPAS: { name: "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)", color: "--subj-ipa" },
    MAPEL_PILIHAN: { name: "Mata Pelajaran Pilihan", color: "--subj-mulok" },
    KODING_KA: { name: "Pembelajaran Koding dan Kecerdasan Artifisial", color: "--subj-tik" },

    // ---- JAM NON-MAPEL (upacara, ibadah, istirahat, dll.) ----
    // SISWA_TIBA ditambahkan otomatis sebagai baris paling pertama tiap
    // hari oleh hitungJadwalHari() di js/data/time.js — jam & kodenya
    // diatur di sana (JAM_SISWA_TIBA / KODE_SISWA_TIBA), bukan di sini.
    SISWA_TIBA: { name: "Semua Siswa Sudah Berada Di Sekolah", color: "--subj-lainnya" },
    ISTIRAHAT: { name: "Istirahat", color: "--subj-istirahat" },
    UPACARA: { name: "Upacara Bendera", color: "--subj-lainnya" },
    IBADAH_PAGI: { name: "Ibadah Pagi", color: "--subj-lainnya" },
    IBADAH_JUMAT: { name: "Ibadah Jumat", color: "--subj-lainnya" },
    OLAHRAGA_KERJA_BAKTI: { name: "Senam / Kerja Bakti", color: "--subj-pjok" },
    KOSONG: { name: "Kosong", color: "--subj-produktif" },

    // ---- KONSENTRASI AKL — Akuntansi dan Keuangan Lembaga ----
    DASAR_AKL: { name: "Dasar-Dasar Akuntansi dan Keuangan Lembaga", color: "--subj-produktif" },
    KOMPUTER_AKUNTANSI: { name: "Komputer Akuntansi", color: "--subj-produktif" },
    AKUNTANSI_JDM: { name: "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur", color: "--subj-produktif" },
    AKUNTANSI_KEUANGAN: { name: "Akuntansi Keuangan", color: "--subj-produktif" },
    PERPAJAKAN: { name: "Perpajakan", color: "--subj-produktif" },
    PRAKTIKUM_AKUNTANSI_INSTANSI: { name: "Praktikum Akuntansi Lembaga/Instansi Pemerintah", color: "--subj-produktif" },

    // ---- KONSENTRASI MPLB — Manajemen Perkantoran dan Layanan Bisnis ----
    DASAR_MPLB: { name: "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis", color: "--subj-produktif" },
    ADM_KEPEGAWAIAN: { name: "Pengelolaan Administrasi Kepegawaian", color: "--subj-produktif" },
    ADM_UMUM: { name: "Pengelolaan Administrasi Umum", color: "--subj-produktif" },
    KEARSIPAN: { name: "Pengelolaan Kearsipan", color: "--subj-produktif" },
    TEK_PERKANTORAN: { name: "Teknologi Perkantoran", color: "--subj-produktif" },
    HUMAS_PROTOKOL: { name: "Pengelolaan Humas dan Keprotokolan", color: "--subj-produktif" },
    KOMUNIKASI_KERJA: { name: "Komunikasi di Tempat Kerja", color: "--subj-produktif" },
    ADM_RAPAT: { name: "Pengelolaan Kegiatan Pertemuan/Rapat", color: "--subj-produktif" },
    SARANA_PRASARANA: { name: "Pengelolaan Sarana dan Prasarana", color: "--subj-produktif" },
    PKP_KOLEGA: { name: "Pelayanan Kepada Kolega dan Pelanggan", color: "--subj-produktif" },
    PSDM: { name: "Pengelolaan Sumber Daya Manusia", color: "--subj-produktif" },

    // ---- KONSENTRASI BISNIS RITEL (nama bidang di kelas X: "Pemasaran") ----
    DASAR_BR: { name: "Dasar-Dasar Bisnis Ritel", color: "--subj-produktif" },
    DASAR_PEMASARAN: { name: "Dasar-Dasar Pemasaran", color: "--subj-produktif" },
    PRODUK_PROMOSI: { name: "Produk, Promosi, dan Penjualan", color: "--subj-produktif" },
    MARKETING_VISUAL: { name: "Strategi Marketing dan Visual Merchandising", color: "--subj-produktif" },
    BISNIS_RITEL_TRANSAKSI: { name: "Pengelolaan Bisnis Ritel dan Administrasi Transaksi", color: "--subj-produktif" },
    MARKETING_KOMUNIKASI: { name: "Marketing dan Komunikasi Bisnis", color: "--subj-produktif" },
    CUSTOMER_SERVICE: { name: "Pelayanan Pelanggan (Customer Service)", color: "--subj-produktif" },
    PENGEMASAN_DISTRIBUSI: { name: "Pengemasan dan Pendistribusian Produk", color: "--subj-produktif" },

    // ---- KONSENTRASI TJKT — Teknik Jaringan Komputer dan Telekomunikasi ----
    DASAR_TJKT: { name: "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi", color: "--subj-produktif" },
    TEK_JARINGAN_KABEL: { name: "Teknologi Jaringan Kabel dan Nirkabel", color: "--subj-produktif" },
    PERENCANAAN_JARINGAN: { name: "Perencanaan dan Pengalamatan Jaringan", color: "--subj-produktif" },
    KEAMANAN_JARINGAN: { name: "Keamanan Jaringan", color: "--subj-produktif" },
    KONFIGURASI_JARINGAN: { name: "Pemasangan dan Konfigurasi Perangkat Jaringan", color: "--subj-produktif" },
    ADM_SISTEM_JARINGAN: { name: "Administrasi Sistem Jaringan", color: "--subj-produktif" },
    IOT: { name: "Internet of Things", color: "--subj-produktif" },

    // ---- KONSENTRASI ULW — Usaha Layanan Wisata ----
    DASAR_ULW: { name: "Dasar-Dasar Usaha Layanan Pariwisata", color: "--subj-produktif" },
    PEMANDUAN_WISATA: { name: "Pemanduan Wisata dan Memimpin Rombongan Wisata", color: "--subj-produktif" },
    WISATA_REKREASI: { name: "Perencanaan dan Pengelolaan Perjalanan Wisata", color: "--subj-produktif" },
    TARIF_TRANSPORTASI: { name: "Pemesanan dan Perhitungan Tarif Transportasi (Udara, Darat, Laut)", color: "--subj-produktif" },
    MICE: { name: "Pengelolaan Meeting, Incentive, Conference, dan Exhibition (MICE)", color: "--subj-produktif" },
    PRODUKTIF_ULW: { name: "Produktif Usaha Layanan Wisata", color: "--subj-produktif" },
    EFT: { name: "English for Tourism", color: "--subj-produktif" },

    // ---- KONSENTRASI PERHOTELAN ----
    DASAR_PERHOTELAN: { name: "Dasar-Dasar Perhotelan", color: "--subj-produktif" },
    PRAKTIK_PERHOTELAN: { name: "Praktik Kompetensi Keahlian Perhotelan", color: "--subj-produktif" },

    // ---- KONSENTRASI KULINER ----
    DASAR_KULINER: { name: "Dasar-Dasar Kuliner", color: "--subj-produktif" },
    PRAKTIK_KULINER: { name: "Praktik Kompetensi Keahlian Kuliner", color: "--subj-produktif" },
};

/**
 * Mengambil nama lengkap mata pelajaran dari kodenya.
 * Kalau kodenya tidak ditemukan di atas, kode itu sendiri yang ditampilkan
 * (biar ketahuan ada salah ketik kode di schedule.js, bukan malah kosong).
 */
function getSubjectName(code) {
    const subject = SUBJECTS[code];
    return subject ? subject.name : code;
}

/**
 * Mengambil variabel warna (CSS custom property) untuk kode mata pelajaran.
 * Fallback ke "--subj-produktif" (warna aksen sekolah) kalau kodenya baru
 * dan belum diberi warna sendiri.
 */
function getSubjectColorVar(code) {
    const subject = SUBJECTS[code];
    return (subject && subject.color) ? subject.color : '--subj-produktif';
}
