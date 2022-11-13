import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './nav';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Le Longchamps</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="cv" element={<Cv />} />
          <Route path="projets" element={<Projects />} /> */}
        </Routes>
      </div>
    </Router>
    // <div className="intro">
    //   <h1 className="title">Le Longchamps</h1>
    //   navbarre
    //   <img className="verres" src={verres} alt="verres" />
    // </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="cv" element={<Cv />} />
//           <Route path="projets" element={<Projects />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
