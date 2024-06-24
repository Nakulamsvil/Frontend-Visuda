import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserTable from './UserTable';
import DaftarPermintaanSurat from './DaftarPermintaanSurat';
import SuratPengantarRT from './components/SuratPengantarRT';
import SuratKeteranganUsaha from './components/SuratKeteranganUsaha';
import Trash from './Trash';

function App() {
  return (
    <Router>
      <Navbar style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }} />
      <Sidebar />
      <div style={{ paddingTop: '60px' }}> {/* Adjust padding-top as needed */}
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/daftar-permintaan" element={<DaftarPermintaanSurat />} />
          <Route path="/surat-pengantar-rt" element={<SuratPengantarRT />} />
          <Route path="/surat-keterangan-usaha" element={<SuratKeteranganUsaha />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
