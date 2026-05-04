import React, { useState } from 'react';
import { Send, Search, MessageSquare, MapPin, Phone, Mail, UploadCloud, Info, CheckCircle2, Hourglass, HelpCircle, ChevronDown, ChevronUp, AlertCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Complaints = () => {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  
  const [trackId, setTrackId] = useState('');
  const [ticketResult, setTicketResult] = useState<any>(null);
  const [isCheckingTicket, setIsCheckingTicket] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'buat' | 'cek'>('buat');

  const faqs = [
    { question: 'Berapa lama waktu respon untuk setiap pengaduan?', answer: 'Kami berusaha merespon setiap laporan dalam waktu maksimal 3x24 jam hari kerja untuk tahap verifikasi awal.' },
    { question: 'Apakah identitas pelapor akan tetap dirahasiakan?', answer: 'Ya, kami menjamin kerahasiaan identitas pelapor untuk pengaduan dengan kategori tertentu sesuai dengan Undang-Undang Perlindungan Data Pribadi.' },
    { question: 'Bagaimana cara memantau status tindak lanjut pengaduan saya?', answer: 'Anda dapat menggunakan nomor tiket pengaduan yang diberikan saat pelaporan dan memasukkannya pada kolom "Lacak Status Tiket Anda" di halaman ini.' }
  ];

  const handleFillExample = () => {
    setFormData({
      name: 'Budi Santoso',
      nik: '3403012345678901',
      email: 'budi.santoso@email.com',
      phone: '081234567890',
      category: 'Pelayanan Publik',
      message: 'Pelayanan di loket A sangat lambat pada hari Senin pagi. Mohon untuk dipercepat antreannya dan ditambah petugas loketnya.',
    });
    setErrors({});
  };

  const handleCheckTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    setIsCheckingTicket(true);
    setTicketResult(null);

    // Simulate API call
    setTimeout(() => {
      setIsCheckingTicket(false);
      setTicketResult({
        ticketNo: trackId.toUpperCase(),
        date: '15 April 2026',
        status: 'Sedang Diproses',
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
    if (!formData.nik.trim() || formData.nik.length !== 16 || !/^\d+$/.test(formData.nik)) {
      newErrors.nik = 'NIK wajib diisi dengan 16 digit angka';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email aktif yang valid wajib diisi';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Nomor telepon/WA wajib diisi';
    if (!formData.category.trim()) newErrors.category = 'Kategori layanan wajib dipilih';
    if (!formData.message.trim()) newErrors.message = 'Isi pengaduan wajib diisi';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitSuccess(false); // Reset success state if resubmitting quickly
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTicketNumber(`ADU-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`);
      setFormData({ name: '', nik: '', email: '', phone: '', category: '', message: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#1e3a5f] relative overflow-hidden">
        {/* Subtle background abstract shapes overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none flex justify-end">
          <svg viewBox="0 0 400 400" className="h-full object-cover">
            <polygon points="200,0 400,0 400,400 100,400" fill="#ffffff" opacity="0.1" />
            <polygon points="250,0 400,0 400,400 0,400" fill="#ffffff" opacity="0.1" />
            <line x1="150" y1="0" x2="100" y2="400" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
            <line x1="200" y1="0" x2="150" y2="400" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-sm tracking-wide uppercase">
              <MessageSquare size={18} />
              <span>Layanan Pengaduan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Pengaduan & Saran
            </h1>
            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-2xl font-medium">
              Kami berkomitmen untuk terus meningkatkan kualitas pelayanan publik di Kabupaten Gunungkidul. Sampaikan aspirasi, kritik, maupun keluhan Anda secara resmi di sini.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="-mt-8 relative z-20 mb-8 px-4">
        <div className="flex bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm max-w-2xl mx-auto">
          <button 
            type="button"
            onClick={() => setActiveTab('buat')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-colors ${activeTab === 'buat' ? 'bg-[#0EA5E9]/10 text-[#1a1a1a]' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
          >
            <MessageSquare size={18} className={activeTab === 'buat' ? 'text-[#1a1a1a]' : 'text-slate-400'} />
            Buat Pengaduan
          </button>
          <div className="w-[1px] bg-slate-200"></div>
          <button 
            type="button"
            onClick={() => setActiveTab('cek')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-colors ${activeTab === 'cek' ? 'bg-[#0EA5E9]/10 text-[#1a1a1a]' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
          >
            <Search size={18} className={activeTab === 'cek' ? 'text-[#1a1a1a ]' : 'text-slate-400'} />
            Cek Status
          </button>
        </div>
      </div>

      {activeTab === 'buat' ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Form Area */}
          <div className="w-full lg:w-2/3">
            
            {/* Target Alert for successful submission, announced to screen readers immediately */}
            {submitSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert" 
                aria-live="assertive" 
                className="mb-8 bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                <div className="bg-[#bbf7d0] text-[#16a34a] p-3 rounded-full shrink-0">
                   <MessageSquare size={24} aria-hidden="true" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[#16a34a] font-bold text-lg mb-1">Pengaduan Berhasil Terkirim!</h3>
                  <p className="text-[#374151] mb-2">Terima kasih atas laporan Anda. Nomor tiket pengaduan diproses.</p>
                  <p className="sr-only">Nomor tiket Anda adalah {ticketNumber}</p>
                  <div className="inline-block bg-white border border-[#bbf7d0] px-4 py-2 rounded-lg text-xl font-bold text-[#1a1a1a] tracking-widest mt-1" aria-hidden="true">
                    {ticketNumber}
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="bg-white/90 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm" noValidate>
              <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a1a1a]/10 p-3.5 rounded-xl text-[#1a1a1a]">
                    <MessageSquare size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a1a1a]">Formulir Aspirasi</h2>
                    <p className="text-sm text-[#1a1a1a]/60 font-medium">Lengkapi data di bawah untuk mengirim pengaduan</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleFillExample}
                  className="inline-flex items-center justify-center text-xs font-bold text-[#1A1A1A] bg-white px-4 py-2 rounded-lg border border-[#DC2626] hover:bg-[#FEF2F2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 whitespace-nowrap"
                >
                  Gunakan Data Contoh
                </button>
              </div>

              <div className="space-y-6">

                {/* GROUP 1: DATA PRIBADI */}
                <fieldset className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                  <legend className="text-sm font-black text-slate-800 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    Data Pribadi Pelapor
                  </legend>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama Lengkap */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                      Nama Lengkap <span aria-hidden="true" className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      id="name"
                      name="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      onChange={handleInputChange}
                      value={formData.name}
                      className={`w-full px-4 py-3.5 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-slate-300 focus:ring-[#1e3a5f] bg-white'} focus:ring-2 outline-none transition-all placeholder:text-slate-400 font-medium`}
                      placeholder="Masukkan nama sesuai KTP"
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs font-semibold mt-1.5">{errors.name}</p>}
                  </div>

                  {/* NIK */}
                  <div>
                    <label htmlFor="nik" className="block text-sm font-bold text-slate-700 mb-2">
                      Nomor Identitas (NIK) <span aria-hidden="true" className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      id="nik"
                      name="nik"
                      aria-required="true"
                      aria-invalid={!!errors.nik}
                      aria-describedby={`nik-help ${errors.nik ? 'nik-error' : ''}`.trim()}
                      onChange={handleInputChange}
                      value={formData.nik}
                      className={`w-full px-4 py-3.5 rounded-lg border ${errors.nik ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-slate-300 focus:ring-[#1e3a5f] bg-white'} focus:ring-2 outline-none transition-all placeholder:text-slate-400 font-medium`}
                      placeholder="16 Digit NIK"
                    />
                    {/* ARIA helper text */}
                    <p id="nik-help" className="text-slate-500 text-xs mt-1.5 font-medium">Nomor Induk Kependudukan sesuai KTP</p>
                    {errors.nik && <p id="nik-error" className="text-red-500 text-xs font-semibold mt-1.5">{errors.nik}</p>}
                  </div>
                </div>
                </fieldset>

               <fieldset className="border border-slate-200 rounded-xl p-6 bg-slate-50/50">
                <legend className="text-sm font-black text-slate-800 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  Informasi Kontak Aktif
                </legend> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Aktif */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                      Email Aktif <span aria-hidden="true" className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      onChange={handleInputChange}
                      value={formData.email}
                      className={`w-full px-4 py-3.5 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-slate-300 focus:ring-[#1e3a5f] bg-white'} focus:ring-2 outline-none transition-all placeholder:text-slate-400 font-medium`}
                      placeholder="contoh@mail.com"
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-xs font-semibold mt-1.5">{errors.email}</p>}
                  </div>

                  {/* Nomor Telepon */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                      Nomor Telepon/WA <span aria-hidden="true" className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      id="phone"
                      name="phone"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      onChange={handleInputChange}
                      value={formData.phone}
                      className={`w-full px-4 py-3.5 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-slate-300 focus:ring-[#1e3a5f] bg-white'} focus:ring-2 outline-none transition-all placeholder:text-slate-400 font-medium`}
                      placeholder="08xx xxxx xxxx"
                    />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs font-semibold mt-1.5">{errors.phone}</p>}
                  </div>
                </div>
                </fieldset>

                {/* Kategori Layanan */}
                <div>
                  <label htmlFor="category" className="block text-sm font-bold text-slate-700 mb-2">
                    Kategori Layanan <span aria-hidden="true" className="text-red-500 ml-1">*</span>
                  </label>
                  <select 
                    id="category"
                    name="category"
                    aria-required="true"
                    aria-invalid={!!errors.category}
                    aria-describedby={errors.category ? 'category-error' : undefined}
                    onChange={handleInputChange}
                    value={formData.category}
                    className={`w-full px-4 py-3.5 rounded-lg border ${errors.category ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-slate-300 focus:ring-[#1e3a5f] bg-white'} focus:ring-2 outline-none transition-all text-slate-700 font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[position:right_1rem_center] bg-no-repeat`}
                  >
                    <option value="" disabled>Pilih Kategori</option>
                    <option value="Pelayanan Publik">Pelayanan Publik</option>
                    <option value="Infrastruktur">Infrastruktur</option>
                    <option value="Perizinan">Perizinan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  {errors.category && <p id="category-error" className="text-red-500 text-xs font-semibold mt-1.5">{errors.category}</p>}
                </div>

                {/* Isi Pengaduan / Saran */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                    Isi Pengaduan / Saran <span aria-hidden="true" className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={`message-help ${errors.message ? 'message-error' : ''}`.trim()}
                    onChange={handleInputChange}
                    value={formData.message}
                    className={`w-full px-4 py-3.5 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-slate-300 focus:ring-[#1e3a5f] bg-white'} focus:ring-2 outline-none transition-all placeholder:text-slate-400 font-medium resize-none`}
                    placeholder="Ceritakan detail keluhan atau saran Anda secara rinci..."
                  />
                  {/* ARIA helper text */}
                  <p id="message-help" className="text-slate-500 text-xs mt-1.5 font-medium">Semakin detail laporan Anda, semakin cepat kami dapat menindaklanjutinya</p>
                  {errors.message && <p id="message-error" className="text-red-500 text-xs font-semibold mt-1.5">{errors.message}</p>}
                </div>

                {/* Lampiran Pendukung */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Lampiran Pendukung (Opsional)
                  </label>
                  
                  <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl p-8 text-center hover:bg-slate-100 transition-colors cursor-pointer flex flex-col items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                      <UploadCloud className="text-slate-500" size={24} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold text-slate-700 mb-1">Klik untuk unggah atau drag & drop</span>
                    <span className="text-xs text-slate-500 font-medium">PNG, JPG, PDF (Maks. 5MB)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#111827] hover:bg-[#1E40AF] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  >
                    {isSubmitting ? 'Mengirim...' : (
                      <>
                        <Send size={18} aria-hidden="true" />
                        Kirim Pengaduan Sekarang
                      </>
                    )}
                  </button>
                </div>

              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
              {/* Saluran Lain Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-800 mb-5">Kontak DPMPTSP</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors">
                  <div className="bg-[#1A1A1A]/10 text-[#1A1A1A] p-2.5 rounded-full shrink-0">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 mb-0.5">Call Center</p>
                    <p className="text-xs text-slate-500 font-medium">(0274) 391194</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors">
                  <div className="bg-[#166534]/10 text-[#16A34A] p-2.5 rounded-full shrink-0">
                    <MessageSquare size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 mb-0.5">WhatsApp Messenger</p>
                    <p className="text-xs text-slate-500 font-medium">0812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-colors">
                  <div className="bg-[#0EA5E9]/10 text-[#1E40AF] p-2.5 rounded-full shrink-0">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 mb-0.5">Email Resmi</p>
                    <p className="text-xs text-slate-500 font-medium">dpmptsp@gunungkidulkab.go.id</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Penting Info */}
            <div className="bg-[#FEF3C7]/60 border-l-4 border-[#FFCA28] rounded-r-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <Info size={20} className="text-[#B45309]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-Black text-sm mb-1.5">Penting</h4>
                  <p className="text-black text-xs font-medium leading-relaxed">
                    Setiap pengaduan akan diverifikasi dalam waktu maksimal <span className="font-bold">2x24 jam kerja</span>. Pastikan data yang Anda berikan valid untuk mempermudah koordinasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-[#1e3b30] rounded-2xl overflow-hidden relative shadow-sm border border-emerald-900/40">
              {/* Fake Map Background */}
              <div className="absolute inset-0 opacity-50">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover mix-blend-overlay" alt="" aria-hidden="true" />
                 <div className="absolute inset-0 bg-[#0f172a] mix-blend-color"></div>
                 <div className="absolute inset-0 bg-[#34d399] mix-blend-overlay"></div>
              </div>
              <div className="relative z-10 pt-32 pb-4 px-4">
                 <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-3 shadow-lg border border-white/50">
                    <div className="bg-slate-100 w-10 h-10 p-2 rounded-lg shrink-0 flex items-center justify-center text-[#16a34a]">
                      <MapPin size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">Kantor DPMPTSP</h5>
                      <p className="text-slate-500 text-[11px] mt-0.5 font-medium">Jl. Brigjen Katamso No.1, Wonosari</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Lacak Status Tiket Anda</h2>
          <p className="text-sm text-[#1a1a1a]/60 font-medium mb-6">Masukkan ID tiket yang Anda dapatkan saat membuat pengaduan.</p>
          <form onSubmit={handleCheckTicket} className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <input 
              type="text"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              placeholder="ADU-2023-001"
              className="flex-1 w-full border border-slate-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0f172a] text-slate-900 font-medium disabled:opacity-50"
              aria-label='Lacak Status Tiket Anda'
              disabled={isCheckingTicket}
            />
            <button 
              type="submit" 
              disabled={!trackId.trim() || isCheckingTicket}
              className="bg-[#0f172a] hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Search size={18} />
              Lacak
            </button>
          </form>
          <div className="mt-3">
            <p className="text-xs text-black font-medium">Contoh: <button type="button" onClick={() => setTrackId('ADU-2024-8899')} className="text-[#DC2626] hover:underline">ADU-2024-8899</button></p>
          </div>
        </div>

        {/* Tracking Result Card */}
        {ticketResult && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 border-b border-slate-100 pb-6 gap-4">
              <div>
                <span className="bg-[#ECFDF5] text-[#047857] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-3">Hasil Pencarian</span>
                <h3 className="text-3xl font-black text-slate-900">Registrasi<br className="hidden md:block"/>#{ticketResult.ticketNo}</h3>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs text-slate-500 font-medium">Terakhir Diperbarui</p>
                <p className="text-sm font-bold text-slate-800">14 Oktober 2024,<br className="hidden md:block"/>09:30 WIB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Timeline Column */}
              <div className="lg:col-span-7">
                <div className="space-y-0 relative">
                  
                  {/* Step 1 */}
                  <div className="flex gap-5 relative">
                    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-[#16a34a]"></div>
                    <div className="w-8 h-8 rounded-full bg-[#16a34a] text-white flex shrink-0 items-center justify-center relative z-10 shadow-sm">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-slate-900 text-base mb-1.5">Permohonan Diterima</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Dokumen pendaftaran telah berhasil diterima oleh sistem pada 10 Okt 2024.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-5 relative">
                    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-[#16a34a]"></div>
                    <div className="w-8 h-8 rounded-full bg-[#16a34a] text-white flex shrink-0 items-center justify-center relative z-10 shadow-sm">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-slate-900 text-base mb-1.5">Verifikasi Dokumen</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Tim teknis telah memverifikasi kelengkapan berkas administratif Anda pada 12 Okt 2024.</p>
                    </div>
                  </div>

                  {/* Step 3 (Current) */}
                  <div className="flex gap-5 relative">
                    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-slate-200"></div>
                    <div className="w-8 h-8 rounded-full bg-[#dcfce3] border-2 border-[#16a34a] text-[#16a34a] flex shrink-0 items-center justify-center relative z-10 shadow-sm">
                      <Hourglass size={14} strokeWidth={2.5} />
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-[#047857] text-base mb-1.5">Dalam Proses Teknis</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium mb-3">Saat ini berkas sedang dalam tinjauan lapangan atau penilaian teknis oleh tim terkait.</p>
                      <div className="bg-slate-50 border-l-2 border-slate-300 p-3 italic text-xs text-slate-600 font-medium rounded-r-lg">
                        Estimasi penyelesaian: 2-3 hari kerja mendatang.
                      </div>
                    </div>
                  </div>

                  {/* Step 4 (Pending) */}
                  <div className="flex gap-5 relative">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-300 flex shrink-0 items-center justify-center relative z-10">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <div className="pb-2">
                      <h4 className="font-bold text-slate-400 text-base mb-1.5">Izin Terbit</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">Sertifikat perizinan akan tersedia untuk diunduh setelah proses teknis selesai.</p>
                    </div>
                  </div>

                </div>

                {/* Info Penting Box inside Left Column */}
                <div className="mt-10 bg-[#FEF3C7]/60 rounded-xl p-6 text-[#1A1A1A] shadow-md flex gap-4 items-start">
                  <Info className="text-[#B45309] shrink-0 mt-0.5" size={20} />
                  <div>
                     <h5 className="font-bold text-sm mb-2">Informasi Penting</h5>
                     <p className="text-[#1A1A1A] text-xs leading-relaxed font-medium">
                       DPMPTSP Kabupaten Gunungkidul berkomitmen pada keterbukaan informasi. Seluruh proses perizinan tidak dipungut biaya tambahan (Gratis) kecuali yang diatur dalam Peraturan Daerah. Jika ada kendala atau permintaan biaya tidak resmi, silakan lapor melalui kanal pengaduan kami.
                     </p>
                  </div>
                </div>
              </div>

              {/* Helpers Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Registration Info Guide */}
                <div className="border border-[#bbf7d0] rounded-xl overflow-hidden bg-[#ECFDF5] shadow-sm">
                  <div className="bg-[#bbf7d0] px-4 py-3 flex items-center gap-2">
                    <HelpCircle size={16} className="text-[#16a34a]" />
                    <h5 className="font-bold text-[#1A1A1A] text-xs uppercase tracking-wide">Cara Menemukan No. Registrasi</h5>
                  </div>
                  <div className="p-5">
                    <div className="w-full h-32 bg-slate-200 rounded-lg mb-4 relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Document example" />
                       <div className="absolute inset-0 bg-black/50 flex items-end p-3"><p className="text-white text-xs font-bold">Cek bagian kanan atas tanda terima Anda</p></div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <span className="text-[#047857] font-bold text-sm">1.</span>
                        <p className="text-sm text-[#047857] font-medium leading-tight">Buka email konfirmasi pendaftaran Anda.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#047857] font-bold text-sm">2.</span>
                        <p className="text-sm text-[#047857] font-medium leading-tight">Cari Tanda Terima Permohonan yang diberikan petugas saat pendaftaran offline.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#047857] font-bold text-sm">3.</span>
                        <p className="text-sm text-[#047857] font-medium leading-tight">Nomor dimulai dengan kode wilayah 'GK' diikuti tahun dan nomor urut.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Not Found Helpers */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h5 className="font-bold text-slate-800 text-sm mb-2">Nomor Tidak Ditemukan?</h5>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-4">
                    Jangan khawatir, tim bantuan kami siap membantu Anda memverifikasi status pengajuan Anda secara manual.
                  </p>
                  <div className="space-y-3">
                    <button type="button" className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-[#bbf7d0] hover:bg-[#f0fdf4] transition-colors text-left group">
                      <div className="bg-[#dcfce3] text-[#16a34a] p-2 rounded-full group-hover:scale-110 transition-transform">
                        <MessageSquare size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">WhatsApp Helpdesk</p>
                        <p className="text-[10px] text-slate-500">Respon Cepat (08.00-15.00)</p>
                      </div>
                    </button>
                    <button type="button" className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors text-left group">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Email Layanan</p>
                        <p className="text-[10px] text-slate-500">pelayanan@gunungkidulkab.go.id</p>
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
        </div>
      )}

      {/* FAQ Section */}
      <div className="bg-slate-100 py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Pertanyaan Sering Diajukan (FAQ)</h2>
            <p className="text-black/80 font-medium">Temukan jawaban cepat untuk pertanyaan umum sebelum mengirimkan pengaduan.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:bg-slate-50"
                >
                  <span className="font-bold text-sm text-slate-800">{faq.question}</span>
                  {faqOpen === idx ? (
                    <ChevronUp className="text-slate-400 shrink-0" size={18} />
                  ) : (
                    <ChevronDown className="text-slate-400 shrink-0" size={18} />
                  )}
                </button>
                <AnimatePresence>
                  {faqOpen === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-50 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
