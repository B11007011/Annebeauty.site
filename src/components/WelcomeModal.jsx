import React, { useState, useEffect } from 'react';

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('welcomeSeen');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem('welcomeSeen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
          
          <div className="welcome-content">
            <div className="welcome-icon">
              <i className="fas fa-spa"></i>
            </div>
            <h2>歡迎來到 Anne Beauty</h2>
            <p>讓我們為您打造專屬的美麗體驗</p>
            
            <div className="features">
              <div className="feature">
                <i className="fas fa-gem"></i>
                <span>專業美睫服務</span>
              </div>
              <div className="feature">
                <i className="fas fa-magic"></i>
                <span>精緻美甲設計</span>
              </div>
              <div className="feature">
                <i className="fas fa-heart"></i>
                <span>貼心專業服務</span>
              </div>
            </div>

            <div className="special-offer">
              <div className="offer-badge">限時優惠</div>
              <p>首次預約即可享有85折優惠</p>
            </div>

            <button className="cta-button" onClick={closeModal}>
              立即探索
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          position: relative;
          animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #666;
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          color: #ff69b4;
          transform: rotate(90deg);
        }

        .welcome-content {
          text-align: center;
        }

        .welcome-icon {
          font-size: 3rem;
          color: #ff69b4;
          margin-bottom: 1rem;
        }

        h2 {
          color: #333;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: #666;
          margin-bottom: 2rem;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .feature i {
          font-size: 1.5rem;
          color: #ff69b4;
        }

        .feature span {
          font-size: 0.9rem;
          color: #666;
        }

        .special-offer {
          background: #fff5f9;
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .offer-badge {
          position: absolute;
          top: 0;
          right: 1rem;
          background: #ff69b4;
          color: white;
          padding: 0.3rem 1rem;
          border-radius: 0 0 8px 8px;
          font-size: 0.8rem;
        }

        .special-offer p {
          margin: 0;
          font-weight: 500;
          color: #ff69b4;
        }

        .cta-button {
          background: #ff69b4;
          color: white;
          border: none;
          padding: 1rem 3rem;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #ff4da6;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 105, 180, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 1.5rem;
          }

          .features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature {
            flex-direction: row;
            justify-content: center;
          }

          .feature i {
            margin-right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default WelcomeModal; 