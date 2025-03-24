import { FaYoutube, FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';
import footerData from '../../../data/footer.json';
import './Footer.css';

const Footer = () => {
  const { sections, socialLinks, copyright } = footerData;

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'youtube': return <FaYoutube />;
      case 'instagram': return <FaInstagram />;
      case 'tiktok': return <FaTiktok />;
      case 'github': return <FaGithub />;
      default: return null;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              {section.content && <p>{section.content}</p>}
              {section.title === "Contacto" && (
                <div className="social-links">
                  {Object.entries(socialLinks).map(([platform, data]) => (
                    <a
                      key={platform}
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Síguenos en ${data.label}`}
                      title={`Síguenos en ${data.label}`}
                    >
                      {getSocialIcon(platform)}
                    </a>
                  ))}
                </div>
              )}
              {section.links && (
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} title={`Ir a ${link.text}`} className="footer-link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;