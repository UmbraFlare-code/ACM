import React, { useState, useCallback } from 'react';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import proyectosData from '../../../data/proyectos.json';
import ProyectoModal from './components/ProyectoModal';
import './Proyectos.css';

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleProjectClick = useCallback(proyecto => setSelectedProject(proyecto), []);
  const handleCloseModal = useCallback(() => setSelectedProject(null), []);
  const handleLinkClick = useCallback(e => e.stopPropagation(), []);

  return (
    <section id="proyectos" className="proyectos-section section">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros <span className="text-gradient">Proyectos</span></h2>
          <p>Soluciones innovadoras desarrolladas por nuestro equipo</p>
        </div>

        <div className="proyectos-grid">
          {proyectosData.proyectos.map(proyecto => (
            <div key={proyecto.id} className="proyecto-card" onClick={() => handleProjectClick(proyecto)}>
              <div className="proyecto-image">
                <img src={proyecto.imagen} alt={proyecto.titulo} loading="lazy" />
                <div className="proyecto-overlay">
                  <div className="proyecto-tech">
                    {proyecto.tecnologias.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="proyecto-content">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                
                <div className="proyecto-links">
                  {proyecto.github && (
                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                      <FaGithub /> Código
                    </a>
                  )}
                  {proyecto.demo && (
                    <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && <ProyectoModal proyecto={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
};

export default Proyectos;