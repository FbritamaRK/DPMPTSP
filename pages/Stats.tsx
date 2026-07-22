import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { Building2, FileCheck2, MessageSquareWarning, Clock } from 'lucide-react';

/* ─── Data riil dari dpmpt.gunungkidulkab.go.id ─── */
const chartData = [
  { year: '2021', pbg: 71, slf: 281 },
  { year: '2022', pbg: 614, slf: 103 },
  { year: '2023', pbg: 422, slf: 128 },
  { year: '2024', pbg: 369, slf: 171 },
  { year: '2025', pbg: 249, slf: 91 },
];

const metrics = [
  {
    icon: Building2,
    value: '1.725',
    label: 'PBG Terbit (2021–2025)',
    sub: 'Persetujuan Bangunan Gedung',
    subColor: 'text-[#1E40AF]',
    accent: 'border-l-sky-500',
    bg: 'bg-sky-50',
    iconBg: 'bg-sky-100 text-sky-700',
  },
  {
    icon: FileCheck2,
    value: '774',
    label: 'SLF Terbit (2021–2025)',
    sub: 'Sertifikat Laik Fungsi',
    subColor: 'text-[#047857]',
    accent: 'border-l-emerald-500',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: MessageSquareWarning,
    value: '73,3%',
    label: 'Pengaduan Diselesaikan',
    sub: '11 dari 15 pengaduan (2026)',
    subColor: 'text-[#B45309]',
    accent: 'border-l-amber-500',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Clock,
    value: '5 Hari',
    label: 'Standar Waktu Layanan',
    sub: 'Rata-rata penerbitan izin',
    subColor: 'text-[#B45309]',
    accent: 'border-l-amber-700',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100 text-[#B45309]',
  },
];

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString('id-ID')}</span>;
}

/* ─── Custom Tooltip ─── */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="bg-white border border-slate-200 rounded-xl shadow-xl p-4 text-sm min-w-[160px]"
      role="tooltip"
      aria-live="polite"
    >
      <p className="font-bold text-slate-800 mb-2.5">Tahun {label}</p>
      {payload.map((p: any) => (
        <p key={p.name} className="flex items-center justify-between gap-4 mb-1">
          <span className="flex items-center gap-2 text-slate-600">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
              style={{ background: p.fill }}
              aria-hidden="true"
            />
            {p.name}
          </span>
          <span className="font-bold text-slate-900">{p.value.toLocaleString('id-ID')}</span>
        </p>
      ))}
    </div>
  );
};

const PBG_COLOR = '#1E40AF';
const SLF_COLOR = '#059669';

/* ─── Component ─── */
const Stats = () => {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-sky-100 text-[#023e70] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Data &amp; Statistik Resmi
          </span>
          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Kinerja Layanan{' '}
            <span className="text-blue-500">DPMPTSP</span>{' '}
            Gunungkidul
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Data penerbitan izin dan kinerja pelayanan perizinan
            .
          </p>
        </div>

        {/* Metric cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
          role="list"
          aria-label="Statistik kinerja layanan"
        >
          {metrics.map(({ icon: Icon, value, label, sub, subColor, accent, bg, iconBg }) => (
            <div
              key={label}
              role="listitem"
              className={`flex items-start gap-4 p-5 rounded-2xl border-l-4 ${bg} border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`} aria-hidden="true">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 leading-tight">{value}</div>
                <div className="text-xs font-bold text-slate-700 mt-0.5">{label}</div>
                <div className={`text-xs mt-1 font-medium ${subColor}`}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart section */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
          {/* Chart header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Jumlah Izin Terbit per Tahun
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                PBG (Persetujuan Bangunan Gedung) &amp; SLF (Sertifikat Laik Fungsi) — 2021 s.d. 2025
              </p>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-5 text-xs font-semibold shrink-0" aria-hidden="true">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ background: PBG_COLOR }} />
                PBG
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ background: SLF_COLOR }} />
                SLF
              </span>
            </div>
          </div>

          {/* Recharts BarChart */}
          <div
            className="h-72 md:h-80"
            role="img"
            aria-label="Grafik batang jumlah PBG dan SLF yang diterbitkan dari tahun 2021 hingga 2025. PBG tertinggi pada 2022 (614 izin), SLF tertinggi pada 2021 (281 sertifikat)."
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} barGap={5} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#CBD5E1" />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 13, fill: '#334155', fontWeight: 600 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748B' }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(14,165,233,0.06)', radius: 8 }} />
                <Bar dataKey="pbg" name="PBG" fill={PBG_COLOR} radius={[6, 6, 0, 0]} maxBarSize={40} />
                <Bar dataKey="slf" name="SLF" fill={SLF_COLOR} radius={[6, 6, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Footnote */}
          <p className="text-xs text-slate-400 mt-4 text-right">
            Sumber: dpmpt.gunungkidulkab.go.id — Data Izin Terbit 2021–2025
          </p>
        </div>

        {/* Bottom info strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'PBG Tertinggi', value: '614 izin', year: '2022', color: 'text-[#1E40AF]', bg: 'bg-sky-50', border: 'border-sky-200' },
            { label: 'SLF Tertinggi', value: '281 sertifikat', year: '2021', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
            { label: 'Pengaduan Masuk 2026', value: '15 pengaduan', year: 'Jan–Jun 2026', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
          ].map(({ label, value, year, color, bg, border }) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center p-4 rounded-2xl border ${border} ${bg}`}
            >
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">{label}</span>
              <span className={`text-xl font-extrabold ${color}`}>{value}</span>
              <span className="text-xs text-slate-400 mt-0.5">{year}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;