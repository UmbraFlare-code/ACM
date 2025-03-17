import { FaTrophy, FaUsers, FaGamepad, FaGlobe } from 'react-icons/fa';
import aboutData from '../../../data/about.json';
import './About.css';

const About = () => {
  const { title, subtitle, mainText, features } = aboutData;

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'trophy':
        return <FaTrophy className="feature-icon" />;
      case 'users':
        return <FaUsers className="feature-icon" />;
      case 'gamepad':
        return <FaGamepad className="feature-icon" />;
      case 'globe':
        return <FaGlobe className="feature-icon" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>{mainText}</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                {getIcon(feature.icon)}
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;