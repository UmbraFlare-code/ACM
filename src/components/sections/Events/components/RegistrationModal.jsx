import React from 'react';
import { FaTimes } from 'react-icons/fa';

const RegistrationModal = React.memo(({ 
  showModal, 
  currentGame, 
  onClose, 
  onOverlayClick 
}) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={onOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="info-banner">
          <div className="info-banner-content">
            <h4>Información Importante</h4>
            <ul>
              {currentGame.registrationFees.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <div className="registration-fees">
              <h4>Costos de Inscripción</h4>
              <p>Titular: {currentGame.registrationFees.titular}</p>
              <p>Suplente: {currentGame.registrationFees.suplente}</p>
            </div>
            <div className="registration-action">
              <a 
                href={currentGame.registrationLink}
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
  );
});

export default RegistrationModal;