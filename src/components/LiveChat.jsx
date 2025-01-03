import React, { useState, useEffect } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
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
      <div className={`chat-widget ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
        <div className="chat-header" onClick={() => setIsMinimized(!isMinimized)}>
          <div className="header-content">
            <div className="status-indicator"></div>
            <span>線上客服</span>
          </div>
          <button className="minimize-button">
            <i className={`fas fa-${isMinimized ? 'expand' : 'minus'}`}></i>
          </button>
        </div>

        <div className="chat-content">
          <div className="greeting-message">
            <div className="avatar">
              <img src="/logo.svg" alt="Anne Beauty" />
            </div>
            <div className="message">
              <p className="time">{new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}</p>
              <p>{greeting}！歡迎來到 Anne Beauty</p>
              <p>請選擇您想要的聯絡方式：</p>
            </div>
          </div>

          <div className="platform-buttons">
            <button 
              className="platform-button line ripple"
              onClick={() => openChat('line')}
            >
              <i className="fab fa-line"></i>
              <div className="button-content">
                <span className="platform-name">LINE</span>
                <span className="platform-status">通常回覆時間：幾分鐘內</span>
              </div>
            </button>

            <button 
              className="platform-button facebook ripple"
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
            <i className="far fa-clock"></i>
            <span>營業時間：週一至週六 10:00-19:00</span>
          </div>
        </div>

        <button 
          className="chat-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
        </button>
      </div>

      <style>{`
        .chat-widget {
          position: fixed;
          bottom: 90px;
          right: 30px;
          z-index: 1000;
          width: 360px;
          transform: translateY(calc(100% + 20px));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chat-widget.open {
          transform: translateY(0);
        }

        .chat-widget.minimized .chat-content {
          display: none;
        }

        .chat-header {
          background: #ff69b4;
          color: white;
          padding: 16px;
          border-radius: 12px 12px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: #4CAF50;
          border-radius: 50%;
        }

        .minimize-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
        }

        .chat-content {
          background: white;
          border-radius: 0 0 12px 12px;
          padding: 16px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .greeting-message {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 24px;
          background: white;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0.9);
        }

        .avatar img:hover {
          filter: brightness(1);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        .message {
          flex: 1;
        }

        .time {
          color: #666;
          font-size: 0.8rem;
          margin-bottom: 4px;
        }

        .platform-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .platform-button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          color: white;
        }

        .platform-button.line {
          background: #00B900;
        }

        .platform-button.facebook {
          background: #0084FF;
        }

        .platform-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .button-content {
          text-align: left;
        }

        .platform-name {
          display: block;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .platform-status {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .business-hours {
          text-align: center;
          color: #666;
          font-size: 0.9rem;
          padding-top: 12px;
          border-top: 1px solid #eee;
        }

        .chat-toggle {
          position: absolute;
          bottom: 100%;
          right: 0;
          width: 52px;
          height: 52px;
          border-radius: 26px;
          background: #ff69b4;
          border: none;
          color: white;
          font-size: 22px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          transform: translateY(50%);
        }

        .chat-toggle:hover {
          transform: translateY(50%) scale(1.1);
        }

        .ripple {
          position: relative;
          overflow: hidden;
        }

        .ripple:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform .5s, opacity 1s;
        }

        .ripple:active:after {
          transform: scale(0, 0);
          opacity: .3;
          transition: 0s;
        }

        @media (max-width: 768px) {
          .chat-widget {
            width: calc(100% - 60px);
            right: 30px;
            bottom: 100px;
            max-width: 340px;
          }

          .chat-toggle {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default LiveChat; 