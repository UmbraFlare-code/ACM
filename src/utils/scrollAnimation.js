import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimation = () => {
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  
  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      
      gsap.to(heroContent, {
        opacity: 1 - progress,
        y: progress * 300, // Increased from 100 to 200 for more movement
        duration: 0.1,
        ease: 'none'
      });
    }
  });
};