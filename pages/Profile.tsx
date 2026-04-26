import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronRight, MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   DESIGN SYSTEM — GOV.UK / gov.sg aesthetic
   ─────────────────────────────────────────────────────────────
   • Typeface   : Georgia (serif headings) + system-ui (body)
   • Palette    : Pure white bg · #0b1f4e ink · #1a56db blue
                  #f3f4f6 surface · #e5e7eb border · no gradients
   • Layout     : Fixed left sidebar nav + scrollable content
   • Decoration : Zero. No shadows, no gradients, no icons as decor.
                  Structure conveyed purely through type + space.
   • Dividers   : 1px #e5e7eb rules and 4px left accent bars
   • WCAG 2.2   : All criteria met (skip nav, focus rings, contrast)
   ───────────────────────────────────────────────────────────── */

/* ── DATA ──────────────────────────────────────────────────── */

const NAV_SECTIONS = [
  { id: 'gambaran-umum',  label: 'Gambaran Umum' },
  { id: 'visi-misi',      label: 'Visi dan Misi' },
  { id: 'ruang-lingkup',  label: 'Ruang Lingkup' },
  { id: 'tupoksi',        label: 'Tugas dan Fungsi' },
  { id: 'pejabat',        label: 'Pejabat Struktural' },
  { id: 'kontak',         label: 'Alamat dan Kontak' },
];

const MISI = [
  'Meningkatkan kualitas pelayanan perizinan dan non-perizinan yang cepat, mudah, dan transparan.',
  'Mendorong pertumbuhan investasi yang berwawasan lingkungan dan berkelanjutan di Kabupaten Gunungkidul.',
  'Mewujudkan sistem informasi perizinan yang terintegrasi dan mudah diakses oleh seluruh masyarakat.',
  'Meningkatkan kompetensi dan profesionalisme sumber daya aparatur dalam memberikan pelayanan.',
  'Memperkuat sinergi antar instansi dalam rangka percepatan proses perizinan berusaha.',
];

const RUANG_LINGKUP = [
  {
    nomor: '1',
    judul: 'Perizinan Berusaha',
    uraian:
      'Pelayanan penerbitan Nomor Induk Berusaha (NIB), izin usaha, dan izin komersial/operasional melalui sistem OSS-RBA sesuai ketentuan peraturan perundang-undangan.',
  },
  {
    nomor: '2',
    judul: 'Non-Perizinan',
    uraian:
      'Layanan rekomendasi, surat keterangan, dan dokumen non-perizinan yang diperlukan masyarakat dan pelaku usaha dalam menjalankan kegiatan.',
  },
  {
    nomor: '3',
    judul: 'Penanaman Modal',
    uraian:
      'Fasilitasi, promosi, dan pemantauan realisasi investasi Penanaman Modal Dalam Negeri (PMDN) dan Penanaman Modal Asing (PMA) di wilayah Kabupaten Gunungkidul.',
  },
  {
    nomor: '4',
    judul: 'Pengaduan dan Informasi Layanan',
    uraian:
      'Pengelolaan pengaduan masyarakat, konsultasi perizinan, dan pelayanan informasi publik sesuai amanat Undang-Undang Keterbukaan Informasi Publik.',
  },
];

const FUNGSI = [
  'Perumusan kebijakan teknis di bidang penanaman modal dan pelayanan terpadu satu pintu.',
  'Pelaksanaan koordinasi dan sinkronisasi perencanaan kebijakan daerah di bidang penanaman modal.',
  'Pemberian dukungan atas penyelenggaraan pemerintahan daerah di bidang penanaman modal.',
  'Penyelenggaraan pelayanan administrasi perizinan dan non-perizinan secara terpadu.',
  'Pemantauan, evaluasi, dan pelaporan pelaksanaan kebijakan daerah di bidang penanaman modal.',
  'Pengelolaan sistem informasi penanaman modal dan pelayanan perizinan.',
  'Pembinaan dan pengembangan iklim usaha serta promosi investasi daerah.',
  'Pelaksanaan administrasi dinas sesuai dengan lingkup tugasnya.',
];

const PEJABAT = [
  { no: 1, jabatan: 'Kepala Dinas',                              nip: '—' },
  { no: 2, jabatan: 'Sekretaris Dinas',                          nip: '—' },
  { no: 3, jabatan: 'Kepala Bidang Perizinan dan Non-Perizinan', nip: '—' },
  { no: 4, jabatan: 'Kepala Bidang Penanaman Modal',             nip: '—' },
  { no: 5, jabatan: 'Kepala Bidang Pengaduan, Kebijakan dan Pelaporan Layanan', nip: '—' },
];

const JAM = [
  { hari: 'Senin – Kamis', jam: '08.00 – 15.00 WIB' },
  { hari: 'Jumat',         jam: '08.00 – 11.30 WIB' },
  { hari: 'Sabtu – Minggu', jam: 'Libur' },
];

/* ── HELPERS ────────────────────────────────────────────────── */

/** Thin horizontal rule */
const Hr = ({ className = '' }: { className?: string }) => (
  <hr className={`border-0 border-t border-gray-200 ${className}`} />
);

/** Section heading — GOV.UK style: serif, heavy, accent left bar */
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-bold text-[#0b1f4e] scroll-mt-24
                 pl-4 border-l-4 border-gk-blue leading-snug"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {children}
    </h2>
  );
}

/** Section wrapper with consistent spacing */
function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-20">
      <SectionHeading id={`${id}-h`}>{heading}</SectionHeading>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/* ── PAGE ───────────────────────────────────────────────────── */

const Profile = () => {
  const [activeId, setActiveId] = useState('gambaran-umum');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  /* Scroll-spy */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="min-h-screen bg-white pt-16"
      style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}
    >

      {/* ── SKIP NAV ── */}
      <a
        href="#profile-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-[200]
                   focus:bg-[#0b1f4e] focus:text-white focus:px-4 focus:py-2 focus:rounded
                   focus:text-sm focus:font-semibold focus-visible:outline-none"
      >
        Lewati ke konten
      </a>

      {/* ────────────────────────────────────────────────────────
          HEADER — Flat, institutional. No gradient.
          Inspired by GOV.UK blue bar + white space.
          ──────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="bg-[#0b1f4e] border-b-4 border-gk-blue"
      >

        {/* Main header content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p
            className="text-white text-xs font-semibold tracking-[0.12em] uppercase mb-3"
          >
            Profil Dinas
          </p>
          <h1
            id="page-heading"
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            }}
          >
            Dinas Penanaman Modal dan<br className="hidden sm:block" />
            {' '}Pelayanan Terpadu Satu Pintu
          </h1>
          <p className="text-white mt-2 text-sm">
            Kabupaten Gunungkidul · Daerah Istimewa Yogyakarta
          </p>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mt-6 flex items-center gap-2 text-xs">
            <a
              href="/"
              className="text-white hover:text-blue-200 transition-colors
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 rounded"
            >
              Beranda
            </a>
            <ChevronRight className="w-3 h-3 text-white" aria-hidden="true" />
            <span className="text-[#ffca38]" aria-current="page">Profil DPMPTSP</span>
          </nav>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────
          BODY — Two-column: fixed sidebar + scrollable content
          ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-0 lg:gap-12 xl:gap-16 relative">

          {/* ── LEFT SIDEBAR*/}
          <aside
            aria-label="Daftar isi halaman"
            className="hidden lg:block w-56 xl:w-64 flex-shrink-0 pt-10"
          >
            <div className="sticky top-24">
              <p
                className="text-[11px] font-black text-black uppercase tracking-[0.12em] mb-4"
              >
                Daftar Isi
              </p>
              <nav aria-label="Navigasi bagian profil">
                <ul className="space-y-0.5">
                  {NAV_SECTIONS.map(({ id, label }) => {
                    const isActive = activeId === id;
                    return (
                      <li key={id}>
                        <button 
                          type="button"
                          onClick={() => scrollTo(id)}
                          aria-current={isActive ? 'location' : undefined}
                          className={`w-full text-left text-sm text-gray-900 py-2.5 pl-3 pr-2 rounded-sm
                                     transition-all leading-snug
                                     focus-visible:outline-none focus-visible:ring-2
                                     focus-visible:ring-gk-blue focus-visible:ring-offset-2
                                     ${isActive
                                       ? 'border-l-[3px] border-gk-blue text-gk-blue font-semibold bg-blue-50/60 pl-4'
                                       : 'border-l-[3px] border-transparent text-gray-500 hover:text-black hover:border-gray-300'}`}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Quick info panel */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-[11px] font-black text-black uppercase tracking-[0.12em] mb-3">
                  Jam Layanan
                </p>
                <dl className="space-y-1.5">
                  {JAM.map(({ hari, jam }) => (
                    <div key={hari}>
                      <dt className="text-xs text-gray-500">{hari}</dt>
                      <dd
                        className={`text-xs font-semibold ${
                          jam === 'Libur' ? 'text-red-600' : 'text-[#0b1f4e]'
                        }`}
                      >
                        {jam}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="https://dpmpt.gunungkidulkab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold
                             text-gk-blue hover:underline
                             focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-gk-blue rounded"
                >
                  Situs Resmi
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span className="sr-only">(membuka tab baru)</span>
                </a>
              </div>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main
            id="profile-main"
            ref={mainRef}
            tabIndex={-1}
            className="flex-1 min-w-0 py-10 space-y-14 outline-none"
          >

            {/* ─── 1. GAMBARAN UMUM ─── */}
            <Section id="gambaran-umum" heading="Gambaran Umum">
              <p className="text-gray-700 leading-[1.85] text-[15px]">
                Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kabupaten
                Gunungkidul merupakan unsur pelaksana urusan pemerintahan daerah di bidang
                penanaman modal dan pelayanan terpadu satu pintu. Dinas ini dibentuk berdasarkan
                Peraturan Daerah Kabupaten Gunungkidul tentang Pembentukan dan Susunan
                Perangkat Daerah.
              </p>
              <p className="text-gray-700 leading-[1.85] text-[15px] mt-4">
                DPMPTSP berkomitmen untuk mewujudkan pelayanan publik yang prima, transparan,
                dan akuntabel melalui penerapan sistem pelayanan terpadu berbasis teknologi
                informasi. Dengan motto <strong className="text-[#0b1f4e]">Handal · Profesional · Akuntabel</strong>,
                DPMPTSP terus berinovasi dalam memberikan kemudahan berusaha dan kepastian hukum
                bagi masyarakat dan investor di Kabupaten Gunungkidul.
              </p>

              {/* Fact panel — GOV.UK "callout" style */}
              <div className="mt-8 border border-gray-200 rounded-sm overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-500">
                    Informasi Singkat
                  </p>
                </div>
                <dl className="divide-y divide-gray-100">
                  {[
                    { label: 'Dasar Hukum', value: 'Perda Kabupaten Gunungkidul tentang Pembentukan dan Susunan Perangkat Daerah' },
                    { label: 'Kantor',      value: 'Jl. Kasatrian No.38, Wonosari, Kabupaten Gunungkidul, DIY 55851' },
                    { label: 'Telepon',     value: '(0274) 391942' },
                    { label: 'Surel',       value: 'dpmptsp@gunungkidulkab.go.id' },
                    { label: 'Motto',       value: 'Handal · Profesional · Akuntabel' },
                  ].map(({ label, value }) => (
                    <div key={label} className="grid grid-cols-3 px-5 py-3 gap-4">
                      <dt className="text-sm text-gray-500 font-medium col-span-1">{label}</dt>
                      <dd className="text-sm text-[#0b1f4e] font-medium col-span-2">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Section>

            <Hr />

            {/* ─── 2. VISI & MISI ─── */}
            <Section id="visi-misi" heading="Visi dan Misi">

              {/* Visi — GOV.UK "warning text" style with left bar */}
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-3">
                  Visi
                </p>
                <blockquote
                  className="border-l-4 border-[#0b1f4e] pl-5 py-1"
                >
                  <p
                    className="text-[#0b1f4e] text-lg md:text-xl leading-[1.6] font-semibold"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Terwujudnya Pelayanan Penanaman Modal dan Perizinan yang Prima, Transparan,
                    dan Akuntabel untuk Mendukung Pembangunan Kabupaten Gunungkidul.
                  </p>
                </blockquote>
              </div>

              {/* Misi */}
              <div className="mt-10">
                <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-4">
                  Misi
                </p>
                <ol className="space-y-4" aria-label="Daftar misi">
                  {MISI.map((item, idx) => (
                    <li key={idx} className="flex gap-5 items-start">
                      <span
                        className="text-sm font-black text-gk-blue tabular-nums leading-[1.7] flex-shrink-0"
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[15px] text-gray-700 leading-[1.8]">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Section>

            <Hr />

            {/* ─── 3. RUANG LINGKUP ─── */}
            <Section id="ruang-lingkup" heading="Ruang Lingkup Layanan">
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                DPMPTSP Kabupaten Gunungkidul menyelenggarakan pelayanan dalam empat ruang
                lingkup utama sebagaimana ditetapkan dalam peraturan daerah yang berlaku.
              </p>

              <div className="space-y-0 border border-gray-200 rounded-sm divide-y divide-gray-200 overflow-hidden">
                {RUANG_LINGKUP.map(({ nomor, judul, uraian }) => (
                  <div key={nomor} className="flex gap-0 hover:bg-gray-50/60 transition-colors">
                    {/* Number column */}
                    <div
                      className="w-14 flex-shrink-0 flex items-start justify-center pt-5
                                 bg-gray-50 border-r border-gray-200"
                      aria-hidden="true"
                    >
                      <span className="text-sm font-black text-gk-blue">{nomor}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 px-6 py-5">
                      <h3 className="text-[15px] font-bold text-[#0b1f4e] mb-1.5">{judul}</h3>
                      <p className="text-sm text-gray-600 leading-[1.75]">{uraian}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Hr />

            {/* ─── 4. TUPOKSI ─── */}
            <Section id="tupoksi" heading="Tugas dan Fungsi">

              {/* Tugas pokok */}
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-3">
                  Tugas Pokok
                </p>
                <p className="text-[15px] text-gray-700 leading-[1.8]">
                  DPMPTSP mempunyai tugas membantu Bupati dalam melaksanakan urusan pemerintahan
                  daerah di bidang penanaman modal dan pelayanan terpadu satu pintu serta tugas
                  pembantuan yang diberikan kepada daerah.
                </p>
              </div>

              {/* Fungsi */}
              <div className="mt-8">
                <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-4">
                  Fungsi
                </p>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Dalam melaksanakan tugasnya, DPMPTSP menyelenggarakan fungsi:
                </p>
                <ol
                  className="space-y-3"
                  aria-label="Daftar fungsi DPMPTSP"
                >
                  {FUNGSI.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-4 items-start py-3 border-b border-gray-100 last:border-0"
                    >
                      <span
                        className="text-[11px] font-black text-gray-400 tabular-nums mt-0.5 leading-[1.5] flex-shrink-0 w-5"
                        aria-hidden="true"
                      >
                        {idx + 1}.
                      </span>
                      <p className="text-[15px] text-gray-700 leading-[1.75]">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Referensi */}
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-sm px-5 py-4">
                <p className="text-xs text-blue-800/70 leading-relaxed">
                  <strong className="text-blue-900">Dasar hukum: </strong>
                  Peraturan Bupati Gunungkidul tentang Kedudukan, Susunan Organisasi, Tugas,
                  Fungsi, dan Tata Kerja Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu.
                </p>
              </div>
            </Section>

            <Hr />

            {/* ─── 5. PEJABAT STRUKTURAL ─── */}
            <Section id="pejabat" heading="Pejabat Struktural">
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Susunan pejabat struktural DPMPTSP Kabupaten Gunungkidul berdasarkan Keputusan
                Bupati Gunungkidul yang berlaku.
              </p>

              <div className="border border-gray-200 rounded-sm overflow-hidden">
                <table
                  className="w-full text-sm"
                  aria-label="Pejabat struktural DPMPTSP Gunungkidul"
                >
                  <thead>
                    <tr className="bg-[#0b1f4e] text-white">
                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider w-10"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider"
                      >
                        Jabatan
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider hidden md:table-cell"
                      >
                        Nama
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {PEJABAT.map(({ no, jabatan, nip }) => (
                      <tr key={no} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4 text-gray-400 tabular-nums text-sm font-mono">
                          {no}
                        </td>
                        <td className="px-5 py-4 font-medium text-[#0b1f4e]">{jabatan}</td>
                        <td className="px-5 py-4 text-gray-400 hidden md:table-cell">
                          {nip === '—' ? (
                            <span className="text-xs italic text-gray-400">
                              Lihat situs resmi
                            </span>
                          ) : (
                            nip
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Data pejabat lengkap tersedia di{' '}
                <a
                  href="https://dpmpt.gunungkidulkab.go.id/web/kontent/127/profil_pejabat_struktural"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gk-blue underline underline-offset-2 hover:text-blue-800
                             focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-gk-blue rounded"
                >
                  situs resmi DPMPTSP Gunungkidul
                  <span className="sr-only">(membuka tab baru)</span>
                </a>.
              </p>
            </Section>

            <Hr />

            {/* ─── 6. KONTAK ─── */}
            <Section id="kontak" heading="Alamat dan Kontak">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Kantor Utama */}
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-4">
                    Kantor Dinas
                  </p>
                  <address className="not-italic space-y-4">
                    {[
                      {
                        icon: MapPin,
                        label: 'Alamat',
                        content: 'Jl. Kasatrian No.38, Purbosari, Wonosari, Kabupaten Gunungkidul, DIY 55851',
                        href: null,
                      },
                      {
                        icon: Phone,
                        label: 'Telepon',
                        content: '(0274) 391942',
                        href: 'tel:+62274391942',
                      },
                      {
                        icon: Phone,
                        label: 'WhatsApp',
                        content: '0811-2953-451',
                        href: 'https://wa.me/628112953451',
                      },
                      {
                        icon: Mail,
                        label: 'Surel',
                        content: 'dpmptsp@gunungkidulkab.go.id',
                        href: 'mailto:dpmptsp@gunungkidulkab.go.id',
                      },
                      {
                        icon: Globe,
                        label: 'Situs Resmi',
                        content: 'dpmpt.gunungkidulkab.go.id',
                        href: 'https://dpmpt.gunungkidulkab.go.id',
                        external: true,
                      },
                    ].map(({ icon: Icon, label, content, href, external }) => (
                      <div key={label} className="flex gap-4 items-start">
                        <Icon
                          className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              target={external ? '_blank' : undefined}
                              rel={external ? 'noopener noreferrer' : undefined}
                              className="text-[15px] text-gk-blue underline underline-offset-2
                                         hover:text-blue-800 break-all
                                         focus-visible:outline-none focus-visible:ring-2
                                         focus-visible:ring-gk-blue rounded"
                            >
                              {content}
                              {external && <span className="sr-only">(membuka tab baru)</span>}
                            </a>
                          ) : (
                            <p className="text-[15px] text-[#0b1f4e]">{content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </address>
                </div>

                {/* Jam & MPP */}
                <div className="space-y-8">
                  {/* Jam layanan */}
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-4 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      Jam Pelayanan
                    </p>
                    <table className="w-full text-sm border border-gray-200 rounded-sm overflow-hidden">
                      <caption className="sr-only">Jadwal jam pelayanan DPMPTSP Gunungkidul</caption>
                      <tbody className="divide-y divide-gray-100">
                        {JAM.map(({ hari, jam }) => (
                          <tr key={hari} className="odd:bg-gray-50 even:bg-white">
                            <td className="px-4 py-3 text-gray-700">{hari}</td>
                            <td
                              className={`px-4 py-3 font-semibold text-right ${
                                jam === 'Libur' ? 'text-red-600' : 'text-[#0b1f4e]'
                              }`}
                            >
                              {jam}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* MPP */}
                  <div className="border-l-4 border-gray-300 pl-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-400 mb-2">
                      Mal Pelayanan Publik (MPP)
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Jl. Mgr. Soegijopranoto No.22, Wonosari, Kabupaten Gunungkidul
                    </p>
                    <a
                      href="https://dpmpt.gunungkidulkab.go.id/web/kontent/112/mpp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold
                                 text-gk-blue underline underline-offset-2 hover:text-blue-800
                                 focus-visible:outline-none focus-visible:ring-2
                                 focus-visible:ring-gk-blue rounded"
                    >
                      Informasi MPP
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      <span className="sr-only">(membuka tab baru)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="mt-10 border border-gray-200 rounded-sm bg-gray-50 h-64
                           flex flex-col items-center justify-center gap-2"
                role="img"
                aria-label="Peta lokasi kantor DPMPTSP Gunungkidul — Jl. Kasatrian No.38 Wonosari"
              >
                {<iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63258.95076582807!2d110.44121715478565!3d-7.716969546178236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb3444ca72631%3A0xb104709a5322f518!2sDinas%20Penanaman%20Modal%20dan%20Pelayanan%20Terpadu%20Satu%20Pintu%20(%20DPMPTSP%20)%20Kabupaten%20Gunungkidul!5e0!3m2!1sen!2sid!4v1777033011394!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>}
              </div>
            </Section>

            {/* Bottom divider */}
            <Hr className="mt-6" />
            <p className="text-xs text-gray-400 pb-6">
              Sumber data: Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten
              Gunungkidul.{' '}
              <a
                href="https://dpmpt.gunungkidulkab.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gk-blue underline underline-offset-2 hover:text-blue-800
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-gk-blue rounded"
              >
                dpmpt.gunungkidulkab.go.id
                <span className="sr-only">(membuka tab baru)</span>
              </a>
            </p>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Profile;