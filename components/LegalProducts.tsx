import React, { useState, useEffect } from 'react';
import { Search, FileText, Download, Filter, ChevronRight } from 'lucide-react';
import { LegalDocument } from '../types';

const mockDocuments: LegalDocument[] = [
  {
    id: 1,
    title: "Peraturan Daerah No. 5 Tahun 2020 tentang Penyelenggaraan Perizinan Berusaha",
    category: "Perda",
    year: "2020",
    description: "Pedoman penyelenggaraan perizinan berusaha di Kabupaten Gunungkidul untuk menciptakan iklim investasi yang kondusif.",
    fileSize: "2.5 MB",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Peraturan Bupati No. 12 Tahun 2021 tentang Pendelegasian Wewenang Perizinan",
    category: "Perbup",
    year: "2021",
    description: "Pendelegasian wewenang penyelenggaraan pelayanan perizinan dan non perizinan kepada Kepala DPMPTSP.",
    fileSize: "1.8 MB",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "SOP Pelayanan Perizinan DPMPTSP Tahun 2023",
    category: "SOP",
    year: "2023",
    description: "Standar Operasional Prosedur pelayanan perizinan berusaha dan non berusaha yang berlaku saat ini.",
    fileSize: "5.1 MB",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "UU Cipta Kerja No. 11 Tahun 2020",
    category: "UU",
    year: "2020",
    description: "Undang-Undang tentang Cipta Kerja yang menjadi dasar hukum implementasi OSS RBA.",
    fileSize: "12 MB",
    downloadUrl: "#"
  },
  {
      id: 5,
      title: "Perda Rencana Tata Ruang Wilayah (RTRW) Gunungkidul",
      category: "Perda",
      year: "2010-2030",
      description: "Peraturan Daerah tentang Rencana Tata Ruang Wilayah Kabupaten Gunungkidul Tahun 2010-2030.",
      fileSize: "8.5 MB",
      downloadUrl: "#"
  },
  {
      id: 6,
      title: "Standar Pelayanan Publik DPMPTSP",
      category: "SOP",
      year: "2023",
      description: "Maklumat dan Standar Pelayanan Publik pada Dinas Penanaman Modal dan PTSP.",
      fileSize: "3.2 MB",
      downloadUrl: "#"
  },
  {
      id: 7,
      title: "Peraturan Bupati tentang Inovasi Daerah",
      category: "Perbup",
      year: "2022",
      description: "Pedoman pelaksanaan inovasi daerah dalam rangka peningkatan pelayanan publik.",
      fileSize: "1.5 MB",
      downloadUrl: "#"
  },
  {
      id: 8,
      title: "Perda Retribusi Persetujuan Bangunan Gedung",
      category: "Perda",
      year: "2021",
      description: "Ketentuan mengenai tarif dan tata cara pemungutan retribusi PBG.",
      fileSize: "4.0 MB",
      downloadUrl: "#"
  },
  {
      id: 9,
      title: "Keputusan Kepala Dinas tentang Tim Teknis Perizinan",
      category: "Lainnya",
      year: "2023",
      description: "Pembentukan tim teknis dalam rangka percepatan pelayanan perizinan berusaha.",
      fileSize: "0.8 MB",
      downloadUrl: "#"
  },
  {
      id: 10,
      title: "Peraturan Pemerintah No. 5 Tahun 2021",
      category: "UU",
      year: "2021",
      description: "Penyelenggaraan Perizinan Berusaha Berbasis Risiko (PP turunan UU Cipta Kerja).",
      fileSize: "15 MB",
      downloadUrl: "#"
  },
  {
      id: 11,
      title: "SOP Penanganan Pengaduan Masyarakat",
      category: "SOP",
      year: "2022",
      description: "Mekanisme dan tata cara penanganan pengaduan masyarakat terkait layanan perizinan.",
      fileSize: "2.1 MB",
      downloadUrl: "#"
  },
  {
      id: 12,
      title: "Perda Rencana Induk Pembangunan Kepariwisataan",
      category: "Perda",
      year: "2015-2025",
      description: "Masterplan pembangunan pariwisata daerah Kabupaten Gunungkidul.",
      fileSize: "10.5 MB",
      downloadUrl: "#"
  }
];

const categories = ["Semua", "Perda", "Perbup", "UU", "SOP", "Lainnya"];

const LegalProducts: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredDocs = mockDocuments.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              doc.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Semua" || doc.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* Page Header */}
            <div className="bg-gk-blue py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Produk Hukum & Regulasi</h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Akses dan unduh berbagai dokumen hukum, peraturan daerah, serta standar operasional prosedur yang berlaku di Kabupaten Gunungkidul.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
                {/* Search & Filter Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Search */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cari Dokumen</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input 
                                    type="text" 
                                    placeholder="Kata kunci: Perda, Izin, Bangunan..." 
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gk-green focus:border-transparent bg-slate-50"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        {/* Category Filter */}
                        <div className="md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Filter Kategori</label>
                            <div className="relative">
                                <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
                                <select 
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gk-green bg-slate-50 appearance-none"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-3 pointer-events-none">
                                    <ChevronRight className="rotate-90 text-gray-400" size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Quick Filters */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {categories.filter(c => c !== 'Semua').map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                                    selectedCategory === cat 
                                    ? 'bg-gk-green text-white border-gk-green' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                         {selectedCategory !== 'Semua' && (
                            <button onClick={() => setSelectedCategory('Semua')} className="text-xs text-gk-red hover:underline ml-2">
                                Reset Filter
                            </button>
                        )}
                    </div>
                </div>

                {/* Results Info */}
                <div className="mb-6 text-gray-600 flex justify-between items-center">
                    <span>Menampilkan <strong>{filteredDocs.length}</strong> dokumen</span>
                    {searchTerm && <span className="text-sm">Hasil pencarian untuk "{searchTerm}"</span>}
                </div>

                {/* Documents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDocs.length > 0 ? (
                        filteredDocs.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gk-blue/20 transition-all flex flex-col sm:flex-row gap-5 items-start group">
                                <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${
                                    doc.category === 'Perda' ? 'bg-red-50 text-red-600' :
                                    doc.category === 'Perbup' ? 'bg-blue-50 text-blue-600' :
                                    doc.category === 'UU' ? 'bg-yellow-50 text-yellow-600' :
                                    'bg-green-50 text-green-600'
                                }`}>
                                    <FileText size={28} />
                                </div>
                                
                                <div className="flex-1 w-full">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                            doc.category === 'Perda' ? 'bg-red-100 text-red-700' :
                                            doc.category === 'Perbup' ? 'bg-blue-100 text-blue-700' :
                                            doc.category === 'UU' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                            {doc.category}
                                        </span>
                                        <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">Tahun {doc.year}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 leading-snug text-lg group-hover:text-gk-blue transition-colors">{doc.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doc.description}</p>
                                    
                                    <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto w-full">
                                        <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded border border-gray-100">{doc.fileSize}</span>
                                        <button 
                                            onClick={() => alert(`Mengunduh dokumen: ${doc.title}`)}
                                            className="flex items-center gap-1.5 text-sm font-semibold text-white bg-gk-blue hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors shadow-sm"
                                        >
                                            <Download size={16} /> Unduh
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-white rounded-xl border border-dashed border-gray-300">
                             <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                                <Search size={40} />
                             </div>
                            <h3 className="text-xl font-bold text-gray-900">Dokumen tidak ditemukan</h3>
                            <p className="text-gray-500 mt-2 max-w-md mx-auto">Maaf, kami tidak dapat menemukan dokumen yang sesuai dengan kriteria pencarian Anda.</p>
                            <button 
                                onClick={() => {setSearchTerm(''); setSelectedCategory('Semua');}}
                                className="mt-6 text-gk-blue font-semibold hover:underline"
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LegalProducts;