import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide0 from '../components/Slide0';
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';
import Slide4 from '../components/Slide4';
import Slide5 from '../components/Slide5';
import Slide6 from '../components/Slide6';
import Slide7 from '../components/Slide7';
import Slide8 from '../components/Slide8';
import Slide9 from '../components/Slide9';
import Slide10 from '../components/Slide10';
import Slide11 from '../components/Slide11';
import Slide12 from '../components/Slide12';
import Slide13 from '../components/Slide13';
import Slide14 from '../components/Slide14';
import Slide15 from '../components/Slide15';
import Slide16 from '../components/Slide16';
import Slide17 from '../components/Slide17';

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNav, setActiveNav] = useState(null); // 'left' or 'right'
  const totalSlides = 21; // Updated for Slide 6, 8, 15 multi-step

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
        showNavFlash('right');
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        showNavFlash('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const showNavFlash = (direction) => {
    setActiveNav(direction);
    setTimeout(() => {
      setActiveNav(null);
    }, 1000);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
    showNavFlash('right');
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    showNavFlash('left');
  };

  return (
    <div className="presentation-container">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && <Slide0 key="slide0" />}
        {currentSlide === 1 && <Slide1 key="slide1" />}
        {currentSlide === 2 && <Slide2 key="slide2" />}
        {currentSlide === 3 && <Slide3 key="slide3" />}
        {currentSlide === 4 && <Slide4 key="slide4" />}
        {currentSlide === 5 && <Slide5 key="slide5" />}
        {(currentSlide === 6 || currentSlide === 7) && <Slide6 key="slide6" isAnimated={currentSlide === 7} />}
        {currentSlide === 8 && <Slide7 key="slide7" />}
        {(currentSlide === 9 || currentSlide === 10) && <Slide8 key="slide8" isAnimated={currentSlide === 10} />}
        {currentSlide === 11 && <Slide9 key="slide9" />}
        {currentSlide === 12 && <Slide10 key="slide10" />}
        {currentSlide === 13 && <Slide11 key="slide11" />}
        {currentSlide === 14 && <Slide12 key="slide12" />}
        {currentSlide === 15 && <Slide13 key="slide13" />}
        {currentSlide === 16 && <Slide14 key="slide14" />}
        {(currentSlide >= 17 && currentSlide <= 19) && <Slide15 key="slide15" step={currentSlide - 16} />}
        {currentSlide === 20 && <Slide16 key="slide16" />}
        {currentSlide === 21 && <Slide17 key="slide17" />}
      </AnimatePresence>
      
      {/* Navigation Controls */}
      <div 
        className="nav-hitbox nav-hitbox-left" 
        onClick={currentSlide !== 0 ? handlePrev : undefined}
      >
        <button 
          className={`nav-button-edge ${currentSlide === 0 ? 'disabled' : ''} ${activeNav === 'left' ? 'flash-active' : ''}`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={40} />
        </button>
      </div>
      
      <div 
        className="nav-hitbox nav-hitbox-right" 
        onClick={currentSlide !== totalSlides ? handleNext : undefined}
      >
        <button 
          className={`nav-button-edge ${currentSlide === totalSlides ? 'disabled' : ''} ${activeNav === 'right' ? 'flash-active' : ''}`}
          disabled={currentSlide === totalSlides}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Presentation;
