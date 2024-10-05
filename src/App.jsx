import { Routes, Route } from 'react-router-dom';

// Main Application Components
import Footer from './components/Footer';
import Nav from './components/Nav';

// Application Pages
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
