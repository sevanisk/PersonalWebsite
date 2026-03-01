import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Service from './pages/Service';
import Qualifications from './pages/Qualifications';
import Portfolio from './pages/Portfolio';
import CompSci from './pages/CompSci';
import Actuary from './pages/Actuary';
import ContactMe from './pages/ContactMe';

// Where I am setting up my router and top level logic.
// 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/service" element={<Service />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/compsci" element={<CompSci />} />
        <Route path="/actuary" element={<Actuary />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}


export default App
