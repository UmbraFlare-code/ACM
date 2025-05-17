import React, { useState } from 'react';
import EventCard from './components/EventCard';
import { motion } from 'framer-motion';
import eventsData from '../../../data/events.json';
import './Events.css';

const Events = () => {
  const [filteredEvents] = useState(eventsData.events);

  return (
    <section id= "games" className="events-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Próximos Eventos
        </motion.h2>
        
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <EventCard 
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;