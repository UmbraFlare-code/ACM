import { FaUser } from 'react-icons/fa';
import React from 'react';

const ParticipanteCard = React.memo(({ participante, index, onImageError, imageError }) => {
  return (
    <div className="participante-card">
      <div className="participante-foto">
        {imageError[index] ? (
          <div className="fallback-avatar">
            <FaUser className="fallback-icon" />
          </div>
        ) : (
          <img 
            src={participante.foto} 
            alt={participante.nombre}
            onError={() => onImageError(index)}
          />
        )}
      </div>
      <h4 className="text-sm">{participante.nombre}</h4>
      <p className="participante-rol text-xs">{participante.rol}</p>
      <p className="participante-logro text-xs">{participante.logro}</p>
    </div>
  );
});

export default ParticipanteCard;