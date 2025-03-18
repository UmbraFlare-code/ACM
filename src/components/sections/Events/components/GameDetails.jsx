import React from 'react';
import { FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import InfoItem from './InfoItem';

const GameDetails = React.memo(({ 
  currentGame, 
  currentCategory, 
  activeCategory, 
  onCategoryClick,
  onUIAction,
  setShowModal 
}) => (
  <div className="game-details">
    <h3>{currentGame.title}</h3>
    <p className="game-description">{currentGame.description}</p>
    
    <div className="category-selector">
      {currentGame.categories.map((category, index) => (
        <button
          key={index}
          className={`category-btn ${activeCategory === index ? 'active' : ''}`}
          onClick={() => onCategoryClick(index)}
        >
          {category.name}
        </button>
      ))}
    </div>

    <div className="game-info">
      <InfoItem icon={FaTrophy} title="Premio" value={currentCategory.prize} />
      <InfoItem icon={FaUsers} title="Rango" value={currentCategory.rank} />
      <InfoItem icon={FaCalendarAlt} title="Fecha del Torneo" value={currentGame.date} />
      <InfoItem icon={FaUsers} title="Tamaño del Equipo" value={currentGame.teamSize} />
    </div>
    
    <div className="buttons-qr-container">
      <div className="buttons-column">
        {currentGame.buttons.map((btn, index) => (
          btn.type === 'external' ? (
            <a 
              key={index}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {btn.text}
            </a>
          ) : (
            <button 
              key={index}
              className="btn btn-primary"
              onClick={() => onUIAction(btn.action, { setModal: setShowModal })}
            >
              {btn.text}
            </button>
          )
        ))}
      </div>
      {currentGame.registrationLink && (
        <div className="qr-container">
          <QRCodeSVG
            value={currentGame.registrationLink}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            size={200}
            level={"H"}
            includeMargin={false}
          />
          <p className="qr-text">Yapea y Registrate</p>
        </div>
      )}
    </div>
  </div>
));

export default GameDetails;