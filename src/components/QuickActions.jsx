import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`quick-actions ${isOpen ? 'open' : ''}`}>
        <button 
          className="main-button"
          onClick={toggleMenu}
          aria-label={isOpen ? '關閉選單' : '開啟選單'}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-plus'}`}></i>
        </button>

        <div className="action-buttons">
          <Link to="/booking" className="action-button booking">
            <i className="far fa-calendar-alt"></i>
            <span>預約服務</span>
          </Link>
          
          <a href="tel:+886123456789" className="action-button call">
            <i className="fas fa-phone-alt"></i>
            <span>立即來電</span>
          </a>

          <Link to="/price" className="action-button price">
            <i className="fas fa-tag"></i>
            <span>價目表</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .quick-actions {
          position: fixed;
          bottom: 90px;
          left: 20px;
          z-index: 900;
        }

        .main-button {
          width: 56px;
          height: 56px;
          border-radius: 28px;
          background: #ff69b4;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
        }

        .main-button:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
        }

        .action-buttons {
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 70px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          pointer-events: none;
        }

        .quick-actions.open .action-buttons {
          opacity: 1;
          pointer-events: all;
        }

        .action-button {
          display: flex;
          align-items: center;
          padding: 8px 16px;
          background: white;
          border-radius: 20px;
          text-decoration: none;
          color: #666;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transform: translateX(-20px);
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quick-actions.open .action-button {
          transform: translateX(0);
          opacity: 1;
        }

        .action-button i {
          margin-right: 8px;
          font-size: 16px;
        }

        .action-button.booking { transition-delay: 0.1s; }
        .action-button.call { transition-delay: 0.2s; }
        .action-button.price { transition-delay: 0.3s; }

        .action-button:hover {
          transform: translateX(5px);
          background: #ff69b4;
          color: white;
        }

        @media (max-width: 768px) {
          .quick-actions {
            bottom: 80px;
            left: 16px;
          }

          .main-button {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default QuickActions; 