import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  const getLanguageDisplay = () => {
    switch(language) {
      case 'zh': return '中文';
      case 'en': return 'English';
      case 'sr': return 'Српски';
      default: return language;
    }
  };

  const getNextLanguage = () => {
    switch(language) {
      case 'zh': return 'English';
      case 'en': return 'Српски';
      default: return '中文';
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
      aria-label={`Switch to ${getNextLanguage()}`}
    >
      {getLanguageDisplay()}
    </button>
  );
} 