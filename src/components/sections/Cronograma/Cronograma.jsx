import React, { useMemo } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import scheduleData from '../../../data/schedule.json';
import './Cronograma.css';

const Schedule = () => {
  const { title, subtitle, days } = scheduleData;
  
  // Use useMemo for the timeline content to prevent unnecessary recalculations
  const timelineContent = useMemo(() => (
    <div className="timeline">
      {days.map(({ date, events }, index) => (
        <div key={index} className="timeline-day">
          <div className="day-header">
            <FaCalendarAlt className="day-icon" />
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
  ), [days]); // Only recalculate if days changes
  
  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {timelineContent}
      </div>
    </section>
  );
};

// Wrap the component with React.memo to prevent re-renders if props don't change
export default React.memo(Schedule);