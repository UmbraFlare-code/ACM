import heroData from '../../../data/hero.json';
import './Hero.css';

const Hero = () => {
  const { title, subtitle, date, buttons } = heroData;
  
  const handleNavigateToGames = () => {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
      gamesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavigateToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
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
          {buttons.map((button, index) => (
            <button 
              key={index} 
              className={`btn btn-${button.type}`}
              onClick={button.type === 'primary' ? handleNavigateToGames : handleNavigateToAbout}
              aria-label={button.text}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;