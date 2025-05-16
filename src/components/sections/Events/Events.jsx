import { useState, useEffect, useCallback, useMemo } from 'react';
import { handleUIAction } from '../../../components/common/uiActions';
import GameTabs from './components/GameTabs';
import GameDetails from './components/GameDetails';
import RegistrationModal from './components/RegistrationModal';
import siteData from '../../../data/events.json';
import './Events.css';

const Games = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { games } = siteData;

  const currentGame = useMemo(() => games[activeGame], [games, activeGame]);
  const currentCategory = useMemo(() => currentGame.categories[activeCategory], [currentGame, activeCategory]);

  const handleNavbarClick = useCallback((e) => {
    if (e.target.closest('.navbar')) {
      setShowModal(false);
    }
  }, []);

  const handleTabClick = useCallback((index) => {
    setActiveGame(index);
    setActiveCategory(0);
  }, []);

  const handleCategoryClick = useCallback((index) => {
    setActiveCategory(index);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleModalOverlayClick = useCallback((e) => {
    if (e.target.className === 'modal-overlay') {
      setShowModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleNavbarClick);
    return () => document.removeEventListener('click', handleNavbarClick);
  }, [handleNavbarClick]);

  return (
    <section id="events" className="games section">
      <div className="container">
        <div className="section-header">
          <h2>Evento <span className="text-gradient">Proximos</span></h2>
          <p>¡Emocionantes eventos que ACM!</p>
        </div>
        
        <div className="games-showcase">
          <GameTabs 
            games={games}
            activeGame={activeGame}
            onTabClick={handleTabClick}
          />
          
          <div className="game-content">
            <div className="game-image">
              <picture>
                <source srcSet={currentGame.image} type="image/webp" />
                <img 
                  src={currentGame.image.replace('.webp', '.jpg')} 
                  alt={currentGame.title}
                />
              </picture>
              <div className="game-overlay"></div>
            </div>
            
            <GameDetails 
              currentGame={currentGame}
              currentCategory={currentCategory}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
              onUIAction={handleUIAction}
              setShowModal={setShowModal}
            />
          </div>
        </div>

        <RegistrationModal 
          showModal={showModal}
          currentGame={currentGame}
          onClose={handleModalClose}
          onOverlayClick={handleModalOverlayClick}
        />
      </div>
    </section>
  );
};

export default Games;