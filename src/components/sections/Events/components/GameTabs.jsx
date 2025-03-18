import React from 'react';

const GameTabs = React.memo(({ games, activeGame, onTabClick }) => (
  <div className="games-tabs">
    {games.map((game, index) => (
      <button 
        key={game.id}
        className={`game-tab ${activeGame === index ? 'active' : ''}`}
        onClick={() => onTabClick(index)}
      >
        {game.title}
      </button>
    ))}
  </div>
));

export default GameTabs;