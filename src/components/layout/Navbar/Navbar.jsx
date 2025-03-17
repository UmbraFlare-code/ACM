import { useState, useEffect } from 'react';
import { FaGamepad, FaTrophy, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Navegación principal">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/acm-logo.webp" alt="Logo de ACM" className="acm-logo" />
          <span>Gaming fest ACM</span>
        </div>
        
        <div className="navbar-links">
          <a href="#home" className="navbar-link" aria-label="Ir a inicio" onClick={(e) => scrollToSection('home', e)}>
            <FaGamepad /> Inicio
          </a>
          <a href="#games" className="navbar-link" aria-label="Ver juegos" onClick={(e) => scrollToSection('games', e)}>
            <FaGamepad /> Eventos
          </a>
          <a href="#schedule" className="navbar-link" aria-label="Ver cronograma" onClick={(e) => scrollToSection('schedule', e)}>
            <FaCalendarAlt /> Cronograma
          </a>
          <a href="#prizes" className="navbar-link" aria-label="Ver premios" onClick={(e) => scrollToSection('prizes', e)}>
            <FaTrophy /> Premios
          </a>
          <a href="#about" className="navbar-link" aria-label="Sobre nosotros" onClick={(e) => scrollToSection('about', e)}>
            <FaInfoCircle /> Nosotros
          </a>
        </div>
        
        <button className="btn btn-primary navbar-cta" aria-label="Registrarse ahora">
          Registrarse
        </button>
      </div>
    </nav>
  );
};

export default Navbar;