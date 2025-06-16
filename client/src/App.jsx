import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery'; 
import Community from './pages/Community';
import Resources from './pages/Resources';
import Signup from './components/Signup'; // Ensure you import Signup
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Header />

      {/* Signup should be on a separate route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Signup />} /> {/* Add signup route */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;