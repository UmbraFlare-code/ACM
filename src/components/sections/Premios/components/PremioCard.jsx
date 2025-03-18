import { FaTrophy, FaUsers } from 'react-icons/fa';
import React from 'react';

const PremioCard = React.memo(({ premio, onSelect }) => {
  return (
    <div 
      className="premio-card"
      onClick={() => onSelect(premio)}
    >
      <div className="premio-header">
        <FaTrophy className="premio-icon" />
        <h3>{premio.titulo}</h3>
        <span className="premio-fecha">{premio.fecha}</span>
      </div>

      <div className="premio-imagen">
        <img src={premio.imagen} alt={premio.titulo} loading="lazy" />
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