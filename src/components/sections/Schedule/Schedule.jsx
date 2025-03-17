import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import scheduleData from '../../../data/schedule.json';
import './Schedule.css';

const Schedule = () => {
  const { title, subtitle, days } = scheduleData;
  
  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="timeline">
          {days.map((day, index) => (
            <div key={index} className="timeline-day">
              <div className="day-header">
                <FaCalendarAlt className="day-icon" />
                <h3>{day.date}</h3>
              </div>
              
              <div className="day-events">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event-card">
                    <div className="event-time">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-content">
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;