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

import BackgroundLayout from './layouts/BackgroundLayout';
import { PopupProvider } from './context/PopupContext';

// Setting up my router.
// Basically a directory of each page and the path to get there.
function App() {
  return (
    <Router>
      <PopupProvider>
        <Routes>
          <Route element={<BackgroundLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/service" element={<Service />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/compsci" element={<CompSci />} />
            <Route path="/actuary" element={<Actuary />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Route>
        </Routes>
      </PopupProvider>
    </Router>
  );
}

export default App
