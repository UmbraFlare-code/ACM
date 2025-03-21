import heroData from '../../../data/hero.json';
import { scrollToSection } from '../../common/uiActions';
import './Hero.css';

const Hero = () => {
  const { title, subtitle, date, buttons } = heroData;
  
  return (
    <section id="home" className="hero" aria-label="Sección principal">
      <div className="hero-content">
        <h1 className="hero-title" aria-label="Título del evento">
          {title}
        </h1>
        <p className="hero-subtitle" aria-label="Subtítulo del evento">
          {subtitle}
        </p>
        <div className="hero-date" aria-label="Fecha del evento">
          {date}
        </div>
        <div className="hero-cta" aria-label="Botones de acción">
          {buttons.map((button, index) => {
            // Determine target section based on button text
            let targetSection = '';
            if (button.text === 'Eventos') targetSection = 'events';
            if (button.text === 'Proyectos') targetSection = 'proyectos';
            if (button.text === 'Nuestra Visión') targetSection = 'about';
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
      </div>
    </section>
  );
};

export default Hero;