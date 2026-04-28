import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';
import SEO from './components/SEO';
import DestinationDetail from './pages/DestinationDetail';
import ChatAdmin from './pages/ChatAdmin';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Destinations />
      <Contact />
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination/:country" element={<DestinationDetail />} />
      <Route path="/chat-admin" element={<ChatAdmin />} />
    </Routes>
  );
}

export default App;
