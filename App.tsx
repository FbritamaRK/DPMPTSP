
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.tsx';
import Home from './pages/Home.tsx';
import LegalProducts from './pages/LegalProducts.tsx';
import Complaints from './pages/Complaints.tsx';
import InvestmentProspectus from './pages/InvestmentProspectus.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import Footer from './pages/Footer.tsx';
import Profil from './pages/Profile.tsx';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk-hukum" element={<LegalProducts />} />
            <Route path="/pengaduan" element={<Complaints />} />
            <Route path="/prospektus" element={<InvestmentProspectus />} />
            <Route path="/prospektus/:id" element={<ProjectDetail />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </main>
        <Footer />
        
        <button 
          className="fixed bottom-6 right-6 bg-gk-green hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110 z-40 group flex items-center gap-2 focus-visible:ring-4 focus-visible:ring-gk-blue focus-visible:outline-none"
          aria-label="Butuh Bantuan?"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium pr-0 group-hover:pr-2">
            Butuh Bantuan?
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
