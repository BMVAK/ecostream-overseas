import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  id: string;
  country: string;
  flag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 'home',
      country: '',
      flag: '',
      title: 'Your Gateway to Global Education',
      subtitle: 'Live | Study | Succeed',
      description: 'Ecostream Overseas - Your trusted study abroad consultancy helping students achieve their dreams',
      image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      id: 'usa',
      country: 'USA',
      flag: '🇺🇸',
      title: 'Study in the United States',
      subtitle: 'Dream | Achieve | Excel',
      description: 'World-class universities, cutting-edge research, and endless opportunities await you',
      image: 'https://images.pexels.com/photos/2344/abstract-architect-architectural-design-architecture.jpg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      flag: '🇬🇧',
      title: 'Study in the United Kingdom',
      subtitle: 'Heritage | Excellence | Innovation',
      description: 'Experience prestigious universities with centuries of academic excellence and tradition',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      id: 'australia',
      country: 'Australia',
      flag: '🇦🇺',
      title: 'Study in Australia',
      subtitle: 'Explore | Learn | Thrive',
      description: 'High-quality education, beautiful campuses, and a vibrant multicultural lifestyle',
      image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      id: 'canada',
      country: 'Canada',
      flag: '🇨🇦',
      title: 'Study in Canada',
      subtitle: 'Opportunity | Diversity | Quality',
      description: 'Affordable education, welcoming culture, and pathways to permanent residency',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      id: 'germany',
      country: 'Germany',
      flag: '🇩🇪',
      title: 'Study in Germany',
      subtitle: 'Innovation | Engineering | Research',
      description: 'World-renowned technical education, low tuition fees, and industrial excellence',
      image: 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSlideClick = () => {
    if (slides[currentSlide].id !== 'home') {
      navigate(`/destination/${slides[currentSlide].id}`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${slide.image})` }}
            onClick={handleSlideClick}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          </div>
        </div>
      ))}

      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto ${slides[currentSlide].id !== 'home' ? 'cursor-pointer' : ''}`} onClick={handleSlideClick}>
        {slides[currentSlide].flag && (
          <div className="text-6xl md:text-8xl mb-4 animate-fade-in">
            {slides[currentSlide].flag}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-3xl text-white/90 mb-4 font-light tracking-wide">
          {slides[currentSlide].subtitle}
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {slides[currentSlide].id === 'home' ? (
            <a
              href="#consultation"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get Started
            </a>
          ) : (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSlideClick();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore {slides[currentSlide].country}
              </button>
              <a
                href="#consultation"
                onClick={(e) => e.stopPropagation()}
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Book Consultation
              </a>
            </>
          )}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
