import React, { useState } from 'react';
import { Send, Search, AlertCircle, CheckCircle, Clock, MessageSquare, User, MapPin, Phone, FileText, Hash } from 'lucide-react';
import { ComplaintTicket } from '../types';

const Complaints: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'track'>('create');
  const [formData, setFormData] = useState({
    category: 'Pelayanan Publik',
    nik: '',
    name: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });
  
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState<ComplaintTicket | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Mock database for tracking demo
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newId = `ADU-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
      setSubmittedId(newId);
      setIsSubmitting(false);
      setFormData({
        category: 'Pelayanan Publik',
        nik: '',
        name: '',
        phone: '',
        address: '',
        subject: '',
        message: ''
      });
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, fetch from API. Here we assume the user might search for the mock one or the one they just created (conceptually)
    // For demo, we only show the mock one or a "Not Found" state
    const found = mockDatabase.find(t => t.id === trackId);
    
    if (found) {
      setTrackResult(found);
    } else if (trackId === submittedId) {
      // If searching for the one just submitted in this session (dummy logic)
      setTrackResult({
        id: submittedId,
        ...formData, // Note: formData is cleared, so this is just for logic flow demo
        status: 'Terkirim',
        date: new Date().toISOString().split('T')[0],
        nik: 'xxxxxxxx', // Privacy
        name: 'Pengguna Baru',
        phone: '08xxxx',
        address: 'Gunungkidul',
        category: 'Baru',
        subject: 'Pengaduan Baru',
        message: 'Pengaduan anda sedang dalam antrian verifikasi admin.',
        reply: undefined
      } as ComplaintTicket);
    } else {
      setTrackResult(null);
      alert('Tiket tidak ditemukan. Coba gunakan ID: ADU-2023-001 untuk demo.');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gk-green py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Layanan Pengaduan Masyarakat</h1>
          <p className="text-green-50 text-lg max-w-2xl mx-auto">
            Sampaikan saran, aspirasi, dan pengaduan Anda untuk pelayanan Gunungkidul yang lebih baik. Kami siap mendengar dan menindaklanjuti.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-20">
        
        {/* Tabs */}
        <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-100 flex overflow-hidden">
          <button 
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-4 text-center font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'create' ? 'bg-white text-gk-green border-t-2 border-gk-green' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            <MessageSquare size={18} />
            Buat Pengaduan
          </button>
          <button 
            onClick={() => setActiveTab('track')}
            className={`flex-1 py-4 text-center font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'track' ? 'bg-white text-gk-green border-t-2 border-gk-green' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Search size={18} />
            Cek Status & Balasan
          </button>
        </div>

        <div className="bg-white rounded-b-xl shadow-lg p-6 md:p-10 border border-t-0 border-gray-100">
          
          {/* SUCCESS MESSAGE */}
          {submittedId && activeTab === 'create' && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in-down">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pengaduan Terkirim!</h3>
              <p className="text-gray-600 mb-4">
                Terima kasih telah menghubungi kami. Laporan Anda telah kami terima dan akan segera diproses.
              </p>
              <div className="bg-white inline-block px-6 py-3 rounded-lg border border-dashed border-green-300">
                <span className="block text-xs text-gray-500 uppercase tracking-wide">ID Tiket Anda</span>
                <span className="text-xl font-mono font-bold text-gk-green">{submittedId}</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">Simpan ID Tiket ini untuk mengecek status dan balasan pada tab "Cek Status".</p>
              <button 
                onClick={() => setSubmittedId(null)}
                className="mt-6 text-gk-green font-semibold hover:underline"
              >
                Buat Pengaduan Lain
              </button>
            </div>
          )}

          {/* CREATE FORM */}
          {activeTab === 'create' && !submittedId && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Kolom Kiri - Data Diri */}
                <div className="space-y-6">
                   <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                      <User size={18} className="text-gk-green" /> Data Pelapor
                   </h3>
                   
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">NIK (Nomor Induk Kependudukan) <span className="text-red-500">*</span></label>
                      <input 
                        required 
                        type="number" 
                        name="nik" 
                        value={formData.nik}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition"
                        placeholder="16 digit NIK"
                      />
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
                      <input 
                        required 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition"
                        placeholder="Sesuai KTP"
                      />
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Handphone/WA <span className="text-red-500">*</span></label>
                      <input 
                        required 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition"
                        placeholder="Contoh: 08123456789"
                      />
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Domisili <span className="text-red-500">*</span></label>
                      <input 
                        required 
                        type="text" 
                        name="address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition"
                        placeholder="Nama Jalan, RT/RW, Kalurahan, Kapanewon"
                      />
                   </div>
                </div>

                {/* Kolom Kanan - Detail Pengaduan */}
                <div className="space-y-6">
                   <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                      <FileText size={18} className="text-gk-green" /> Detail Pengaduan
                   </h3>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Pengaduan <span className="text-red-500">*</span></label>
                      <select 
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="Pelayanan Publik">Pelayanan Publik</option>
                        <option value="Infrastruktur">Infrastruktur & Sarana</option>
                        <option value="Pungutan Liar">Dugaan Pungli / Gratifikasi</option>
                        <option value="Perizinan">Kendala Perizinan (OSS/SIMBG)</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subjek / Masalah Pokok <span className="text-red-500">*</span></label>
                      <input 
                        required 
                        type="text" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition"
                        placeholder="Contoh: Pelayanan lambat di loket..."
                      />
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pesan / Penjelasan Lengkap <span className="text-red-500">*</span></label>
                      <textarea 
                        required 
                        rows={5}
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-green focus:border-transparent outline-none transition resize-none"
                        placeholder="Jelaskan kronologi, lokasi, dan detail masalah secara rinci..."
                      />
                   </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-500 italic">* Identitas pelapor dijaga kerahasiaannya.</span>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gk-green hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pengaduan'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </div>
            </form>
          )}

          {/* TRACKING VIEW */}
          {activeTab === 'track' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 text-center">
                 <h3 className="text-lg font-semibold text-blue-900 mb-2">Cek Status Laporan Anda</h3>
                 <p className="text-blue-700 text-sm mb-6">Masukkan ID Tiket yang Anda dapatkan saat mengirim pengaduan untuk melihat respon petugas.</p>
                 
                 <form onSubmit={handleTrack} className="flex gap-2 max-w-md mx-auto">
                    <input 
                      type="text" 
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      placeholder="Masukkan ID Tiket (Contoh: ADU-2023-001)"
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gk-green"
                    />
                    <button type="submit" className="bg-gk-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                      Lacak
                    </button>
                 </form>
              </div>

              {trackResult && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-fade-in-down">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Hash size={18} className="text-gray-400" />
                      <span className="font-mono font-bold text-gray-700">{trackResult.id}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      trackResult.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                      trackResult.status === 'Diproses' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {trackResult.status}
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* User Complaint */}
                    <div className="flex gap-4">
                       <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                          <User size={20} className="text-gray-500" />
                       </div>
                       <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-900">{trackResult.name}</span>
                            <span className="text-xs text-gray-500">• {trackResult.date}</span>
                          </div>
                          <div className="text-sm text-gk-green font-medium mb-2">{trackResult.category} - {trackResult.subject}</div>
                          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg rounded-tl-none">{trackResult.message}</p>
                       </div>
                    </div>

                    {/* Admin Reply */}
                    {trackResult.reply ? (
                       <div className="flex gap-4 flex-row-reverse">
                          <div className="w-10 h-10 rounded-full bg-gk-blue flex items-center justify-center shrink-0">
                             <div className="w-6 h-6 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/2/29/Lambang_Kabupaten_Gunungkidul.png)' }}></div>
                          </div>
                          <div className="flex-1 text-right">
                             <div className="flex items-center gap-2 mb-1 justify-end">
                               <span className="font-bold text-gk-blue">Admin DPMPTSP</span>
                               <span className="text-xs text-gray-500">• {trackResult.date}</span>
                             </div>
                             <p className="text-gray-700 bg-blue-50 border border-blue-100 p-4 rounded-lg rounded-tr-none text-left inline-block">
                               {trackResult.reply}
                             </p>
                          </div>
                       </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-gray-400 py-4 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                        <Clock size={18} />
                        <span className="text-sm">Menunggu balasan dari petugas...</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Complaints;