import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ event, onClick, index }) => (
  <motion.article 
    className="event-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    onClick={onClick}
  >
    <div className="event-image">
      <img 
        src={event.image} 
        alt={event.title}
      />
      <div className="event-date">
        <FaCalendar />
        <span>{event.date}</span>
      </div>
    </div>
    
    <div className="event-content-list">
      <h3>{event.title}</h3>
      <p className="event-description">{event.description}</p>
      <div className="event-meta">
        <span className="event-location">
          <FaMapMarkerAlt />
          {event.location}
        </span>
      </div>
    </div>
  </motion.article>
);

const GameIcon = ({ game, size = "32" }) => {
  switch(game.toLowerCase()) {
    case 'dota 2':
      return <Dota2Icon size={size} className="game-icon" />;
    case 'valorant':
      return <ValorantIcon size={size} className="game-icon" />;
    default:
      return null;
  }
};

export default EventCard;