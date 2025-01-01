import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import * as defaultConfig from '../config/siteConfig';

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(() => {
    try {
      const savedConfig = localStorage.getItem('siteConfig');
      if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig);
        return {
          appointmentInfo: { ...defaultConfig.appointmentInfo, ...(parsedConfig.appointmentInfo || {}) },
          businessHours: { ...defaultConfig.businessHours, ...(parsedConfig.businessHours || {}) },
          contactInfo: { ...defaultConfig.contactInfo, ...(parsedConfig.contactInfo || {}) },
          images: { ...defaultConfig.images, ...(parsedConfig.images || {}) },
          navLinks: Array.isArray(parsedConfig.navLinks) ? parsedConfig.navLinks : defaultConfig.navLinks,
          seoInfo: { ...defaultConfig.seoInfo, ...(parsedConfig.seoInfo || {}) },
          services: Array.isArray(parsedConfig.services) ? parsedConfig.services : defaultConfig.services,
          siteInfo: { ...defaultConfig.siteInfo, ...(parsedConfig.siteInfo || {}) },
          socialLinks: Array.isArray(parsedConfig.socialLinks) ? parsedConfig.socialLinks : defaultConfig.socialLinks,
          counter: Array.isArray(parsedConfig.counter) ? parsedConfig.counter : defaultConfig.counter,
          aboutSection: Array.isArray(parsedConfig.aboutSection) ? parsedConfig.aboutSection : defaultConfig.aboutSection,
        };
      }
    } catch (error) {
      console.error('Error loading config:', error);
    }
    return { ...defaultConfig };
  });

  const shouldSave = useRef(false);

  useEffect(() => {
    if (!shouldSave.current) {
      shouldSave.current = true;
      return;
    }

    try {
      const configToSave = {
        appointmentInfo: config.appointmentInfo || defaultConfig.appointmentInfo,
        businessHours: config.businessHours || defaultConfig.businessHours,
        contactInfo: config.contactInfo || defaultConfig.contactInfo,
        images: config.images || defaultConfig.images,
        navLinks: Array.isArray(config.navLinks) ? config.navLinks : defaultConfig.navLinks,
        seoInfo: config.seoInfo || defaultConfig.seoInfo,
        services: Array.isArray(config.services) ? config.services : defaultConfig.services,
        siteInfo: config.siteInfo || defaultConfig.siteInfo,
        socialLinks: Array.isArray(config.socialLinks) ? config.socialLinks : defaultConfig.socialLinks,
        counter: Array.isArray(config.counter) ? config.counter : defaultConfig.counter,
        aboutSection: Array.isArray(config.aboutSection) ? config.aboutSection : defaultConfig.aboutSection,
      };
      localStorage.setItem('siteConfig', JSON.stringify(configToSave));
    } catch (error) {
      console.error('Error saving config:', error);
    }
  }, [config]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'siteConfig' && e.newValue !== null) {
        try {
          const newConfig = JSON.parse(e.newValue);
          shouldSave.current = false;  // Prevent saving when loading from storage
          setConfig(newConfig);
        } catch (error) {
          console.error('Error parsing new config:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateConfig = (section, field, value) => {
    try {
      shouldSave.current = true;  // Ensure we save when explicitly updating
      setConfig(prev => {
        const newConfig = { ...prev };
        if (field === null && Array.isArray(value)) {
          newConfig[section] = value;
        } else {
          newConfig[section] = {
            ...prev[section],
            [field]: value
          };
        }
        return newConfig;
      });
    } catch (error) {
      console.error('Error updating config:', error);
      throw error;
    }
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
} 