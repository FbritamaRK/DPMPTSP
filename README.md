# 🏛️ Website Portal Layanan Publik & Investasi DPMPTSP Kabupaten Gunungkidul

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Project Type](https://img.shields.io/badge/Project-Tugas%20Akhir%20(TA)-orange?style=flat-square)](#-tentang-proyek-tugas-akhir)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> Proyek pengembangan antarmuka web modern untuk **Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kabupaten Gunungkidul, D.I. Yogyakarta**. Dirancang dengan fokus pada kecepatan akses, transparansi informasi investasi, integrasi layanan publik, serta kepatuhan standar aksesibilitas web (WCAG).

---

## 🎓 Tentang Proyek Tugas Akhir

Proyek ini dibuat dan dikembangkan sebagai **Tugas Akhir (TA)** untuk memenuhi salah satu syarat kelulusan jenjang akademik.

### 📌 Latar Belakang & Tujuan
1. **Modernisasi Portal Pemerintahan Daerah**: Menggantikan antarmuka konvensional dengan sistem antarmuka web responsif dan interaktif yang memudahkan masyarakat umum, pelaku UMKM, dan investor dalam mengakses layanan perizinan terpadu satu pintu.
2. **Promosi Peluang Investasi Strategis**: Menyediakan visualisasi dan data prospektus investasi yang komprehensif (dilengkapi analisis kelayakan finansial: NPV, IRR, EIRR, Payback Period, dan DSCR) untuk menarik minat investor domestik (PMDN) maupun mancanegara (PMA) ke Kabupaten Gunungkidul.
3. **Keterbukaan Informasi & Pengaduan Publik**: Mengintegrasikan saluran pengaduan daring dengan penerbitan nomor tiket unik serta pelacakan status tindak lanjut aduan secara mandiri dan transparan.
4. **Implementasi Standar Aksesibilitas (WCAG)**: Menerapkan rasio kontras visual tinggi, navigasi ramah keyboard/screen-reader, dan tata letak hierarki semantik.

---

## ✨ Fitur-Fitur Utama

### 1. 🏠 Beranda & Pusat Informasi (Home)
- **Hero Section Dinamis**: Tampilan pembuka imersif dengan tipografi Georgia berkelas dan transisi animasi berbasis pegas (*spring motion*).
- **Banner Carousel**: Slider informasi sosialisasi kebijakan, maklumat pelayanan, dan komitmen Zona Integritas (Wilayah Bebas Korupsi).
- **Simulasi Lacak Permohonan Izin**: Fitur pengecekan status tahapan verifikasi izin perizinan berusaha dan non-berusaha dengan riwayat *progress*.
- **Akses Cepat (Quick Links)**: Tautan integrasi instan ke layanan digital pemerintah seperti **SIMPEL** (Sistem Perizinan Online Gunungkidul), **SIMBG** (Sistem Bangunan Gedung PUPR), dan **MPP Digital**.
- **Sorotan Investasi & Berita Terkini**: Ringkasan sektor unggulan daerah dan feed agenda/kegiatan kedinasan terbaru.

### 2. 🏛️ Profil Lembaga (`/profil`)
- Struktur navigasi berbasis standar *Design System* institusi pemerintahan (terinspirasi GOV.UK / gov.sg).
- Menyajikan **Gambaran Umum**, **Visi & Misi**, **Ruang Lingkup**, **Tupoksi**, **Struktur Pejabat Organisasi**, serta **Informasi Kontak & Jam Kerja Operasional**.

### 3. 📜 Repositori Produk Hukum (`/produk-hukum`)
- Arsip digital regulasi perizinan dan investasi tingkat daerah maupun nasional.
- Filter dokumen berdasarkan kategori: **Peraturan Daerah (Perda)**, **Peraturan Bupati (Perbup)**, **Undang-Undang (UU)**, dan **SOP Pelayanan**.
- Pencarian dokumen interaktif (*real-time search*) dan tautan unduh berkas (PDF).

### 4. 📈 Prospektus & Peluang Investasi (`/prospektus` & `/prospektus/:id`)
- Katalog proyek investasi potensial di Kabupaten Gunungkidul (misal: *Resort & Eco-Tourism Pantai Wediombo*, *Kawasan Industri Pengolahan Ikan Sadeng*, *Agrowisata Buah Tropis Patuk*, *Waste to Energy Ponjong*).
- Indikator finansial mendalam bagi investor:
  - Estimasi Biaya Pembebasan Lahan & Konstruksi Sipil
  - Total Nilai Investasi
  - Net Present Value (NPV), IRR & EIRR
  - Payback Period & Debt Service Coverage Ratio (DSCR)
  - Status Kesiapan Proyek (*Ready to Offer*, *Strategic*, *Under Review*)
- Tombol unduh Katalog Prospektus Lengkap dalam format PDF.

### 5. 📨 Sistem Pengaduan Masyarakat (`/pengaduan`)
- Formulir pengaduan daring terstruktur dengan validasi input (Nama, NIK, Kontak, Kategori, Pesan Aduan).
- **Generator Nomor Tiket Aduan**: Setiap aduan otomatis memperoleh kode identifikasi tiket untuk tracking.
- **Lacak Status Aduan**: Masyarakat dapat memantau status tindak lanjut aduan secara langsung (*Terkirim*, *Diproses*, *Selesai*).
- **FAQ Interaktif**: Pertanyaan yang sering diajukan terkait SOP dan kerahasiaan identitas pelapor.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi / Pustaka | Keterangan |
| :--- | :--- | :--- |
| **Framework Inti** | React 19 (`react`, `react-dom`) | Library UI berbasis komponen |
| **Bahasa Pemrograman** | TypeScript 5.9 | Pengetikan statis untuk keandalan kode |
| **Build Tool / Bundler** | Vite 7 | Server pengembangan cepat dan optimasi bundling |
| **Routing** | React Router DOM 7 | Manajemen rute halaman SPA (*Single Page Application*) |
| **Styling** | Tailwind CSS | Utility-first CSS framework dengan kustomisasi palet warna |
| **Animasi & Interaktivitas** | Motion (Framer Motion) & GSAP | Animasi scroll-triggered, spring motion, dan transisi halus |
| **Carousel** | Embla Carousel React | Slider banner responsif dan ramah sentuhan |
| **Visualisasi Data** | Recharts | Komponen grafik untuk data statistik investasi |
| **Ikonografi** | Lucide React | Koleksi ikon SVG modern dan konsisten |
| **Aksesibilitas & Utilitas** | `clsx`, `tailwind-merge`, CVA | Manajemen conditional classes dan standar WCAG 2.2 |

---

## 📁 Struktur Direktori

```text
website-dpmptsp/
├── components/                  # Komponen antarmuka yang dapat digunakan kembali
│   ├── ui/                      # Komponen UI tingkat atomik (primitif)
│   ├── Badge.tsx                # Komponen label status
│   ├── Banner.tsx               # Slider banner carousel informasi
│   ├── Button.tsx               # Komponen tombol serbaguna
│   ├── Card.tsx                 # Wadah kartu konten
│   └── SectionHeader.tsx        # Header judul bagian halaman
├── pages/                       # Halaman utama aplikasi
│   ├── Complaints.tsx           # Layanan form & lacak aduan publik
│   ├── Footer.tsx               # Navigasi kaki dan kontak dinas
│   ├── Hero.tsx                 # Bagian sambutan utama beranda
│   ├── Home.tsx                 # Halaman beranda utama
│   ├── Investment.tsx           # Seksi ringkasan peluang investasi
│   ├── InvestmentProspectus.tsx # Katalog proyek prospektus investasi
│   ├── LegalProducts.tsx        # Halaman arsip produk hukum & regulasi
│   ├── Navbar.tsx               # Navigasi bilah atas & menu responsif
│   ├── News.tsx                 # Warta dan publikasi kegiatan terkini
│   ├── OperationalHoursPopup.tsx# Notifikasi jam operasional layanan
│   ├── Profile.tsx              # Profil struktural dan informasi DPMPTSP
│   ├── ProjectDetail.tsx        # Rincian kelayakan finansial proyek investasi
│   ├── RelatedLinks.tsx         # Tautan cepat aplikasi kedinasan terkait
│   ├── Services.tsx             # Ringkasan layanan & tracking izin
│   └── Stats.tsx                # Data capaian realisasi investasi
├── public/                      # Aset statis publik (gambar, ikon, pdf)
│   └── img/                     # Berkas gambar banner dan aset proyek
├── App.tsx                      # Komponen root dan konfigurasi rute aplikasi
├── data.ts                      # Mock data proyek investasi dan perizinan
├── types.ts                     # Definisi TypeScript interface & tipe data
├── index.html                   # Berkas HTML template utama
├── index.tsx                    # Titik masuk utama eksekusi React (mounting)
├── package.json                 # Konfigurasi dependensi dan skrip proyek
├── tsconfig.json                # Konfigurasi TypeScript compiler
└── vite.config.ts               # Konfigurasi bundler Vite
```

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat Sistem
- **Node.js**: Versi `>= 18.0.0`
- **npm** (atau package manager lain seperti `yarn` / `pnpm`)
- Web browser modern (Chrome, Edge, Firefox, atau Safari)

### Langkah Instalasi

1. **Clone repositori**:
   ```bash
   git clone https://github.com/FbritamaRK/DPMPTSP.git
   cd website-dpmptsp
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara lokal di: `http://localhost:5173/` (atau port yang ditentukan Vite).

4. **Kompilasi untuk tahap produksi (Production Build)**:
   ```bash
   npm run build
   ```
   Hasil build akan disimpan di folder `dist/`.

5. **Uji hasil build (Preview)**:
   ```bash
   npm run preview
   ```

6. **Pemeriksaan kode (Linting)**:
   ```bash
   npm run lint
   ```

---

## 👨‍💻 Pengembang & Identitas Proyek

- **Nama Pengembang**: Febri Raka Pratama ([@FbritamaRK](https://github.com/FbritamaRK))
- **Email Kontak**: [febriraka34@gmail.com](mailto:febriraka34@gmail.com)
- **Tujuan Proyek**: Tugas Akhir (TA) - Pembuatan & Perancangan Website Layanan Terpadu Satu Pintu dan Promosi Investasi Daerah DPMPTSP Kabupaten Gunungkidul.
- **Tahun Pelaksanaan**: 2026

---

## 📄 Penafian Akademik (Academic Disclaimer)

> Proyek ini dikembangkan untuk tujuan akademis dalam rangka penyusunan **Tugas Akhir**. Data simulasi (mock data) proyek investasi, regulasi, dan perizinan yang tercantum di dalam sistem ini digunakan sebagai bahan percontohan implementasi antarmuka dan studi kelayakan sistem informasi publik. Hak cipta lambang daerah dan identitas lembaga tetap merupakan milik Pemerintah Kabupaten Gunungkidul.
