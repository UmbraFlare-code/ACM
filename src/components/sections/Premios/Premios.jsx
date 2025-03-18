import { FaTrophy, FaUsers, FaUser } from 'react-icons/fa';  // Add FaUser import
import { useState, useCallback } from 'react';
import premiosData from '../../../data/premiosData.json';
import PremioCard from './components/PremioCard';
import PremioModal from './components/PremioModal';
import './Premios.css';

const Premios = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [imageError, setImageError] = useState({});

  const { premios } = premiosData;

  const handleSelectAward = useCallback((premio) => {
    setSelectedAward(premio);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedAward(null);
    setImageError({});
  }, []);

  const handleImageError = useCallback((participanteId) => {
    setImageError(prev => ({
      ...prev,
      [participanteId]: true
    }));
  }, []);

  return (
    <section id="prizes" className="premios-section">
      <div className="cosmic-bg"></div>
      <div className="container">
        <div className="section-header">
          <h2>Premiaciones <span className="text-gradient">ACM</span></h2>
          <p>Reconocimientos y logros destacados de nuestros participantes</p>
        </div>

        <div className="premios-grid">
          {premios.map((premio) => (
            <PremioCard
              key={premio.id}
              premio={premio}
              onSelect={handleSelectAward}
            />
          ))}
        </div>
      </div>

      {selectedAward && (
        <PremioModal
          award={selectedAward}
          onClose={handleCloseModal}
          imageError={imageError}
          onImageError={handleImageError}
        />
      )}
    </section>
  );
};

export default Premios;