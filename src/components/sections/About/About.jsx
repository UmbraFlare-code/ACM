import { 
  FaTrophy, 
  FaLaptopCode, 
  FaMobile, 
  FaShieldAlt, 
  FaGamepad, 
  FaGlobe 
} from 'react-icons/fa';
import aboutData from '../../../data/about.json';
import './About.css';

const About = () => {
  const { title, subtitle, mainText, features } = aboutData;

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'trophy':
        return <FaTrophy className="feature-icon" />;
      case 'code':
        return <FaLaptopCode className="feature-icon" />;
      case 'mobile':
        return <FaMobile className="feature-icon" />;
      case 'shield':
        return <FaShieldAlt className="feature-icon" />;
      case 'gamepad':
        return <FaGamepad className="feature-icon" />;
      case 'globe':
        return <FaGlobe className="feature-icon" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>{mainText}</p>
        </div>

        <div className="features-grid">
          {features
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value: feature }, index) => (
              <div key={index} className="feature-card" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="icon-wrapper">
                  {getIcon(feature.icon)}
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;