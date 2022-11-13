import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Le Longchamps</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          {/* <Route path="about" element={<Cv />} />
          <Route path="gallery" element={<Projects />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
