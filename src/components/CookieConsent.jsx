import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-banner">
        <div className="cookie-content">
          <i className="fas fa-cookie-bite cookie-icon"></i>
          <p>
            我們使用 Cookie 來改善您的瀏覽體驗並提供個人化服務。
            <br />
            繼續使用本網站即表示您同意我們的 Cookie 政策。
          </p>
          <div className="cookie-actions">
            <button onClick={acceptCookies} className="accept-button">
              接受
            </button>
            <a href="/privacy" className="learn-more">
              了解更多
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cookie-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .cookie-icon {
          font-size: 2rem;
          color: #ff69b4;
        }

        p {
          flex: 1;
          margin: 0;
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
        }

        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .accept-button {
          padding: 0.75rem 2rem;
          background: #ff69b4;
          color: white;
          border: none;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .accept-button:hover {
          background: #ff4da6;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 105, 180, 0.3);
        }

        .learn-more {
          color: #666;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .learn-more:hover {
          color: #ff69b4;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
            gap: 1rem;
          }

          .cookie-actions {
            flex-direction: column;
            width: 100%;
          }

          .accept-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default CookieConsent; 