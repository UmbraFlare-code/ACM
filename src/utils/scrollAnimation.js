import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimation = () => {
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  
  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: '+=50%',
    scrub: 0.5,      // Reduced scrub value for more natural scrolling
    onUpdate: (self) => {
      const progress = self.progress;
      
      // Animate hero height
      gsap.to(hero, {
        minHeight: `${100 - (progress * 50)}vh`,
        duration: 0.5,  // Increased duration for smoother transition
        ease: 'power1.out'  // Changed ease for more natural movement
      });
      
      // Fade out content
      gsap.to(heroContent, {
        opacity: 1 - progress,
        y: progress * 100,
        duration: 0.5,  // Matched duration
        ease: 'power1.out'  // Matched ease
      });
    }
  });
};