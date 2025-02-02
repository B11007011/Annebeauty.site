import React, { useState, useEffect } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('早安');
    else if (hour < 18) setGreeting('午安');
    else setGreeting('晚安');
  }, []);

  const openChat = (platform) => {
    switch (platform) {
      case 'line':
        window.open('https://line.me/R/ti/p/@mxn8805y', '_blank');
        break;
      case 'facebook':
        window.open('https://m.me/100054297440256', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
        <div className="chat-content">
          <div className="chat-header">
            <div className="header-content">
              <span>線上客服</span>
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="chat-body">
            <div className="greeting-message">
              <p>{greeting}！歡迎來到 Anne Beauty</p>
              <p className="subtitle">請選擇您想要的聯絡方式</p>
            </div>

            <div className="platform-buttons">
              <button 
                className="platform-button line"
                onClick={() => openChat('line')}
              >
                <i className="fab fa-line"></i>
                <div className="button-content">
                  <span className="platform-name">LINE</span>
                  <span className="platform-status">通常回覆時間：幾分鐘內</span>
                </div>
              </button>

              <button 
                className="platform-button messenger"
                onClick={() => openChat('facebook')}
              >
                <i className="fab fa-facebook-messenger"></i>
                <div className="button-content">
                  <span className="platform-name">Messenger</span>
                  <span className="platform-status">通常回覆時間：幾分鐘內</span>
                </div>
              </button>
            </div>

            <div className="business-hours">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>營業時間：週一至週六 10:00-19:00</span>
            </div>
          </div>
        </div>

        <button 
          className="chat-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          )}
        </button>
      </div>

      <style>{`
        .chat-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .chat-content {
          position: absolute;
          bottom: calc(100% + 20px);
          right: 0;
          width: 320px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          pointer-events: none;
          transition: all 0.2s ease;
        }

        .chat-widget.open .chat-content {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .chat-header {
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f0f0f0;
        }

        .header-content span {
          font-weight: 600;
          color: #333;
        }

        .close-button {
          background: none;
          border: none;
          padding: 4px;
          color: #666;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .close-button:hover {
          background: #f5f5f5;
          color: #333;
        }

        .chat-body {
          padding: 20px;
        }

        .greeting-message {
          text-align: center;
          margin-bottom: 20px;
        }

        .greeting-message p {
          margin: 0;
          color: #333;
        }

        .greeting-message .subtitle {
          color: #666;
          font-size: 0.9em;
          margin-top: 4px;
        }

        .platform-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .platform-button {
          width: 100%;
          padding: 12px 16px;
          border: none;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: white;
          text-align: left;
        }

        .platform-button.line {
          background: #06C755;
        }

        .platform-button.messenger {
          background: #0084FF;
        }

        .platform-button:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }

        .platform-button i {
          font-size: 20px;
        }

        .button-content {
          flex: 1;
        }

        .platform-name {
          display: block;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .platform-status {
          font-size: 0.8em;
          opacity: 0.9;
        }

        .business-hours {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #666;
          font-size: 0.9em;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }

        .chat-toggle {
          width: 56px;
          height: 56px;
          border-radius: 28px;
          background: #333;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .chat-toggle:hover {
          transform: scale(1.05);
          background: #222;
        }

        @media (max-width: 768px) {
          .chat-widget {
            bottom: 20px;
            right: 20px;
          }

          .chat-content {
            width: calc(100vw - 40px);
            max-width: 320px;
          }

          .chat-toggle {
            width: 48px;
            height: 48px;
            border-radius: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default LiveChat; 