import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatData } from '../types';
import { TrendingUp, Users, Building } from 'lucide-react';

const data: StatData[] = [
  { year: '2019', target: 350, realization: 380 },
  { year: '2020', target: 400, realization: 410 },
  { year: '2021', target: 450, realization: 520 },
  { year: '2022', target: 500, realization: 650 },
  { year: '2023', target: 600, realization: 780 },
];

const Stats: React.FC = () => {
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
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-gk-blue">
                <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="text-gk-blue" />
                    <span className="text-sm font-semibold text-gray-600 uppercase">Total Investasi 2023</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">Rp 780 M</div>
                <div className="text-sm text-green-600 mt-1">↑ 120% dari target</div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-gk-green">
                <div className="flex items-center gap-3 mb-2">
                    <Building className="text-gk-green" />
                    <span className="text-sm font-semibold text-gray-600 uppercase">Izin Terbit</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">4.521</div>
                <div className="text-sm text-gray-500 mt-1">Sepanjang tahun 2023</div>
              </div>
            </div>
          </div>

          {/* Chart Side */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-[400px] pb-[50px]">
             <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Realisasi Investasi (Dalam Miliar Rupiah)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', marginBottom:'10'}}
                />
                <Legend iconType="circle"/>
                <Bar dataKey="target" name="Target" fill="#0760dbff" radius={[4, 4, 0, 0]} /> 94a3b8
                <Bar dataKey="realization" name="Realisasi" fill="#009B4D" radius={[4, 4, 0, 0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;