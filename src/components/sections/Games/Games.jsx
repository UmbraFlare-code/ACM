import { useState } from 'react';
import { FaTrophy, FaUsers, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import siteData from '../../../data/games.json';
import './Games.css';

const Games = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { games } = siteData;
  
  return (
    <section id="games" className="games section">
      <div className="container">
        <div className="section-header">
          <h2>Evento <span className="text-gradient">Proximos</span></h2>
          <p>¡Descubre los emocionantes eventos que ACM tiene preparados para ti!</p>
        </div>
        
        <div className="games-showcase">
          <div className="games-tabs">
            {games.map((game, index) => (
              <button 
                key={game.id}
                className={`game-tab ${activeGame === index ? 'active' : ''}`}
                onClick={() => setActiveGame(index)}
              >
                {game.title}
              </button>
            ))}
          </div>
          
          <div className="game-content">
            <div className="game-image">
              <picture>
                <source srcSet={games[activeGame].image} type="image/webp" />
                <img 
                  src={games[activeGame].image.replace('.webp', '.jpg')} 
                  alt={games[activeGame].title}
                  loading="lazy"
                />
              </picture>
              <div className="game-overlay"></div>
            </div>
            
            <div className="game-details">
              <h3>{games[activeGame].title}</h3>
              <p className="game-description">{games[activeGame].description}</p>
              
              <div className="category-selector">
                {games[activeGame].categories.map((category, index) => (
                  <button
                    key={index}
                    className={`category-btn ${activeCategory === index ? 'active' : ''}`}
                    onClick={() => setActiveCategory(index)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="game-info">
                <div className="info-item">
                  <FaTrophy className="info-icon" />
                  <div>
                    <h4>Premio</h4>
                    <p>{games[activeGame].categories[activeCategory].prize}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaUsers className="info-icon" />
                  <div>
                    <h4>Rango</h4>
                    <p>{games[activeGame].categories[activeCategory].rank}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaCalendarAlt className="info-icon" />
                  <div>
                    <h4>Fecha del Torneo</h4>
                    <p>{games[activeGame].date}</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaUsers className="info-icon" />
                  <div>
                    <h4>Tamaño del Equipo</h4>
                    <p>{games[activeGame].teamSize}</p>
                  </div>
                </div>
              </div>
              
              <div className="buttons-qr-container">
                <div className="buttons-column">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Registrar Equipo
                  </button>
                  <a 
                    href={games[activeGame].rulesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Bases
                  </a>
                </div>
                {games[activeGame].registrationLink && (
                  <div className="qr-container">
                    <QRCodeSVG
                      value={games[activeGame].registrationLink}
                      size="100%"
                      width="100%"
                      height="100%"
                      bgColor={"#ffffff"}
                      fgColor={"#000000"}
                      level={"L"}
                      includeMargin={false}
                      style={{ width: '100%', height: '80%' }}
                    />
                    <p className="qr-text">Yape</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
              <div className="info-banner">
                <div className="info-banner-content">
                  <h4>Información Importante</h4>
                  <ul>
                    {games[activeGame].registrationFees.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  <div className="registration-fees">
                    <h4>Costos de Inscripción</h4>
                    <p>Titular: {games[activeGame].registrationFees.titular}</p>
                    <p>Suplente: {games[activeGame].registrationFees.suplente}</p>
                  </div>
                  <div className="registration-action">
                    <a 
                      href={games[activeGame].registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-form"
                    >
                      Ir al Formulario de Registro
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Games;