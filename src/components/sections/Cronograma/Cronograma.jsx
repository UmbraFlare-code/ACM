import React, { useMemo } from 'react';
import { FaCalendarAlt, FaClock, FaCircle } from 'react-icons/fa';
import scheduleData from '../../../data/schedule.json';
import './Cronograma.css';

const Schedule = () => {
  const { title, subtitle, days } = scheduleData;
  
  const timelineContent = useMemo(() => (
    <div className="timeline">
      {days.map(({ date, events }, index) => (
        <div key={index} className="timeline-day">
          <div className="day-header">
            <FaCircle className="day-icon" />
            <h3>{date}</h3>
          </div>
          
          <div className="day-events">
            {events.map(({ time, title, description }, eventIndex) => (
              <div key={eventIndex} className="event-card">
                <div className="event-time">
                  <FaClock />
                  <span>{time}</span>
                </div>
                <div className="event-content">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ), [days]);
  
  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <div className="section-header">
          <h2>Cronograma de <span className="text-gradient">Eventos</span></h2>
          <p>{subtitle}</p>
        </div>
        {timelineContent}
      </div>
    </section>
  );
};

export default React.memo(Schedule);