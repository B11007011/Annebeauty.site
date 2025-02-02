import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createRoutesFromChildren, matchRoutes } from 'react-router-dom';
import App from './App';
import './index.css';

// Global error handler for network requests
window.addEventListener('unhandledrejection', (event) => {
  // Check if the error is a network error
  if (event.reason instanceof Error && 
      (event.reason.message.includes('ERR_INTERNET_DISCONNECTED') ||
       event.reason.message.includes('Failed to fetch'))) {
    
    // Handle local asset loading errors
    const url = event.reason.message.match(/GET (.*?) net::ERR/)?.[1];
    if (url) {
      // For local development server assets
      if (url.startsWith('http://localhost:5173/')) {
        console.warn(`Asset loading failed, will retry when connection is restored: ${url}`);
        
        // Retry loading the asset when online
        window.addEventListener('online', () => {
          console.log('Connection restored, reloading page to restore assets...');
          window.location.reload();
        }, { once: true });
      }
    }
    
    // Prevent the error from showing in console
    event.preventDefault();
  }
});

// Add offline/online status handlers
window.addEventListener('offline', () => {
  console.warn('Internet connection lost. Some features may be unavailable.');
});

window.addEventListener('online', () => {
  console.log('Internet connection restored.');
});

// Configure React Router future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter {...router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Remove preload links that aren't being used
const removeUnusedPreloads = () => {
  const preloads = document.querySelectorAll('link[rel=preload]');
  preloads.forEach(link => {
    if (!link.getAttribute('as')) {
      link.remove();
    }
  });
};

// Wait for window load to check preloads
window.addEventListener('load', () => {
  // Give a small delay to allow for resource usage
  setTimeout(removeUnusedPreloads, 5000);
});
