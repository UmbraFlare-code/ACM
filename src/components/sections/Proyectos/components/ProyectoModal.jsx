import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProyectoModal = React.memo(({ proyecto, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content proyecto-modal" onClick={e => e.stopPropagation()}>
        <button className="cerrar-modal" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2 className="modal-title" style={{ paddingRight: '2.5rem' }}>{proyecto.titulo}</h2>
        </div>

        <div className="modal-descripcion">
          <p>{proyecto.descripcion}</p>
        </div>

        <div className="proyecto-features-modal">
          <h3>Características principales</h3>
          <ul>
            {proyecto.caracteristicas.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="proyecto-team-modal">
          <h3>Equipo de desarrollo</h3>
          <div className="team-members-grid">
            {proyecto.equipo.map((miembro, index) => (
              <div key={index} className="team-member-card">
                <h4>{miembro.nombre}</h4>
                <p>{miembro.rol}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="proyecto-links-modal">
          {proyecto.github && (
            <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaGithub /> Ver código
            </a>
          )}
          {proyecto.demo && (
            <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaExternalLinkAlt /> Ver demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProyectoModal;