
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, TrendingUp, DollarSign, Clock, ShieldCheck, Download, ExternalLink, Info, CheckCircle, Zap, Droplets, HardHat, ChevronLeft, ChevronRight, FileText, Phone } from 'lucide-react';
import { mockProjects } from '../data';
import { InvestmentProject } from '../types';
import { Button, Card, CardContent, CardHeader, Badge } from '../components';

// Fix: Removed React.FC to avoid "Cannot find namespace 'React'" error
const ProjectDetail = () => {
  // Fix: useParams does not support generic type argument in the current mock environment
  const { id } = useParams();
  const navigate = useNavigate();
  // Fix: removed type argument to satisfy untyped useState mock
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = mockProjects.find(p => p.id === Number(id));
    if (found) {
      setProject(found as any);
    }
  }, [id]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % (project as any).images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + (project as any).images.length) % (project as any).images.length);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyek tidak ditemukan</h2>
        <button onClick={() => navigate('/prospektus')} className="bg-gk-green text-white px-6 py-2 rounded-lg font-bold">
          Kembali ke Prospektus
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-gk-green focus-visible:ring-2 focus-visible:ring-gk-blue rounded-sm">Beranda</Link></li>
              <li><ChevronRightIcon size={14} aria-hidden="true" /></li>
              <li><Link to="/prospektus" className="hover:text-gk-green focus-visible:ring-2 focus-visible:ring-gk-blue rounded-sm">Prospektus</Link></li>
              <li><ChevronRightIcon size={14} aria-hidden="true" /></li>
              <li className="text-gk-green font-medium truncate max-w-[200px]">{(project as any).name}</li>
            </ol>
          </nav>
          
          <Button 
            onClick={() => navigate('/prospektus')}
            variant="ghost"
            className="flex items-center gap-2 text-gk-blue font-bold hover:text-blue-800 transition mb-6 px-0 hover:bg-transparent"
          >
            <ArrowLeft size={18} aria-hidden="true" /> Kembali ke Daftar
          </Button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <Badge 
                variant={(project as any).status === 'Ready to Offer' ? 'success' : (project as any).status === 'Strategic' ? 'primary' : 'warning'}
                className="mb-4"
              >
                {(project as any).status}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{(project as any).name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin size={18} className="text-gk-green" aria-hidden="true" />
                <span className="text-lg">{(project as any).location}</span>
              </div>
            </div>
            <div className="bg-gk-blue text-white p-6 rounded-2xl shadow-lg w-full md:w-auto min-w-[280px]">
              <div className="text-blue-100 text-xs uppercase font-bold tracking-widest mb-1">Estimasi Investasi</div>
              <div className="text-3xl font-bold mb-4">{(project as any).totalInvestment}</div>
              <Button 
                variant="primary" 
                className="w-full bg-gk-yellow text-gk-dark hover:bg-yellow-500 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition shadow-md"
              >
                <ExternalLink size={18} aria-hidden="true" /> Ajukan Peminatan (LoI)
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Image Carousel */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200 group">
              <div 
                className="w-full h-full flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {((project as any).images || []).map((img: string, idx: number) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`${(project as any).name} view ${idx + 1}`} 
                    className="w-full h-full object-cover shrink-0" 
                  />
                ))}
              </div>
              
              {/* Carousel Controls */}
              {((project as any).images || []).length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/50 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-gk-blue"
                    aria-label="Gambar sebelumnya"
                  >
                    <ChevronLeft size={24} aria-hidden="true" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/50 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-gk-blue"
                    aria-label="Gambar selanjutnya"
                  >
                    <ChevronRight size={24} aria-hidden="true" />
                  </button>
                  
                  {/* Dots Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {(project as any).images.map((_: any, idx: number) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-gk-blue focus-visible:ring-offset-1 ${currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/50'}`}
                        aria-label={`Pilih gambar ${idx + 1}`}
                        aria-current={currentImageIndex === idx ? 'true' : 'false'}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Info className="text-gk-blue" aria-hidden="true" /> Gambaran Umum Proyek
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {(project as any).description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                     <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="text-gk-green" size={20} aria-hidden="true" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900">Legalitas Lahan</h4>
                        <p className="text-sm text-gray-600">Sertifikat Hak Pakai / Hak Pengelolaan (HPL) Pemkab.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-3">
                     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="text-gk-blue" size={20} aria-hidden="true" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900">Skema Kerja Sama</h4>
                        <p className="text-sm text-gray-600">BGS (Bangun Guna Serah) atau Kerja Sama Pemanfaatan.</p>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Detail Section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="text-gk-green" aria-hidden="true" /> Analisis Kelayakan Finansial
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'NPV (Net Present Value)', value: (project as any).npv, icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'IRR (Int. Rate of Return)', value: (project as any).irr, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                  { label: 'Economic IRR (EIRR)', value: (project as any).eirr, icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { label: 'Payback Period', value: (project as any).paybackPeriod, icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
                  { label: 'DSCR (Debt Service)', value: (project as any).dscr, icon: ShieldCheck, color: 'text-red-600', bg: 'bg-red-50' },
                  { label: 'Total CapEx', value: (project as any).totalInvestment, icon: DollarSign, color: 'text-slate-600', bg: 'bg-slate-50' },
                ].map((item, i) => (
                  <Card key={i} className="border-gray-100 shadow-sm">
                    <CardContent className="p-6">
                      <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                        <item.icon size={20} aria-hidden="true" />
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-xl font-bold text-gray-900">{item.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Infrastructure Section */}
            <section className="bg-gk-dark text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gk-blue/10 rounded-full -mr-32 -mt-32"></div>
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 relative z-10">
                 <HardHat aria-hidden="true" /> Infrastruktur & Sarana Penunjang
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="space-y-4">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gk-yellow">
                        <Zap aria-hidden="true" />
                     </div>
                     <h4 className="font-bold">Ketenagalistrikan</h4>
                     <p className="text-gray-400 text-sm">Tersedia jaringan PLN tegangan menengah dengan kapasitas cadangan yang mencukupi.</p>
                  </div>
                  <div className="space-y-4">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gk-blue">
                        <Droplets aria-hidden="true" />
                     </div>
                     <h4 className="font-bold">Air Bersih</h4>
                     <p className="text-gray-400 text-sm">Koneksi pipa PDAM utama dan izin pemanfaatan air tanah/sumur dalam tersedia.</p>
                  </div>
                  <div className="space-y-4">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gk-green">
                        <MapPin aria-hidden="true" />
                     </div>
                     <h4 className="font-bold">Aksesibilitas</h4>
                     <p className="text-gray-400 text-sm">Akses jalan provinsi lebar 7m dengan perkerasan aspal hotmix kondisi prima.</p>
                  </div>
               </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Download Documents */}
            <Card className="border-gray-100 shadow-sm">
               <CardContent className="p-6">
                 <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                   <Download size={20} className="text-gk-green" aria-hidden="true" /> Dokumen Penunjang
                 </h3>
                 <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gk-green hover:bg-green-50 transition group text-left focus-visible:ring-2 focus-visible:ring-gk-green focus-visible:outline-none">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-50 text-red-600 rounded flex items-center justify-center group-hover:scale-110 transition">
                             <FileText size={20} aria-hidden="true" />
                          </div>
                          <div>
                             <div className="text-sm font-bold text-gray-900">Pre-Feasibility Study</div>
                             <div className="text-xs text-gray-500">PDF • 12.5 MB</div>
                          </div>
                       </div>
                       <Download size={18} className="text-gray-400" aria-hidden="true" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gk-green hover:bg-green-50 transition group text-left focus-visible:ring-2 focus-visible:ring-gk-green focus-visible:outline-none">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded flex items-center justify-center group-hover:scale-110 transition">
                             <MapPin size={20} aria-hidden="true" />
                          </div>
                          <div>
                             <div className="text-sm font-bold text-gray-900">Site Plan & Layout</div>
                             <div className="text-xs text-gray-500">JPG • 4.2 MB</div>
                          </div>
                       </div>
                       <Download size={18} className="text-gray-400" aria-hidden="true" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gk-green hover:bg-green-50 transition group text-left focus-visible:ring-2 focus-visible:ring-gk-green focus-visible:outline-none">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded flex items-center justify-center group-hover:scale-110 transition">
                             <Info size={20} aria-hidden="true" />
                          </div>
                          <div>
                             <div className="text-sm font-bold text-gray-900">Peraturan Zonasi</div>
                             <div className="text-xs text-gray-500">PDF • 1.8 MB</div>
                          </div>
                       </div>
                       <Download size={18} className="text-gray-400" aria-hidden="true" />
                    </button>
                 </div>
               </CardContent>
            </Card>

            {/* Incentives Card */}
            <Card className="bg-green-50 border-green-100">
               <CardContent className="p-6">
                 <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                   <ShieldCheck size={20} aria-hidden="true" /> Fasilitas Insentif
                 </h3>
                 <ul className="space-y-3">
                    <li className="flex gap-2 text-sm text-green-800">
                      <div className="w-1.5 h-1.5 bg-gk-green rounded-full mt-1.5 shrink-0"></div>
                      <span>Pengurangan pajak daerah & retribusi perizinan tertentu.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-green-800">
                      <div className="w-1.5 h-1.5 bg-gk-green rounded-full mt-1.5 shrink-0"></div>
                      <span>Layanan prioritas percepatan perizinan (Fast Track).</span>
                    </li>
                    <li className="flex gap-2 text-sm text-green-800">
                      <div className="w-1.5 h-1.5 bg-gk-green rounded-full mt-1.5 shrink-0"></div>
                      <span>Bantuan fasilitasi penyelesaian kendala di lapangan.</span>
                    </li>
                 </ul>
               </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="border-gray-100 shadow-sm text-center">
               <CardContent className="p-6">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-gk-blue" aria-hidden="true" />
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">Butuh Penjelasan Lebih Lanjut?</h3>
                 <p className="text-gray-600 text-sm mb-6">Konsultasikan minat investasi Anda dengan Account Manager kami secara gratis.</p>
                 <Button variant="primary" className="w-full py-3 rounded-lg">
                    Hubungi Account Manager
                 </Button>
               </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

// Internal sub-component for breadcrumb icon
// Fix: Removed React.FC to avoid "Cannot find namespace 'React'" error
const ChevronRightIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
);

export default ProjectDetail;
