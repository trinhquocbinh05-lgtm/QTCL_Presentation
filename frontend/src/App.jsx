import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import GuestPage from './pages/GuestPage';
import AdminDashboard from './pages/AdminDashboard';
import QADashboard from './pages/QADashboard';
import Presentation from './pages/Presentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/qa" element={<QADashboard />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
