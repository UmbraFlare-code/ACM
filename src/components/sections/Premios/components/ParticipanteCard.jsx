import { FaUser } from 'react-icons/fa';
import React from 'react';

const ParticipanteCard = React.memo(({ participante, index, onImageError, imageError }) => {
  return (
    <div className="participante-card">
      {!imageError[index] && participante.foto && (
        <div className="participante-foto">
          <img 
            src={participante.foto} 
            alt={participante.nombre}
            onError={() => onImageError(index)}
          />
        </div>
      )}
      <div className="participante-info">
        <h4 className="text-sm font-medium">{participante.nombre}</h4>
        <p className="participante-rol text-xs text-gray-400">{participante.rol}</p>
        <p className="participante-logro text-xs">{participante.logro}</p>
      </div>
    </div>
  );
});

export default ParticipanteCard;