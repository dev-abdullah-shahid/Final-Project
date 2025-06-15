// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery'; // Ensure this file exists
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;