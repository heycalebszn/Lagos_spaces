import { StrictMode } from 
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Marketplace from "./pages/Marketplace";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './compoents/Navbar.tsx';
import Footer from './compoents/Footer.tsx';
import FindAccomodations from './pages/FindAccomodations.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/listing" element={<FindAccomodations />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
