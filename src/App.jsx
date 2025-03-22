import { useEffect } from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import Games from './components/sections/Events/Events'
import Schedule from './components/sections/Cronograma/Cronograma'
import Prizes from './components/sections/Premios/Premios'
import Proyectos from './components/sections/Proyectos/Proyectos'
import About from './components/sections/About/About'
import './App.css'

function App() {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    // Create all stars at once with their styles pre-computed
    const fragment = document.createDocumentFragment();
    const stars = Array.from({length: 100}).map(() => {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      star.className = 'star';
      star.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${Math.random() * 5}s;
        animation-duration: ${Math.random() * 3 + 2}s;
      `;
      return star;
    });
    
    stars.forEach(star => fragment.appendChild(star));
    starsContainer.appendChild(fragment);

    // Cleanup function
    return () => {
      starsContainer.innerHTML = '';
    };
  }, []);

  return (
    <div className="app">
      <div className="stars" />
      <Navbar />
      <main className="container">
        <Hero />
        <Games />
        <Schedule />
        <Prizes />
        <Proyectos />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
