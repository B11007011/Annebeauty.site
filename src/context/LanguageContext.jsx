import { createContext, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  zh: {
    // Navigation
    home: '首頁',
    services: '服務項目',
    about: '關於我們',
    contact: '聯絡我們',
    blog: '部落格',

    // Common buttons
    readMore: '閱讀更多',
    sendMessage: '發送訊息',
    
    // Home page
    welcomeTitle: '歡迎',
    
    // Services page
    ourServices: '我們的服務',
    
    // About page
    aboutUs: '關於我們',
    
    // Contact page
    contactUs: '聯絡我們',
    
    // Form labels
    name: '姓名',
    email: '電子郵件',
    message: '訊息',
    
    // Navigation
    openMenu: '開啟選單',
    closeMenu: '關閉選單',
    logoAlt: 'Anne Nails 美甲美睫 logo',
    homeLink: '回到首頁',
    
    // Footer
    quickLinks: '快速連結',
    footerDescription: '歡迎來到我們位於內湖區的美麗與優雅角落，您的滿意和護理是我們的首要任務。',
    copyrightText: 'Nails Design Anne-美甲美睫. 設計者 Brian Nguyen',
    
    // Search
    searchPlaceholder: '搜尋文章...',
    noResults: '找不到結果',
    
    // Hero Section
    hero: {
      mainTitle: 'Anne-專業美甲美睫紋繡服務',
      subtitle: '讓您的美麗綻放',
      description: '我們提供高品質的美甲、美睫和半永久化妝服務，為您打造完美的形象。',
      buttonText: '預約服務',
      learnMore: '了解更多'
    },
    
    // Blog
    allCategories: '所有類別',
    blogCategories: {
      nailService: '美甲服務',
      nailCare: '美甲保養',
      nailArtTips: '美甲小技巧',
      eyelashService: '美睫服務',
      eyelashCare: '美睫保養',
      eyelashTips: '美睫小技巧'
    },
    blogSection: {
      latestPosts: '最新文章',
      readMore: '閱讀更多',
      postedOn: '發布於',
      searchPlaceholder: '搜尋文章...',
      noResults: '找不到結果',
      postsPerPage: '每頁顯示',
      page: '第 {0} 頁，共 {1} 頁',
      showingPosts: '顯示第 {0} - {1} 篇，共 {2} 篇文章'
    }
  }
};

export function LanguageProvider({ children }) {
  const t = (key) => {
    const keys = key.split('.');
    let value = translations.zh;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value;
  };

  const value = {
    language: 'zh',
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext; 