import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ClickSpark from './components/ui/ClickSpark';
import FestivalBackground from './components/ui/FestivalBackground'; // Import the new background
import Home from './pages/Home';
import Sports from './pages/Sports';
import Cultural from './pages/Cultural';
import Teams from './pages/Teams';
import About from './pages/About';
import EventDetails from './pages/EventDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen relative overflow-hidden selection:bg-brand-orange/30">
          <FestivalBackground /> {/* Added Festival Themed Background */}
          <ClickSpark />
          <Navbar />
          <main className="flex-grow z-10 relative"> {/* Ensure content is above background */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/cultural" element={<Cultural />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
