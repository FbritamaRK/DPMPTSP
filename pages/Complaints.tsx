import React, { useState } from 'react';
import { Send, Search, CheckCircle, MessageSquare, User, FileText, Hash, MapPin, Phone, Mail, ChevronDown, ChevronUp, Hourglass, Info, HelpCircle, MessageCircle } from 'lucide-react';
import { ComplaintTicket } from '../types';

const Complaints = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  });
  
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const mockDatabase: ComplaintTicket[] = [
    {
      id: 'ADU-2023-001',
      nik: '1234567890',
      name: 'Budi Santoso',
      phone: '08123456789',
      address: 'Wonosari',
      category: 'Infrastruktur',
      subject: 'Jalan Rusak Depan Kantor',
      message: 'Mohon diperbaiki jalan berlubang di depan kantor pelayanan karena membahayakan.',
      status: 'Selesai',
      reply: 'Terima kasih atas laporannya. Tim teknis sudah melakukan penambalan jalan pada tanggal 10 Oktober 2023.',
      date: '2023-10-01'
    }
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newId = `ADU-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
      setSubmittedId(newId as any);
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleTrack = (e: any) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    
    // For demo purposes, we will just show the result view based on user's input
    setTrackResult(true as any);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <header className="bg-emerald-700 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-4467140e90c8?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Layanan Pengaduan Masyarakat</h1>
          <p className="text-emerald-50 text-lg max-w-2xl mx-auto font-medium">
            Sampaikan saran, aspirasi, dan pengaduan Anda untuk pelayanan yang lebih baik. Kami siap menindaklanjuti setiap masukan.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-10 relative z-20">
        <div role="tablist" className="bg-white rounded-xl shadow-md border border-slate-200 flex overflow-hidden mb-8 max-w-md mx-auto">
          <button 
            id="create-tab"
            role="tab"
            aria-selected={activeTab === 'create'}
            aria-controls="create-panel"
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-4 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
              activeTab === 'create' ? 'bg-emerald-50 text-emerald-700' : 'bg-white text-slate-500 hover:bg-slate-50'
            }`}
          >
            <MessageSquare size={18} aria-hidden="true" />
            Buat Pengaduan
          </button>
          <div className="w-px bg-slate-200"></div>
          <button 
            id="track-tab"
            role="tab"
            aria-selected={activeTab === 'track'}
            aria-controls="track-panel"
            onClick={() => setActiveTab('track')}
            className={`flex-1 py-4 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none ${
              activeTab === 'track' ? 'bg-emerald-50 text-emerald-700' : 'bg-white text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Search size={18} aria-hidden="true" />
            Cek Status
          </button>
        </div>

        <div className="min-h-[400px]">
          
          {submittedId && activeTab === 'create' && (
            <div role="alert" className="mb-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto">
              <CheckCircle size={56} className="text-emerald-500 mx-auto mb-5 drop-shadow-sm" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pengaduan Terkirim!</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">Laporan Anda telah kami terima. Mohon simpan ID Tiket berikut untuk melacak status laporan Anda ke depannya.</p>
              <div className="bg-white inline-block px-10 py-5 rounded-2xl shadow-sm border border-emerald-200 mb-8 w-full max-w-sm">
                <span className="block text-xs text-slate-500 uppercase font-black tracking-widest mb-2">ID Tiket Laporan</span>
                <span className="text-3xl font-mono font-black text-emerald-600 tracking-tight">{submittedId}</span>
              </div>
              <br/>
              <button 
                onClick={() => setSubmittedId(null)}
                className="inline-block mx-auto text-emerald-700 font-bold hover:text-emerald-600 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm underline underline-offset-4"
              >
                Buat Pengaduan Baru
              </button>
            </div>
          )}

          {activeTab === 'create' && !submittedId && (
            <div id="create-panel" role="tabpanel" aria-labelledby="create-tab" className="animate-in fade-in duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Form Col */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-extrabold text-[#0f172a] mb-2">Formulir Pengaduan</h2>
                  <p className="text-[#64748b] text-sm mb-8 text-balance">
                    Lengkapi data di bawah ini untuk mengirimkan laporan atau saran Anda.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-sm font-semibold text-[#334155]">Nama Lengkap</label>
                        <input 
                          id="name" required name="name" 
                          onChange={handleInputChange} value={formData.name}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none transition-all placeholder:text-slate-400 text-sm font-medium text-slate-800"
                          placeholder="Contoh: Budi Santoso"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-sm font-semibold text-[#334155]">Alamat Email</label>
                        <input 
                          id="email" type="email" required name="email" 
                          onChange={handleInputChange} value={formData.email}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none transition-all placeholder:text-slate-400 text-sm font-medium text-slate-800"
                          placeholder="contoh@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#334155]">Nomor Telepon</label>
                        <input 
                          id="phone" required name="phone" 
                          onChange={handleInputChange} value={formData.phone}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none transition-all placeholder:text-slate-400 text-sm font-medium text-slate-800"
                          placeholder="08xx xxxx xxxx"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="category" className="block text-sm font-semibold text-[#334155]">Kategori Layanan</label>
                        <select 
                          id="category" required name="category"
                          onChange={handleInputChange} value={formData.category}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none bg-white transition-all text-sm font-medium text-slate-800"
                        >
                          <option value="" disabled>Pilih Kategori</option>
                          <option value="Pelayanan Publik">Pelayanan Publik</option>
                          <option value="Infrastruktur">Infrastruktur</option>
                          <option value="Pungutan Liar">Pungutan Liar</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#334155]">Subjek Pengaduan</label>
                      <input 
                        id="subject" required name="subject" 
                        onChange={handleInputChange} value={formData.subject}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none transition-all placeholder:text-slate-400 text-sm font-medium text-slate-800"
                        placeholder="Ringkasan singkat perihal laporan"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-sm font-semibold text-[#334155]">Pesan / Laporan Anda</label>
                      <textarea 
                        id="message" required rows={6} name="message" 
                        onChange={handleInputChange} value={formData.message}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none resize-none transition-all placeholder:text-slate-400 text-sm font-medium text-slate-800"
                        placeholder="Ceritakan secara detail kronologi atau saran yang ingin disampaikan..."
                      />
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-[#0f213a] hover:bg-[#1e3a5f] text-white w-full sm:w-auto px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-sm whitespace-nowrap"
                      >
                        {isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}
                        <Send size={16} aria-hidden="true" />
                      </button>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        Data Anda akan dijaga kerahasiaannya sesuai dengan UU KIP yang berlaku.
                      </p>
                    </div>
                  </form>
                </div>

                {/* Right Col */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Kontak Alternatif */}
                  <div className="bg-[#f0f2f5] rounded-2xl border border-slate-100 p-6">
                     <h3 className="text-lg font-bold text-[#1e293b] mb-4">Kontak Alternatif</h3>
                     <div className="space-y-5">
                       <div className="flex gap-4 items-start">
                         <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 shrink-0">
                           <MapPin size={18} />
                         </div>
                         <div>
                           <div className="text-sm font-semibold text-slate-800">Kantor Pusat</div>
                           <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                             Jl. Kyai Legi, Kepek, Wonosari,<br/>Gunung Kidul, DIY 55813
                           </div>
                         </div>
                       </div>
                       <div className="flex gap-4 items-center">
                         <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 shrink-0">
                           <Phone size={18} />
                         </div>
                         <div>
                           <div className="text-sm font-semibold text-slate-800">Telepon / Fax</div>
                           <div className="text-xs text-slate-500 mt-0.5">(0274) 391259</div>
                         </div>
                       </div>
                       <div className="flex gap-4 items-center">
                         <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 shrink-0">
                           <Mail size={18} />
                         </div>
                         <div>
                           <div className="text-sm font-semibold text-slate-800">Email Resmi</div>
                           <div className="text-xs text-slate-500 mt-0.5">dpmptsp@gunungkidulkab.go.id</div>
                         </div>
                       </div>
                     </div>
                     <div className="mt-6 border-t border-slate-200 pt-6">
                       <a href="#" className="w-full bg-[#117646] hover:bg-emerald-800 text-white flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-colors">
                         <MessageSquare size={16} /> WhatsApp Pengaduan
                       </a>
                     </div>
                  </div>

                  {/* Google Maps View */}
                  <div className="bg-[#1f302b] rounded-2xl overflow-hidden relative h-48 border border-slate-200 group flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                      alt="Google Maps" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                    />
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="relative z-10 bg-white text-slate-800 px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-slate-50 transition-colors">
                      Lihat di Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'track' && (
            <div id="track-panel" role="tabpanel" aria-labelledby="track-tab" className="animate-in fade-in duration-500">
              <div className="max-w-3xl mx-auto space-y-10 py-4">
                <form onSubmit={handleTrack} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <label htmlFor="track-id" className="block text-lg font-bold text-slate-900 mb-2 text-center">Lacak Status Tiket Anda</label>
                  <p className="text-sm text-slate-500 text-center mb-6">Masukkan ID tiket yang Anda dapatkan saat membuat pengaduan.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      id="track-id"
                      type="text" 
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      placeholder="Contoh: ADU-2023-XXX"
                      className="flex-1 px-5 py-4 rounded-xl border border-slate-300 focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] outline-none text-center sm:text-left font-mono font-medium placeholder:font-sans text-sm"
                      required
                    />
                    <button type="submit" className="bg-[#0f172a] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 flex justify-center items-center gap-2">
                      <Search size={18} aria-hidden="true" /> Lacak
                    </button>
                  </div>
                </form>

                {trackResult && (
                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col lg:flex-row gap-8 text-left">
                     {/* Left Column - Stepper Result */}
                     <div className="flex-1">
                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-4 border-b border-slate-100 pb-6">
                         <div>
                           <span className="inline-block px-3 py-1 bg-[#86efac] text-emerald-900 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                             Hasil Pencarian
                           </span>
                           <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                             Registrasi #{trackId.toUpperCase() || 'GK-2024-00123'}
                           </h3>
                         </div>
                         <div className="text-left sm:text-right">
                           <div className="text-xs text-slate-500 font-medium tracking-wide">Terakhir Diperbarui</div>
                           <div className="font-bold text-slate-800">14 Oktober 2024, 09:30 WIB</div>
                         </div>
                       </div>

                       {/* Stepper */}
                       <div className="ml-2 mt-4 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#15803d] before:via-[#15803d] before:to-slate-200">
                          <div className="relative flex items-start gap-6 pl-4 before:absolute before:left-0 before:top-2 before:bottom-[-2rem]">
                            <div className="absolute left-[3px] bg-[#15803d] w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white">
                              <CheckCircle size={20} className="text-white" />
                            </div>
                            <div className="pl-12 pt-1 pb-2">
                              <h4 className="text-lg font-bold text-slate-900 mb-1">Permohonan Diterima</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">Dokumen pendaftaran telah berhasil diterima oleh sistem pada 10 Okt 2024.</p>
                            </div>
                          </div>

                          <div className="relative flex items-start gap-6 pl-4 before:absolute before:left-0 before:top-2 before:bottom-[-2rem]">
                            <div className="absolute left-[3px] bg-[#15803d] w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white">
                              <CheckCircle size={20} className="text-white" />
                            </div>
                            <div className="pl-12 pt-1 pb-2">
                              <h4 className="text-lg font-bold text-slate-900 mb-1">Verifikasi Dokumen</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">Tim teknis telah memverifikasi kelengkapan berkas administratif Anda pada 12 Okt 2024.</p>
                            </div>
                          </div>

                          <div className="relative flex items-start gap-6 pl-4 before:absolute before:left-0 before:top-2 before:bottom-[-2rem]">
                            <div className="absolute left-[3px] bg-[#86efac] w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white">
                              <Hourglass size={20} className="text-[#14532d]" />
                            </div>
                            <div className="pl-12 pt-1 pb-4">
                              <h4 className="text-lg font-bold text-[#15803d] mb-1">Dalam Proses Teknis</h4>
                              <p className="text-slate-600 text-sm leading-relaxed mb-3">Saat ini berkas sedang dalam tinjauan lapangan atau penilaian teknis oleh tim terkait.</p>
                              <div className="bg-[#f8fafc] border-l-4 border-[#15803d] px-4 py-3 rounded-r-lg text-sm italic text-slate-500 font-medium">
                                Estimasi penyelesaian: 2-3 hari kerja mendatang.
                              </div>
                            </div>
                          </div>

                          <div className="relative flex items-start gap-6 pl-4">
                            <div className="absolute left-[3px] bg-white border-2 border-slate-300 w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10">
                              <CheckCircle size={20} className="text-slate-300" />
                            </div>
                            <div className="pl-12 pt-1">
                              <h4 className="text-lg font-bold text-slate-400 mb-1">Izin Terbit</h4>
                              <p className="text-slate-400 text-sm leading-relaxed">Sertifikat perizinan akan tersedia untuk diunduh setelah proses teknis selesai.</p>
                            </div>
                          </div>
                       </div>

                       <div className="mt-10 bg-[#1e293b] rounded-2xl p-5 md:p-6 flex gap-4 text-white">
                         <div className="shrink-0 mt-1">
                           <Info size={24} className="text-[#94a3b8]" />
                         </div>
                         <div>
                           <h5 className="font-bold mb-2">Informasi Penting</h5>
                           <p className="text-slate-300 text-sm leading-relaxed">
                             DPMPTSP Kabupaten Gunungkidul berkomitmen pada keterbukaan informasi. Seluruh proses perizinan tidak dipungut biaya tambahan (Gratis) kecuali yang diatur dalam Peraturan Daerah. Jika ada kendala atau permintaan biaya tidak resmi, silakan lapor melalui kanal pengaduan kami.
                           </p>
                         </div>
                       </div>
                     </div>

                     {/* Right Column - Helpers */}
                     <div className="w-full lg:w-80 shrink-0 space-y-6">
                       {/* Card 1 */}
                       <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                         <div className="bg-[#bbf7d0] px-5 py-4 flex items-center gap-2">
                           <HelpCircle size={18} className="text-[#14532d]" />
                           <h4 className="font-bold text-[#14532d] text-sm">Cara Menemukan No. Registrasi</h4>
                         </div>
                         <div className="p-5 bg-white">
                           <div className="bg-slate-100 rounded-lg h-32 mb-5 relative overflow-hidden group">
                              <img 
                                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600" 
                                alt="Tanda Terima" 
                                className="w-full h-full object-cover mix-blend-multiply opacity-50 transition-transform duration-700 group-hover:scale-110" 
                              />
                              <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-xs text-white font-medium leading-tight">Cek bagian kanan atas tanda terima Anda</span>
                              </div>
                           </div>
                           <ol className="text-sm text-slate-600 space-y-3 font-medium">
                             <li className="flex gap-3">
                               <span className="font-bold text-emerald-600 shrink-0">1.</span>
                               Buka email konfirmasi pendaftaran Anda.
                             </li>
                             <li className="flex gap-3">
                               <span className="font-bold text-emerald-600 shrink-0">2.</span>
                               Cari Tanda Terima Permohonan yang diberikan petugas saat pendaftaran offline.
                             </li>
                             <li className="flex gap-3">
                               <span className="font-bold text-emerald-600 shrink-0">3.</span>
                               Nomor dimulai dengan kode wilayah 'GK' diikuti tahun dan nomor urut.
                             </li>
                           </ol>
                         </div>
                       </div>

                       {/* Card 2 */}
                       <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 shadow-sm">
                         <h4 className="font-bold text-slate-800 text-sm mb-3">Nomor Tidak Ditemukan?</h4>
                         <p className="text-sm text-slate-500 leading-relaxed mb-5">
                           Jangan khawatir, tim bantuan kami siap membantu Anda memverifikasi status pengajuan Anda secara manual.
                         </p>
                         <div className="space-y-3">
                           <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group">
                             <div className="w-10 h-10 rounded-full bg-[#dcfce3] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                               <MessageCircle size={18} className="text-[#16a34a]" />
                             </div>
                             <div>
                               <div className="text-xs font-bold text-slate-800">WhatsApp Helpdesk</div>
                               <div className="text-[10px] text-slate-500 mt-0.5">Respon Cepat (08.00-15.00)</div>
                             </div>
                           </a>
                           <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
                             <div className="w-10 h-10 rounded-full bg-[#dbeafe] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                               <Mail size={18} className="text-[#2563eb]" />
                             </div>
                             <div>
                               <div className="text-xs font-bold text-slate-800">Email Layanan</div>
                               <div className="text-[10px] text-slate-500 mt-0.5 max-w-[130px] overflow-hidden text-ellipsis">pelayanan@gunungkidulkab.go.id</div>
                             </div>
                           </a>
                         </div>
                       </div>
                     </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-4">Pertanyaan Sering Diajukan (FAQ)</h2>
            <p className="text-slate-500 font-medium">Temukan jawaban cepat untuk pertanyaan umum sebelum mengirimkan pengaduan.</p>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={openFaq === 1}
              >
                <span className="font-semibold text-slate-800 text-sm">Berapa lama waktu respon untuk setiap pengaduan?</span>
                {openFaq === 1 ? <ChevronUp size={18} className="text-slate-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
              </button>
              {openFaq === 1 && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                  Kami berusaha merespon setiap laporan dalam waktu maksimal 3x24 jam hari kerja untuk tahap verifikasi awal.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={openFaq === 2}
              >
                <span className="font-semibold text-slate-800 text-sm">Apakah identitas pelapor akan tetap dirahasiakan?</span>
                {openFaq === 2 ? <ChevronUp size={18} className="text-slate-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
              </button>
              {openFaq === 2 && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                  Ya, identitas Anda akan dirahasiakan kecuali jika Anda memberikan persetujuan eksplisit untuk membagikannya demi proses investigasi lebih lanjut.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={openFaq === 3}
              >
                <span className="font-semibold text-slate-800 text-sm">Bagaimana cara memantau status tindak lanjut pengaduan saya?</span>
                {openFaq === 3 ? <ChevronUp size={18} className="text-slate-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
              </button>
              {openFaq === 3 && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                  Anda akan mendapatkan ID tiket setelah mengirimkan laporan. Gunakan ID tersebut pada tab "Cek Status" di halaman ini untuk memantau perkembangan tindak lanjut pengaduan Anda.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Complaints;
