export const translations = {
  sr: {
    // Navigation
    home: 'Početna',
    services: 'Usluge',
    about: 'O nama',
    contact: 'Kontakt',
    blog: 'Blog',

    // Common buttons
    readMore: 'Pročitaj više',
    sendMessage: 'Pošalji poruku',
    
    // Home page
    welcomeTitle: 'Dobrodošli',
    
    // Services page
    ourServices: 'Naše usluge',
    
    // About page
    aboutUs: 'O nama',
    
    // Contact page
    contactUs: 'Kontaktirajte nas',
    
    // Form labels
    name: 'Ime',
    email: 'Email',
    message: 'Poruka',
  },
  
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',

    // Common buttons
    readMore: 'Read More',
    sendMessage: 'Send Message',
    
    // Home page
    welcomeTitle: 'Welcome',
    
    // Services page
    ourServices: 'Our Services',
    
    // About page
    aboutUs: 'About Us',
    
    // Contact page
    contactUs: 'Contact Us',
    
    // Form labels
    name: 'Name',
    email: 'Email',
    message: 'Message',
  }
};

// Helper function to get translation
export const getTranslation = (language, key) => {
  return translations[language]?.[key] || key;
}; 