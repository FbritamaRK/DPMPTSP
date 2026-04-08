
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatData } from '../types';
import { TrendingUp, User, Building2 } from 'lucide-react';
import { Card, CardContent } from '../components';

const data: StatData[] = [
  { year: '2019', target: 350, realization: 380 },
  { year: '2020', target: 400, realization: 410 },
  { year: '2021', target: 450, realization: 520 },
  { year: '2022', target: 500, realization: 650 },
  { year: '2023', target: 600, realization: 780 },
];

// Fix: Removed React.FC to avoid "Cannot find namespace 'React'" error
const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text & Quick Stats Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Pertumbuhan Investasi <br />
              <span className="text-gk-green">Gunungkidul</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Iklim investasi di Kabupaten Gunungkidul terus menunjukkan tren positif. 
              Didukung oleh potensi pariwisata yang mendunia dan kemudahan perizinan, 
              kami berkomitmen untuk melayani investor dengan prima.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-l-4 border-l-gk-blue border-y-0 border-r-0 rounded-lg shadow-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="text-gk-blue" aria-hidden="true" />
                      <span className="text-sm font-semibold text-gray-600 uppercase">Total Investasi 2023</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">Rp 780 M</div>
                  <div className="text-sm text-green-600 mt-1"><span aria-hidden="true">↑</span><span className="sr-only">Naik</span> 120% dari target</div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-l-4 border-l-gk-green border-y-0 border-r-0 rounded-lg shadow-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                      {/* Fix: Use Building2 instead of Building as per TS suggestions */}
                      <Building2 className="text-gk-green" aria-hidden="true" />
                      <span className="text-sm font-semibold text-gray-600 uppercase">Izin Terbit</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4.521</div>
                  <div className="text-sm text-gray-500 mt-1">Sepanjang tahun 2023</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Chart Side */}
          <Card className="h-[400px] shadow-xl border-gray-100 rounded-2xl" role="img" aria-label="Grafik Realisasi Investasi dari tahun 2019 hingga 2023">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center" aria-hidden="true">Realisasi Investasi (Dalam Miliar Rupiah)</h3>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                        cursor={{fill: '#f1f5f9'}}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend iconType="circle" />
                    <Bar dataKey="target" name="Target" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="realization" name="Realisasi" fill="#009B4D" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Stats;
