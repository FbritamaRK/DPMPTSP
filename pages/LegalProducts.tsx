import React, { useState, useEffect } from 'react';
import { Search, FileText, Download, Filter, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { LegalDocument } from '../types';
import { Button, Card, Badge } from '../components';

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

const categories = ["Semua Produk Hukum", "Peraturan Daerah", "Peraturan Bupati", "Keputusan Kepala Dinas", "Instruksi Bupati"];

// Function to map our categories back to data categories if needed
const categoryMap: Record<string, string[]> = {
  "Semua Produk Hukum": ["Semua"],
  "Peraturan Daerah": ["Perda"],
  "Peraturan Bupati": ["Perbup"],
  "Keputusan Kepala Dinas": ["SOP", "Lainnya"],
  "Instruksi Bupati": []
};

// Fix: Removed React.FC to avoid "Cannot find namespace 'React'" error
const LegalProducts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua Produk Hukum");
    const [selectedYear, setSelectedYear] = useState("Semua Tahun");

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredDocs = mockDocuments.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              doc.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        let matchesCategory = true;
        if (selectedCategory !== "Semua Produk Hukum") {
           const allowed = categoryMap[selectedCategory] || [];
           matchesCategory = allowed.includes(doc.category);
        }

        let matchesYear = true;
        if (selectedYear !== "Semua Tahun") {
           // Basic check if the year string contains the selected year
           matchesYear = doc.year.includes(selectedYear);
        }

        return matchesSearch && matchesCategory && matchesYear;
    });

    const handleChangeCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                {/* Page Header */}
                <div className="mb-2">
                    <h1 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">Produk Hukum</h1>
                    <p className="text-slate-500 max-w-2xl text-[15px] leading-relaxed">
                        Akses koleksi peraturan daerah, keputusan bupati, dan dokumen hukum lainnya untuk mendukung transparansi tata kelola perizinan dan investasi di Kabupaten Gunungkidul.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start text-left">
                    {/* Sidebar Desktop */}
                    <div className="w-full lg:w-72 shrink-0 space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                            <h3 className="font-bold text-slate-800 text-base mb-5">Filter Kategori</h3>
                            <div className="space-y-4">
                                {categories.map((cat) => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedCategory === cat}
                                                onChange={() => handleChangeCategory(cat)}
                                                className="w-4 h-4 rounded border-slate-300 text-[#0f172a] focus:ring-[#0f172a] transition-colors appearance-none peer checked:bg-[#15803d] checked:border-[#15803d]"
                                            />
                                            {selectedCategory === cat && (
                                                <svg className="absolute w-3 h-3 text-white pointer-events-none" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )}
                                        </div>
                                        <span className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                                            {cat}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <h4 className="text-xs font-bold text-slate-800 mb-3">Tahun Penerbitan</h4>
                                <div className="relative">
                                    <select 
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-10 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 appearance-none font-medium"
                                    >
                                        <option value="Semua Tahun">Semua Tahun</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronRight size={16} className="text-slate-400 rotate-90" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Banner Card */}
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 group shadow-md">
                            <img 
                                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" 
                                alt="Gavel Bantuan Hukum" 
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="text-[#86efac] font-bold text-xs mb-2">Bantuan Hukum</span>
                                <h4 className="text-white font-bold text-lg leading-snug mb-5">
                                    Butuh bantuan interpretasi hukum?
                                </h4>
                                <a href="#" className="inline-flex items-center gap-2 text-sm text-white font-bold hover:text-[#86efac] transition-colors w-fit">
                                    Hubungi Kami <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 w-full min-w-0 space-y-6">
                        {/* Search */}
                        <div className="relative shadow-sm rounded-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input 
                                type="text" 
                                placeholder="Cari judul, nomor, atau kata kunci peraturan..." 
                                className="w-full pl-11 pr-24 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0f172a] focus:border-[#0f172a] bg-white text-sm font-medium placeholder:text-slate-400" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#0f172a] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors">
                                Cari
                            </button>
                        </div>

                        {/* Results Info */}
                        <div className="pt-2 text-gray-500 flex justify-between items-center text-sm font-medium">
                            <span>Menampilkan <strong>{filteredDocs.length}</strong> dokumen</span>
                        </div>

                        {/* Documents Grid - Keeping the existing card layout requested by the user */}
                        <div className="grid grid-cols-1 gap-4">
                            {filteredDocs.length > 0 ? (
                                filteredDocs.map((doc) => (
                                    <Card key={doc.id} hoverable className="p-6 flex flex-col sm:flex-row gap-5 items-start group">
                                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${
                                            doc.category === 'Perda' ? 'bg-red-50 text-red-600' :
                                            doc.category === 'Perbup' ? 'bg-blue-50 text-blue-600' :
                                            doc.category === 'UU' ? 'bg-yellow-50 text-yellow-600' :
                                            'bg-green-50 text-green-600'
                                        }`}>
                                            <FileText size={28} aria-hidden="true" />
                                        </div>
                                        
                                        <div className="flex-1 w-full">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge variant={
                                                    doc.category === 'Perda' ? 'danger' :
                                                    doc.category === 'Perbup' ? 'primary' :
                                                    doc.category === 'UU' ? 'warning' :
                                                    'success'
                                                }>
                                                    {doc.category}
                                                </Badge>
                                                <span className="text-xs text-black font-medium bg-gray-100 px-2 py-0.5 rounded">Tahun {doc.year}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2 leading-snug text-lg group-hover:text-gk-blue transition-colors">{doc.title}</h3>
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doc.description}</p>
                                            
                                            <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto w-full">
                                                <span className="text-xs text-black font-medium bg-gray-50 px-2 py-1 rounded border border-gray-100">{doc.fileSize}</span>
                                                <Button 
                                                    size="sm"
                                                    onClick={() => alert(`Mengunduh dokumen: ${doc.title}`)}
                                                    aria-label={`Unduh ${doc.title} (PDF, ${doc.fileSize})`}
                                                >
                                                    <Download size={16} className="mr-1.5" aria-hidden="true" /> Unduh
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center bg-white rounded-xl border border-dashed border-gray-300">
                                     <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                                        <Search size={40} aria-hidden="true" />
                                     </div>
                                    <h3 className="text-xl font-bold text-gray-900">Dokumen tidak ditemukan</h3>
                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">Maaf, kami tidak dapat menemukan dokumen yang sesuai dengan kriteria pencarian Anda.</p>
                                    <button 
                                        onClick={() => {setSearchTerm(''); setSelectedCategory('Semua Produk Hukum'); setSelectedYear('Semua Tahun');}}
                                        className="mt-6 text-gk-blue font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-gk-blue rounded-sm"
                                    >
                                        Reset Pencarian
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        {/* Pagination Footer */}
                        {filteredDocs.length > 0 && (
                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end text-xs text-slate-500 font-medium pt-8 pb-4 gap-4">
                                <span className="opacity-0 hidden sm:block">Menampilkan {filteredDocs.length} dari 156 dokumen</span>
                                <div className="flex gap-1.5 self-center sm:self-end">
                                    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded bg-[#0f172a] text-white font-bold shadow-sm">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors">2</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors">3</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalProducts;
