import { useEffect } from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import Games from './components/sections/Events/Events'
import Schedule from './components/sections/Cronograma/Cronograma'
import Prizes from './components/sections/Premios/Premios'
import About from './components/sections/About/About'
import './App.css'

function App() {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars');
      if (!starsContainer) return; 
      starsContainer.innerHTML = '';
      
      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; 
        starsContainer.appendChild(star);
      }
    };
    setTimeout(createStars, 100);
  }, []);

  return (
    <div className="app">
      <div className="stars"></div>
      <Navbar />
      <main className="container">
        <Hero />
        <Games />
        <Schedule />
        <Prizes />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
