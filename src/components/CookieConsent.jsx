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
          <p>
            我們使用 Cookie 來改善您的瀏覽體驗並提供個人化服務。
          </p>
          <div className="cookie-actions">
            <button onClick={acceptCookies} className="accept-button">
              接受
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          max-width: 400px;
          margin: 0 auto;
          background: rgba(51, 51, 51, 0.95);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1050;
          animation: slideUp 0.3s ease;
        }

        .cookie-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          gap: 16px;
        }

        p {
          margin: 0;
          font-size: 13px;
          color: #fff;
          line-height: 1.4;
        }

        .cookie-actions {
          flex-shrink: 0;
        }

        .accept-button {
          padding: 6px 16px;
          background: #fff;
          color: #333;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .accept-button:hover {
          background: #f0f0f0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .cookie-banner {
            bottom: 0;
            left: 0;
            right: 0;
            max-width: 100%;
            border-radius: 0;
          }
          
          .cookie-content {
            flex-direction: column;
            text-align: center;
            padding: 12px;
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default CookieConsent; 