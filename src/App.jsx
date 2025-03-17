import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Games from './components/sections/Games'
import Schedule from './components/sections/Schedule'
import Prizes from './components/sections/Premios/Premios'
import About from './components/sections/About'
import './App.css'

function App() {
  useEffect(() => {
    const createStars = () => {
      const app = document.querySelector('.app');
      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        app.appendChild(star);
      }
    };

    createStars();
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
