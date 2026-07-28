/**
 * time.js — SATU-SATUNYA tempat mengatur jam masuk & durasi tiap kegiatan.
 *
 * Jadwal di js/data/schedule.js TIDAK menyimpan jam mulai/selesai sama
 * sekali — hanya urutan KODE mapel per hari (mis. ["UPACARA", "PJOK", ...]).
 * Jam yang tampil di layar dihitung otomatis dari JAM_MASUK ditambah durasi
 * tiap kode, dijumlahkan berurutan dari pagi ke sore oleh hitungJadwalHari()
 * di bawah.
 *
 * KENAPA DIPISAH DARI schedule.js:
 * Supaya kalau ada SATU angka durasi yang salah (mis. istirahat harusnya
 * 40 menit, bukan 30), cukup diubah SEKALI di sini — otomatis berlaku ke
 * SEMUA rombel & SEMUA hari yang punya slot itu. Tidak perlu buka & hitung
 * ulang ratusan baris jadwal satu per satu.
 *
 * CONTOH PERSIS SESUAI PERMINTAAN:
 * - "1 jam pelajaran biasa hari Senin ternyata 43 menit, bukan 45"
 *     -> semua mapel biasa (bukan cuma Senin) memakai DURASI_MAPEL_DEFAULT
 *        yang sama. Ubah baris DURASI_MAPEL_DEFAULT jadi 43.
 *     -> Kalau ternyata CUMA hari Senin yang beda, lihat catatan
 *        "DURASI KHUSUS PER HARI" di paling bawah file ini.
 * - "Istirahat ternyata 40 menit, bukan 30"
 *     -> ubah DURASI_KHUSUS.ISTIRAHAT jadi 40
 * - "Upacara ternyata 50 menit, bukan 45"
 *     -> ubah DURASI_KHUSUS.UPACARA jadi 50
 * - "Hari Rabu ternyata masuk jam 07.15, bukan 07.00"
 *     -> ubah baris JAM_MASUK.RABU jadi "07.15"
 */

// Jam masuk pelajaran pertama (jam ke-1) TIAP HARI, format "HH.MM".
// Diatur per hari (SENIN..JUMAT) supaya kalau ada hari yang jam masuknya
// beda sendiri (mis. Senin lebih pagi karena upacara), cukup ubah baris
// hari itu saja — hari lain tidak ikut berubah.
//
// Update Semester Ganjil 2026/2027 (Pembagian Jam Mengajar, dikonfirmasi
// user): SENIN, KAMIS, dan JUMAT masing-masing dibuka dengan kegiatan 60
// menit pukul 06.30-07.30 (Upacara Bendera / Ibadah Pagi / Senam-Kerja
// Bakti — lihat DURASI_KHUSUS & schedule.js), jadi jam ke-1 di ketiga hari
// itu baru mulai 07.30. SELASA dan RABU TIDAK punya kegiatan pembuka,
// langsung jam ke-1 pukul 07.15.
// (Catatan riwayat: dokumen PEMBAGIAN JAM MENGAJAR & sheet JAMPEL yang
// dikirim sempat saling bertentangan soal hari mana yang punya kegiatan
// pembuka. Pengelompokan di atas — Ibadah Pagi di KAMIS, bukan Selasa —
// sudah dikonfirmasi langsung oleh pihak sekolah.)
const JAM_MASUK = {
    SENIN: "06.30",
    SELASA: "07.15",
    RABU: "07.15",
    KAMIS: "06.30",
    JUMAT: "06.30",
};

// Dipakai kalau suatu hari kebetulan belum/tidak terdaftar di atas.
const JAM_MASUK_DEFAULT = "07.15";

// Jam SEMUA SISWA sudah wajib berada di sekolah (jam datang/absen),
// SEBELUM jam pelajaran pertama dimulai. Sama untuk semua hari Senin—
// Jumat, dan SELALU tampil sebagai baris paling pertama di jadwal —
// lihat hitungJadwalHari() di bawah. Kode kegiatannya diatur di
// KODE_SISWA_TIBA, namanya diatur di js/data/subjects.js.
// Catatan: dokumen Semester Ganjil 2026/2027 tidak menyebutkan jam
// kedatangan siswa secara eksplisit, jadi angka ini dipertahankan dari
// versi sebelumnya (sama dengan jam mulai kegiatan pembuka pagi).
const JAM_SISWA_TIBA = "06.30";
const KODE_SISWA_TIBA = "SISWA_TIBA";

// Durasi standar (dalam MENIT) untuk SATU jam pelajaran mata pelajaran
// biasa (Matematika, Bahasa Indonesia, mapel produktif jurusan, dst).
// Ini yang dipakai kalau kode mapelnya TIDAK terdaftar di DURASI_KHUSUS.
// Semester Ganjil 2026/2027: 1 jam pelajaran = 40 menit (sebelumnya 45).
const DURASI_MAPEL_DEFAULT = 40;

// Durasi (dalam MENIT) untuk kode "bukan mapel biasa" yang punya durasi
// sendiri: istirahat, upacara, ibadah, senam/kerja bakti. Kode yang TIDAK
// dicantumkan di sini otomatis memakai DURASI_MAPEL_DEFAULT di atas.
// Semester Ganjil 2026/2027: ISTIRAHAT jadi 60 menit (dari 30), dan
// UPACARA/IBADAH_PAGI/OLAHRAGA_KERJA_BAKTI ketiganya jadi 60 menit karena
// sama-sama mengisi slot pembuka pukul 06.30-07.30 (dari 45/20/45).
// IBADAH_JUMAT (penutup hari Jumat setelah jam ke-8) tidak disebutkan di
// dokumen baru, jadi durasinya dipertahankan dari versi sebelumnya (30
// menit) — cek ulang kalau ada jadwal ibadah Jumat yang resmi.
const DURASI_KHUSUS = {
    ISTIRAHAT: 60,
    UPACARA: 60,
    IBADAH_PAGI: 60,
    IBADAH_JUMAT: 30,
    OLAHRAGA_KERJA_BAKTI: 60,
};

/** Ambil jam masuk pelajaran pertama untuk hari tertentu (mis. "SENIN"). */
function getJamMasuk(hari) {
    return JAM_MASUK[hari] || JAM_MASUK_DEFAULT;
}

/** Ambil durasi (menit) untuk satu kode mapel/kegiatan. */
function getDurasiMenit(kodeMapel) {
    return Object.prototype.hasOwnProperty.call(DURASI_KHUSUS, kodeMapel)
        ? DURASI_KHUSUS[kodeMapel]
        : DURASI_MAPEL_DEFAULT;
}

/**
 * Mengubah daftar KODE mapel berurutan (satu hari, dari schedule.js) jadi
 * daftar slot lengkap dengan jam mulai & selesai.
 *
 * Baris PALING PERTAMA selalu ditambahkan otomatis (TIDAK perlu & TIDAK
 * boleh ditulis manual di schedule.js): jam JAM_SISWA_TIBA ("Semua Siswa
 * Sudah Berada Di Sekolah") — supaya berlaku sama untuk SEMUA hari &
 * SEMUA rombel tanpa mengubah schedule.js sama sekali.
 *
 * Contoh (JAM_MASUK.SENIN = "06.30"):
 *   hitungJadwalHari(["UPACARA", "PJOK"], "SENIN")
 *   -> [ { time: "06.30", subject: "SISWA_TIBA" },
 *        { time: "06.30 - 07.30", subject: "UPACARA" },
 *        { time: "07.30 - 08.10", subject: "PJOK" } ]
 */
function hitungJadwalHari(daftarKodeMapel, hari) {
    const toMenit = (jamStr) => {
        const [h, m] = jamStr.split('.').map(Number);
        return h * 60 + m;
    };
    const toJamStr = (menit) => {
        const h = Math.floor(menit / 60);
        const m = menit % 60;
        return `${String(h).padStart(2, '0')}.${String(m).padStart(2, '0')}`;
    };

    const hasil = [{ time: JAM_SISWA_TIBA, subject: KODE_SISWA_TIBA }];

    let waktuBerjalan = toMenit(getJamMasuk(hari));
    (daftarKodeMapel || []).forEach((kode) => {
        const durasi = getDurasiMenit(kode);
        const mulai = waktuBerjalan;
        const selesai = waktuBerjalan + durasi;
        waktuBerjalan = selesai;
        hasil.push({ time: `${toJamStr(mulai)} - ${toJamStr(selesai)}`, subject: kode });
    });
    return hasil;
}

/**
 * DURASI KHUSUS PER HARI (belum dipakai, contoh saja):
 * JAM_MASUK per hari sudah diatur di atas (tinggal ubah baris harinya).
 * Kalau ternyata durasi 1 JP juga beda di hari tertentu (bukan cuma jam
 * masuknya), pola yang sama bisa dipakai untuk DURASI_MAPEL_DEFAULT —
 * ubah jadi object per hari, lalu sesuaikan getDurasiMenit() supaya
 * membaca object itu berdasarkan parameter "hari" (perlu diteruskan dari
 * hitungJadwalHari()).
 */
