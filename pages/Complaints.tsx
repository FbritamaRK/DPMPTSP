import React, { useState } from 'react';
import { Send, Search, CheckCircle, Clock, MessageSquare, User, FileText, Hash } from 'lucide-react';
import { ComplaintTicket } from '../types';
import { Button, Card, CardContent, Badge } from '../components';

// Fix: Removed React.FC to avoid "Cannot find namespace 'React'" error
const Complaints = () => {
  const [activeTab, setActiveTab] = useState('create');
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
  // Fix: Removed <any> generic type argument to satisfy untyped useState
  const [trackResult, setTrackResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Fix: Removed <string | null> generic type argument to satisfy untyped useState
  const [submittedId, setSubmittedId] = useState(null);

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

  // Fix: Replaced React.ChangeEvent with any to avoid "Cannot find namespace 'React'" error
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fix: Replaced React.FormEvent with any to avoid "Cannot find namespace 'React'" error
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

  // Fix: Replaced React.FormEvent with any to avoid "Cannot find namespace 'React'" error
  const handleTrack = (e: any) => {
    e.preventDefault();
    const found = mockDatabase.find(t => t.id === trackId.trim().toUpperCase());
    
    if (found) {
      setTrackResult(found as any);
    } else {
      setTrackResult(null);
      alert('Tiket tidak ditemukan. Coba gunakan ID: ADU-2023-001 untuk demo.');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      <header className="bg-gk-green/90 py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Layanan Pengaduan Masyarakat</h1>
          <p className="text-green-50 text-lg max-w-2xl mx-auto font-medium">
            Sampaikan saran, aspirasi, dan pengaduan Anda untuk pelayanan yang lebih baik. Kami siap menindaklanjuti setiap masukan.
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-20">
        <div role="tablist" className="bg-white rounded-t-xl shadow-sm border-b border-gray-100 flex overflow-hidden">
          <button 
            id="create-tab"
            role="tab"
            aria-selected={activeTab === 'create'}
            aria-controls="create-panel"
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-4 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gk-green focus-visible:outline-none ${
              activeTab === 'create' ? 'bg-white text-gk-green border-t-4 border-gk-green' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <MessageSquare size={18} aria-hidden="true" />
            Buat Pengaduan
          </button>
          <button 
            id="track-tab"
            role="tab"
            aria-selected={activeTab === 'track'}
            aria-controls="track-panel"
            onClick={() => setActiveTab('track')}
            className={`flex-1 py-4 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gk-green focus-visible:outline-none ${
              activeTab === 'track' ? 'bg-white text-gk-green border-t-4 border-gk-green' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <Search size={18} aria-hidden="true" />
            Cek Status
          </button>
        </div>

        <div className="bg-white rounded-b-xl shadow-lg p-6 md:p-10 border border-t-0 border-gray-100 min-h-[400px]">
          
          {submittedId && activeTab === 'create' && (
            <div role="alert" className="mb-8 bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in-down">
              <CheckCircle size={48} className="text-gk-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pengaduan Terkirim!</h3>
              <p className="text-gray-600 mb-6">Laporan Anda telah kami terima. Mohon catat ID Tiket berikut untuk melacak status laporan.</p>
              <div className="bg-white inline-block px-8 py-4 rounded-xl border-2 border-dashed border-gk-green mb-6">
                <span className="block text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">ID Tiket</span>
                <span className="text-2xl font-mono font-bold text-gk-green">{submittedId}</span>
              </div>
              <button 
                onClick={() => setSubmittedId(null)}
                className="block mx-auto text-gk-blue font-bold hover:underline focus-visible:ring-2 focus-visible:ring-gk-blue rounded-sm"
              >
                Buat Pengaduan Baru
              </button>
            </div>
          )}

          {activeTab === 'create' && !submittedId && (
            <div id="create-panel" role="tabpanel" aria-labelledby="create-tab">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <fieldset className="space-y-6">
                    <legend className="text-xl font-bold text-gk-dark flex items-center gap-2 border-b pb-2 w-full">
                       <User size={20} className="text-gk-green" aria-hidden="true" /> Data Diri
                    </legend>
                    
                    <div>
                      <label htmlFor="nik" className="block text-sm font-bold text-gray-700 mb-2">NIK <span className="text-red-600" aria-hidden="true">*</span></label>
                      <input 
                        id="nik"
                        required 
                        name="nik" 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none"
                        placeholder="16 digit NIK"
                        aria-required="true"
                        aria-describedby="nik-help"
                      />
                      <p id="nik-help" className="text-xs text-gray-500 mt-1">Nomor Induk Kependudukan sesuai KTP, terdiri dari 16 digit angka.</p>
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap <span className="text-red-600" aria-hidden="true">*</span></label>
                      <input 
                        id="name"
                        required 
                        name="name" 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none"
                        placeholder="Nama sesuai KTP"
                        aria-required="true"
                        aria-describedby="name-help"
                      />
                      <p id="name-help" className="text-xs text-gray-500 mt-1">Tuliskan nama lengkap sesuai yang tertera pada KTP Anda.</p>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">No. HP / WhatsApp <span className="text-red-600" aria-hidden="true">*</span></label>
                      <input 
                        id="phone"
                        required 
                        name="phone" 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none"
                        placeholder="Contoh: 081234..."
                        aria-required="true"
                        aria-describedby="phone-help"
                      />
                      <p id="phone-help" className="text-xs text-gray-500 mt-1">Nomor aktif yang dapat dihubungi untuk tindak lanjut pengaduan.</p>
                    </div>
                  </fieldset>

                  <fieldset className="space-y-6">
                    <legend className="text-xl font-bold text-gk-dark flex items-center gap-2 border-b pb-2 w-full">
                       <FileText size={20} className="text-gk-green" aria-hidden="true" /> Detail Laporan
                    </legend>

                    <div>
                      <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">Jenis Laporan <span className="text-red-600" aria-hidden="true">*</span></label>
                      <select 
                        id="category"
                        name="category"
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none bg-white"
                        aria-required="true"
                      >
                        <option>Pelayanan Publik</option>
                        <option>Infrastruktur</option>
                        <option>Pungutan Liar</option>
                        <option>Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subjek Laporan <span className="text-red-600" aria-hidden="true">*</span></label>
                      <input 
                        id="subject"
                        required 
                        name="subject" 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none"
                        placeholder="Inti dari laporan Anda"
                        aria-required="true"
                        aria-describedby="subject-help"
                      />
                      <p id="subject-help" className="text-xs text-gray-500 mt-1">Tuliskan inti atau judul singkat dari laporan Anda, maksimal 100 karakter.</p>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Penjelasan Lengkap <span className="text-red-600" aria-hidden="true">*</span></label>
                      <textarea 
                        id="message"
                        required 
                        rows={4}
                        name="message" 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none resize-none"
                        placeholder="Ceritakan kronologi secara lengkap..."
                        aria-required="true"
                        aria-describedby="message-help"
                      />
                      <p id="message-help" className="text-xs text-gray-500 mt-1">Semakin detail laporan Anda, semakin cepat kami dapat menindaklanjutinya.</p>
                    </div>
                  </fieldset>
                </div>

                <div className="pt-6 border-t border-gray-100 text-right">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    variant="primary"
                    className="bg-gk-green hover:bg-green-700 focus-visible:ring-gk-green px-10 py-4 rounded-xl shadow-lg ml-auto"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pengaduan'}
                    <Send size={20} className="ml-2" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'track' && (
            <div id="track-panel" role="tabpanel" aria-labelledby="track-tab">
              <div className="max-w-2xl mx-auto space-y-8">
                <form onSubmit={handleTrack} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <label htmlFor="track-id" className="block text-sm font-bold text-blue-900 mb-4">Masukkan ID Tiket Anda</label>
                  <div className="flex gap-2">
                    <input 
                      id="track-id"
                      type="text" 
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      placeholder="ADU-2023-XXX"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gk-blue outline-none"
                      required
                    />
                    <Button type="submit" variant="primary" className="px-6 py-3 rounded-lg">
                      Lacak
                    </Button>
                  </div>
                </form>

                {trackResult && (
                  <Card className="rounded-2xl">
                    <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Hash size={18} className="text-gray-400" aria-hidden="true" />
                        <span className="font-mono font-bold">{(trackResult as any).id}</span>
                      </div>
                      <Badge variant={(trackResult as any).status === 'Selesai' ? 'success' : 'primary'}>
                        {(trackResult as any).status}
                      </Badge>
                    </div>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase mb-2">Laporan Anda</div>
                        <p className="text-gray-700 bg-gray-50 p-4 rounded-xl">{(trackResult as any).message}</p>
                      </div>
                      {(trackResult as any).reply && (
                        <div>
                          <div className="text-xs font-bold text-gk-blue uppercase mb-2">Tanggapan Petugas</div>
                          <p className="text-gk-dark bg-blue-50 p-4 rounded-xl border border-blue-100 font-medium">
                            {(trackResult as any).reply}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Complaints;