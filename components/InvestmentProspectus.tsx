import React, { useEffect } from 'react';
import { TrendingUp, DollarSign, Download, MapPin, ExternalLink, FileBarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../data';

const InvestmentProspectus: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Header Section */}
      <div className="bg-gk-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <span className="inline-block bg-gk-yellow/20 text-gk-yellow px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Investor Relations</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Prospektus Investasi <br/><span className="text-gk-yellow">Gunungkidul</span></h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Data komprehensif peluang investasi strategis di Kabupaten Gunungkidul. Analisis kelayakan finansial yang transparan untuk mendukung keputusan investasi Anda.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-gk-dark px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition shadow-xl">
                <Download size={20} /> Unduh Katalog PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12">
          {mockProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row group transition-all duration-500 hover:shadow-2xl">
              
              {/* Image Section */}
              <div className="lg:w-1/3 relative overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[300px]"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                    project.status === 'Ready to Offer' ? 'bg-green-500 text-white' :
                    project.status === 'Strategic' ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Data Section */}
              <div className="lg:w-2/3 p-8 md:p-10 flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-gk-green font-semibold mb-1">
                      <MapPin size={16} />
                      <span className="text-sm uppercase tracking-wider">{project.location}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gk-dark group-hover:text-gk-green transition-colors">{project.name}</h2>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block font-medium uppercase mb-1">Total Nilai Investasi</span>
                    <span className="text-2xl font-bold text-gk-blue">{project.totalInvestment}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Biaya Investasi */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <DollarSign size={16} /> Alokasi Biaya
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600 text-sm">Investasi Tanah</span>
                        <span className="font-bold text-gray-900 text-sm">{project.landCost}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">Pekerjaan Sipil</span>
                        <span className="font-bold text-gray-900 text-sm">{project.civilWorkCost}</span>
                      </div>
                    </div>
                  </div>

                  {/* Analisis Finansial */}
                  <div className="bg-gk-blue/5 p-6 rounded-xl border border-gk-blue/10">
                    <h3 className="text-sm font-bold text-gk-blue/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <TrendingUp size={16} /> Indikator Kelayakan
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 uppercase">NPV</span>
                        <span className="text-base font-bold text-gk-blue">{project.npv}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 uppercase">IRR</span>
                        <span className="text-base font-bold text-gk-blue">{project.irr}</span>
                      </div>
                      <div className="flex items-center justify-center">
                         <FileBarChart size={24} className="text-gk-green opacity-40" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <button className="flex-1 bg-gk-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-gk-green/20">
                    <ExternalLink size={18} /> Ajukan LoI
                  </button>
                  <button 
                    onClick={() => navigate(`/prospektus/${project.id}`)}
                    className="px-6 py-3 rounded-lg font-bold border-2 border-gk-blue text-gk-blue hover:bg-gk-blue hover:text-white transition"
                  >
                    Detail Proyek
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 bg-gk-blue text-white p-10 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Membutuhkan Data Spesifik?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10">
            Tim fasilitasi investasi kami siap menyediakan data analisis khusus (Custom Investment Study) sesuai dengan rencana bisnis Anda.
          </p>
          <button className="bg-gk-yellow text-gk-dark px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl relative z-10">
            Hubungi Account Manager Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentProspectus;