import { FaTrophy, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import './Premios.css';
import premiosData from '../../../data/premiosData.json';

const Premios = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  // Replace the premiosACM constant with:
  const { premios } = premiosData;

  const cerrarModal = () => setSelectedAward(null);

  return (
    <section className="premios-section">
      <div className="cosmic-bg"></div>
      <div className="container">
        <div className="section-header">
          <h2>Premiaciones <span className="text-gradient">ACM</span></h2>
          <p>Reconocimientos y logros destacados de nuestros participantes</p>
        </div>

        <div className="premios-grid">
          {premios.map((premio) => (
            <div 
              key={premio.id} 
              className="premio-card"
              onClick={() => setSelectedAward(premio)}
            >
              <div className="premio-header">
                <FaTrophy className="premio-icon" />
                <h3>{premio.titulo}</h3>
                <span className="premio-fecha">{premio.fecha}</span>
              </div>

              <div className="premio-imagen">
                <img src={premio.imagen} alt={premio.titulo} />
              </div>

              <div className="premio-contenido">
                <p>{premio.descripcion}</p>
                <div className="participantes-preview">
                  <FaUsers />
                  <span>{premio.participantes.length} Participantes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAward && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="cerrar-modal" onClick={cerrarModal}>&times;</button>
            
            <div className="modal-header">
              <h2>{selectedAward.titulo}</h2>
              <span className="modal-fecha">{selectedAward.fecha}</span>
            </div>

            <div className="modal-descripcion">
              <p>{selectedAward.descripcion}</p>
            </div>

            <div className="participantes-grid">
              {selectedAward.participantes.map((participante, index) => (
                <div key={index} className="participante-card">
                  <div className="participante-foto">
                    <img src={participante.foto} alt={participante.nombre} />
                  </div>
                  <h4>{participante.nombre}</h4>
                  <p className="participante-rol">{participante.rol}</p>
                  <p className="participante-logro">{participante.logro}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Premios;