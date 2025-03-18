import React, { useEffect } from 'react';
import ParticipanteCard from './ParticipanteCard';

const PremioModal = React.memo(({ award, onClose, imageError, onImageError }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content premio-modal" onClick={e => e.stopPropagation()}>
        <button className="cerrar-modal" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2 className="modal-title">{award.titulo}</h2>
          <span className="modal-fecha text-sm">{award.fecha}</span>
        </div>

        <div className="modal-descripcion">
          <p className="text-sm">{award.descripcion}</p>
        </div>

        <div className="participantes-grid">
          {award.participantes.map((participante, index) => (
            <ParticipanteCard
              key={index}
              participante={participante}
              index={index}
              imageError={imageError}
              onImageError={onImageError}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default PremioModal;