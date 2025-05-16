import { FaTrophy, FaUsers } from 'react-icons/fa';
import React from 'react';

const PremioCard = React.memo(({ premio, onSelect, totalCards }) => {
  const imageClass = totalCards <= 2 ? 'premio-imagen premio-imagen-large' : 'premio-imagen';
  
  return (
    <div 
      className="premio-card"
      onClick={() => onSelect(premio)}
    >
      <div className="premio-header">
        <FaTrophy className="premio-icon" />
        <div className='premio-header-text'>
          <h3>{premio.titulo}</h3>
          <span className="premio-fecha">{premio.fecha}</span>
        </div>
      </div>

      <div className={imageClass}>
        <img 
          src={premio.imagen} 
          alt={premio.titulo} 
        />
      </div>

      <div className="premio-contenido">
        <p>{premio.descripcion}</p>
        <div className="participantes-preview">
          <FaUsers />
          <span>{premio.participantes.length} Participantes</span>
        </div>
      </div>
    </div>
  );
});

export default PremioCard;