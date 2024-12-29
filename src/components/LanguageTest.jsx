import { useLanguage } from '../context/LanguageContext';

export default function LanguageTest() {
  const { language, toggleLanguage, t } = useLanguage();
  
  const getNextLanguage = () => {
    switch(language) {
      case 'zh': return '英文';
      case 'en': return '塞爾維亞文';
      default: return '中文';
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <p>當前語言: {language}</p>
      <p>測試翻譯: {t('welcomeTitle')}</p>
      <button 
        onClick={toggleLanguage}
        style={{
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        切換到{getNextLanguage()}
      </button>
    </div>
  );
} 