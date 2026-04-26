import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Building2, Users, Clock } from 'lucide-react';

const chartData = [
  { year: '2019', target: 350, realisasi: 380 },
  { year: '2020', target: 400, realisasi: 410 },
  { year: '2021', target: 450, realisasi: 520 },
  { year: '2022', target: 500, realisasi: 650 },
  { year: '2023', target: 600, realisasi: 780 },
];

const metrics = [
  {
    icon: TrendingUp,
    value: 'Rp 780 M',
    label: 'Total Investasi 2023',
    sub: '↑ 130% dari target',
    subColor: 'text-emerald-600',
    accent: 'border-l-emerald-500 bg-emerald-50',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Building2,
    value: '4.521',
    label: 'Izin Terbit',
    sub: 'Sepanjang tahun 2023',
    subColor: 'text-slate-500',
    accent: 'border-l-sky-500 bg-sky-50',
    iconBg: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Users,
    value: '12.840',
    label: 'Pengguna Layanan',
    sub: 'Total kunjungan 2023',
    subColor: 'text-slate-500',
    accent: 'border-l-violet-500 bg-violet-50',
    iconBg: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Clock,
    value: '3 Hari',
    label: 'Rata-rata Waktu Izin',
    sub: 'Lebih cepat 40%',
    subColor: 'text-amber-600',
    accent: 'border-l-amber-500 bg-amber-50',
    iconBg: 'bg-amber-100 text-amber-700',
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="bg-white border border-slate-200 rounded-xl shadow-lg p-4 text-sm"
      role="tooltip"
      aria-live="polite"
    >
      <p className="font-bold text-slate-800 mb-2">Tahun {label}</p>
      {payload.map((p: any) => (
        <p key={p.name} className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ background: p.fill }}
            aria-hidden="true"
          />
          <span className="text-slate-600">{p.name}:</span>
          <span className="font-semibold text-slate-900">Rp {p.value} M</span>
        </p>
      ))}
    </div>
  );
};

const Stats = () => {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Data & Statistik
          </span>
          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Pertumbuhan Investasi{' '}
            <span className="text-emerald-600">Gunungkidul</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Iklim investasi terus tumbuh positif. Didukung potensi pariwisata dan kemudahan perizinan.
          </p>
        </div>

        {/* Metric cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
          role="list"
          aria-label="Statistik kinerja"
        >
          {metrics.map(({ icon: Icon, value, label, sub, subColor, accent, iconBg }) => (
            <div
              key={label}
              role="listitem"
              className={`flex items-start gap-4 p-5 rounded-2xl border-l-4 ${accent} border border-slate-100`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`} aria-hidden="true">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 leading-tight">{value}</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">{label}</div>
                <div className={`text-xs mt-1 font-medium ${subColor}`}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8"
          role="img"
          aria-label="Grafik batang realisasi investasi dibandingkan target dari tahun 2019 hingga 2023. Realisasi selalu melampaui target dan terus meningkat hingga Rp780 miliar pada 2023."
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900" aria-hidden="true">
                Realisasi vs Target Investasi
              </h3>
              <p className="text-sm text-[#374151] mt-0.5" aria-hidden="true">
                Dalam Miliar Rupiah (2019–2023)
              </p>
            </div>
            <div className="flex items-center gap-5 text-xs font-semibold" aria-hidden="true">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#e5ff00] inline-block" />
                Target
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#fd0101] inline-block" />
                Realisasi
              </span>
            </div>
          </div>

          <div className="h-72 md:h-80" aria-hidden="true">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 13, fill: '#64748b', fontWeight: 500 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#374151' }}
                  tickFormatter={(v) => `${v}`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1a1a1a', radius: 8 }} />
                <Bar dataKey="target"    name="Target"    fill="#e5ff00" radius={[6, 6, 0, 0]} maxBarSize={36} />
                <Bar dataKey="realisasi" name="Realisasi" fill="#fd0101" radius={[6, 6, 0, 0]} maxBarSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;