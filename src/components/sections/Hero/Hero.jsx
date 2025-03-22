import { useEffect } from 'react';
import heroData from '../../../data/hero.json';
import { scrollToSection } from '../../common/uiActions';
import { initHeroAnimation } from '../../../utils/scrollAnimation';
import './Hero.css';

const Hero = () => {
  const { title, subtitle, date, buttons } = heroData;
  
  useEffect(() => {
    initHeroAnimation();
  }, []);

  const renderButtons = () => {
    const visionButton = buttons.find(btn => btn.text === 'Nuestra Visión');
    const otherButtons = buttons.filter(btn => btn.text !== 'Nuestra Visión');

    return (
      <>
        {visionButton && (
          <button 
            className={`btn btn-${visionButton.type} vision-button`}
            onClick={() => scrollToSection('about')}
            aria-label={visionButton.text}
          >
            {visionButton.text}
          </button>
        )}
        <div className="secondary-buttons">
          {otherButtons.map((button, index) => {
            const targetSection = button.text === 'Eventos' ? 'events' : 'proyectos';
            return (
              <button 
                key={index} 
                className={`btn btn-${button.type}`}
                onClick={() => scrollToSection(targetSection)}
                aria-label={button.text}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <section id="home" className="hero" aria-label="Sección principal">
      <div className="hero-content">
        <h1 className="hero-title" aria-label="Título del evento">{title}</h1>
        <p className="hero-subtitle" aria-label="Subtítulo del evento">{subtitle}</p>
        <div className="hero-date-container">
          <div className="hero-date" aria-label="Fecha del evento">
            <span className="date-label">Urquizo Oré Francis Maxuel</span>
          </div>
        </div>
        <div className="hero-cta" aria-label="Botones de acción">
          {renderButtons()}
        </div>
      </div>
    </section>
  );
};

export default Hero;