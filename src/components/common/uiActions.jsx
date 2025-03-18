export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }
};

export const handleUIAction = (action, callbacks = {}) => {
  switch (action) {
    case 'modal':
      callbacks.setModal?.(true);
      break;
    case 'scroll':
      if (callbacks.setModal) {
        callbacks.setModal(false);
      }
      scrollToSection(callbacks.sectionId);
      break;
    default:
      console.warn('Unknown action:', action);
  }
};