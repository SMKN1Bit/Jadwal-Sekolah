/**
 * data.js — Data jurusan, jadwal pelajaran & fakta sekolah.
 * SMK Negeri 1 Bitung
 * Dipisah dari logika aplikasi (app.js) agar lebih rapi dan mudah dirawat.
 *
 * Sumber: Pembagian Tugas Mengajar Tahun 2026-2027 Semester Ganjil (Sementara)
 * Catatan: nama mata pelajaran konsentrasi/produktif direkonstruksi dari
 * singkatan pada dokumen sumber menggunakan referensi struktur Kurikulum
 * Merdeka SMK yang berlaku umum. Jam pelajaran (waktu) memakai estimasi
 * standar 1 JP = 45 menit karena dokumen sumber hanya mencantumkan nomor
 * jam ke berapa, bukan jam dinding.
 */

// Daftar jurusan (konsentrasi keahlian) per tingkat kelas
const majorsData = {
    "10": [
        {
            "key": "akl",
            "name": "Akuntansi dan Keuangan Lembaga",
            "short": "AKL",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "mplb",
            "name": "Manajemen Perkantoran dan Layanan Bisnis",
            "short": "MPLB",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "br",
            "name": "Bisnis Ritel",
            "short": "BR",
            "rombels": [
                "1",
                "2"
            ]
        },
        {
            "key": "tjkt",
            "name": "Teknik Jaringan Komputer dan Telekomunikasi",
            "short": "TJKT",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "ulw",
            "name": "Usaha Layanan Wisata",
            "short": "ULW",
            "rombels": [
                "1"
            ]
        },
        {
            "key": "perhotelan",
            "name": "Perhotelan",
            "short": "PHT",
            "rombels": [
                "1"
            ]
        },
        {
            "key": "kuliner",
            "name": "Kuliner",
            "short": "KLN",
            "rombels": [
                "1"
            ]
        }
    ],
    "11": [
        {
            "key": "akl",
            "name": "Akuntansi dan Keuangan Lembaga",
            "short": "AKL",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "mplb",
            "name": "Manajemen Perkantoran dan Layanan Bisnis",
            "short": "MPLB",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "br",
            "name": "Bisnis Ritel",
            "short": "BR",
            "rombels": [
                "1",
                "2"
            ]
        },
        {
            "key": "tjkt",
            "name": "Teknik Jaringan Komputer dan Telekomunikasi",
            "short": "TJKT",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "ulw",
            "name": "Usaha Layanan Wisata",
            "short": "ULW",
            "rombels": [
                "1"
            ]
        },
        {
            "key": "perhotelan",
            "name": "Perhotelan",
            "short": "PHT",
            "rombels": [
                "1"
            ]
        },
        {
            "key": "kuliner",
            "name": "Kuliner",
            "short": "KLN",
            "rombels": [
                "1"
            ]
        }
    ],
    "12": [
        {
            "key": "akl",
            "name": "Akuntansi dan Keuangan Lembaga",
            "short": "AKL",
            "rombels": [
                "1",
                "2"
            ]
        },
        {
            "key": "mplb",
            "name": "Manajemen Perkantoran dan Layanan Bisnis",
            "short": "MPLB",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "br",
            "name": "Bisnis Ritel",
            "short": "BR",
            "rombels": [
                "1",
                "2"
            ]
        },
        {
            "key": "tjkt",
            "name": "Teknik Jaringan Komputer dan Telekomunikasi",
            "short": "TJKT",
            "rombels": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "key": "ulw",
            "name": "Usaha Layanan Wisata",
            "short": "ULW",
            "rombels": [
                "1"
            ]
        },
        {
            "key": "perhotelan",
            "name": "Perhotelan",
            "short": "PHT",
            "rombels": [
                "1"
            ]
        },
        {
            "key": "kuliner",
            "name": "Kuliner",
            "short": "KLN",
            "rombels": [
                "1"
            ]
        }
    ]
};

// jadwal per tingkat kelas -> jurusan -> rombel -> hari
const scheduleData = {
    "10": {
        "akl": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Sejarah"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Informatika"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Informatika"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Sejarah"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Akuntansi dan Keuangan Lembaga"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "mplb": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Seni Budaya"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Sejarah"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Informatika"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Informatika"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Informatika"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Matematika"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Manajemen Perkantoran dan Layanan Bisnis"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "br": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Informatika"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Bisnis Ritel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "tjkt": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Matematika"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Sejarah"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Seni Budaya"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Informatika"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "ulw": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Usaha Layanan Pariwisata"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "perhotelan": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Informatika"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Dasar-Dasar Perhotelan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Perhotelan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Seni Budaya"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Informatika"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "kuliner": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Seni Budaya"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Informatika"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Informatika"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Dasar-Dasar Kuliner"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Informatika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Informatika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        }
    },
    "11": {
        "akl": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Perpajakan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Perpajakan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "mplb": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Teknologi Perkantoran"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Teknologi Perkantoran"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Komunikasi di Tempat Kerja"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Matematika"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pengelolaan Kearsipan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Kegiatan Pertemuan/Rapat"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Teknologi Perkantoran"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pengelolaan Kearsipan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Sejarah"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Kearsipan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Komunikasi di Tempat Kerja"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Administrasi Umum"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "br": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Matematika"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Marketing dan Komunikasi Bisnis"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Sejarah"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Bisnis Ritel dan Administrasi Transaksi"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Strategi Marketing dan Visual Merchandising"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "tjkt": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Keamanan Jaringan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Administrasi Sistem Jaringan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Kosong"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kosong"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Internet of Things"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Keamanan Jaringan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Matematika"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Keamanan Jaringan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pemasangan dan Konfigurasi Perangkat Jaringan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Keamanan Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Administrasi Sistem Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "ulw": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Pemanduan Perjalanan Wisata"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "perhotelan": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "kuliner": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Sejarah"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pendidikan Jasmani, Olahraga, dan Kesehatan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        }
    },
    "12": {
        "akl": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Komputer Akuntansi"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Akuntansi Keuangan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Komputer Akuntansi"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Akuntansi Keuangan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Komputer Akuntansi"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktikum Akuntansi Lembaga/Instansi Pemerintah"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "mplb": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Kosong"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Kosong"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Kosong"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Mata Pelajaran Pilihan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Administrasi Kepegawaian"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Humas dan Keprotokolan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Sarana dan Prasarana"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "br": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Produk, Promosi, dan Penjualan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pelayanan Pelanggan (Customer Service)"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk, Promosi, dan Penjualan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "tjkt": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "2": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Indonesia"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            },
            "3": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Internet of Things"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Internet of Things"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Perencanaan dan Pengalamatan Jaringan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Matematika"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Teknologi Jaringan Kabel dan Nirkabel"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "ulw": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pengelolaan Meeting, Incentive, Conference, dan Exhibition (MICE)"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Pengelolaan Meeting, Incentive, Conference, dan Exhibition (MICE)"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Matematika"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pemesanan dan Penghitungan Tarif Transportasi (Udara, Darat, Laut)"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Produktif Usaha Layanan Wisata"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Pemanduan Perjalanan Wisata"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pengelolaan Wisata dan Rekreasi Minat Wisata"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "perhotelan": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Inggris"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Produk Kreatif dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Matematika"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Matematika"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktik Kompetensi Keahlian Perhotelan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        },
        "kuliner": {
            "1": {
                "SENIN": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Upacara Bendera"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Projek Penguatan Profil Pelajar Pancasila"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Bahasa Jepang"
                    },
                    {
                        "time": "15.00 - 15.45",
                        "subject": "Bahasa Jepang"
                    }
                ],
                "SELASA": [
                    {
                        "time": "07.00 - 07.20",
                        "subject": "Ibadah Pagi"
                    },
                    {
                        "time": "07.20 - 08.05",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "08.05 - 08.50",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "08.50 - 09.35",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "09.35 - 10.20",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "10.20 - 11.05",
                        "subject": "Bahasa Inggris"
                    },
                    {
                        "time": "11.05 - 11.35",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.35 - 12.20",
                        "subject": "Matematika"
                    },
                    {
                        "time": "12.20 - 13.05",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.05 - 13.50",
                        "subject": "Matematika"
                    },
                    {
                        "time": "13.50 - 14.35",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "14.35 - 15.20",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    }
                ],
                "RABU": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Kreativitas, Inovasi, dan Kewirausahaan"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    }
                ],
                "KAMIS": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.45 - 11.15",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "11.15 - 12.00",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Mata Pelajaran Pilihan"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    },
                    {
                        "time": "14.15 - 15.00",
                        "subject": "Pendidikan Agama dan Budi Pekerti"
                    }
                ],
                "JUMAT": [
                    {
                        "time": "07.00 - 07.45",
                        "subject": "Olahraga Pagi / Kerja Bakti"
                    },
                    {
                        "time": "07.45 - 08.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "08.30 - 09.15",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "09.15 - 10.00",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.00 - 10.45",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "10.45 - 11.30",
                        "subject": "Praktik Kompetensi Keahlian Kuliner"
                    },
                    {
                        "time": "11.30 - 12.00",
                        "subject": "Istirahat"
                    },
                    {
                        "time": "12.00 - 12.45",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "12.45 - 13.30",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "13.30 - 14.15",
                        "subject": "Bahasa Indonesia"
                    },
                    {
                        "time": "14.15 - 14.45",
                        "subject": "Ibadah Jumat"
                    }
                ]
            }
        }
    }
};

const funFactsData = [
    {
        "title": "SMK Negeri 1 Bitung dalam Angka",
        "items": [
            "Total 68 guru & tenaga kependidikan (data Pembagian Tugas Mengajar Semester Ganjil 2026/2027)",
            "60 di antaranya adalah guru, 8 adalah tenaga kependidikan (Tata Usaha & Layanan Operasional)",
            "Guru perempuan: 47 orang (±69%) — Guru laki-laki: 21 orang (±31%)",
            "Membina 7 konsentrasi keahlian: AKL, MPLB, Bisnis Ritel, TJKT, Kuliner, Perhotelan, dan ULW"
        ]
    },
    {
        "title": "Guru Produktif per Jurusan",
        "items": [
            "AKL (Akuntansi dan Keuangan Lembaga): 7 guru",
            "TJKT (Teknik Jaringan Komputer dan Telekomunikasi): 6 guru",
            "Bisnis Ritel: 6 guru (2 di antaranya merangkap MPLB)",
            "MPLB (Manajemen Perkantoran dan Layanan Bisnis): 4 guru",
            "Perhotelan: 3 guru",
            "Kuliner: 2 guru",
            "ULW (Usaha Layanan Wisata): 1 guru"
        ]
    },
    {
        "title": "Guru Mata Pelajaran Umum",
        "items": [
            "Bahasa Inggris: 7 guru",
            "Matematika: 6 guru",
            "Bahasa Indonesia: 4 guru",
            "PJOK (Pendidikan Jasmani, Olahraga, dan Kesehatan): 4 guru",
            "Pendidikan Agama: 4 guru (2 Islam, 2 Kristen)",
            "Bahasa Jepang: 2 guru",
            "Sejarah, Pendidikan Pancasila, Seni Budaya, dan PIPAS: masing-masing 1 guru"
        ]
    },
    {
        "title": "Struktur Kepemimpinan Sekolah",
        "items": [
            "Plt. Kepala Sekolah: Drs. Christo A. Lewan",
            "Wakil Kurikulum: Maria M. Lengkong, S.Pd., M.Pd.",
            "Wakil Hubungan Masyarakat: Ronald I. Bumarauw, S.Pd.",
            "Wakil Kesiswaan: Olivia L.I. Wowiling, S.Pd.",
            "6 Ketua Konsentrasi Keahlian (K3) memimpin tiap jurusan produktif: AKL, TJKT, Bisnis Ritel, MPLB, Kuliner, dan ULW"
        ]
    },
    {
        "title": "Arti Gelar Akademik & Profesi Guru",
        "items": [
            "S.Pd = Sarjana Pendidikan · M.Pd = Magister Pendidikan",
            "Gr. = gelar profesi Guru, disandang setelah lulus Pendidikan Profesi Guru (PPG) — 28 dari 60 guru (±47%) sudah bergelar Gr.",
            "MM = Magister Manajemen · SE = Sarjana Ekonomi · S.Th = Sarjana Theologia",
            "S.ST.Par = Sarjana Terapan Pariwisata · S.IP = Sarjana Ilmu Politik · SKM = Sarjana Kesehatan Masyarakat",
            "Drs./Dra. dan Ir. adalah gelar gaya lama (sebelum aturan 1993), setara sarjana S1 pada masanya"
        ]
    },
    {
        "title": "Guru dengan Gelar Magister",
        "items": [
            "Maria M. Lengkong, S.Pd., M.Pd. — Wakil Kurikulum",
            "Triltje Lumihi, S.Pd., M.Pd. — K3 Bisnis Ritel",
            "Irvine Sibula, S.Pd., M.Pd., Gr.",
            "Charmi Conny Manansang, S.Pd., Gr., M.Pd.",
            "Riska Limonu, M.Pd., Gr.",
            "Amelia Natari, S.Pd., M.Pd.",
            "Ritna David, S.Pd., MM — K3 ULW",
            "Amos Pandia, S.Pd., MM",
            "Drs. Paramata Mohune, MM"
        ]
    }
];
