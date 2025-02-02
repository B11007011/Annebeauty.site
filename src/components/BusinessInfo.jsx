import React from 'react';

const BusinessInfo = () => {
  return (
    <div className="business-info">
      {/* Business Hours */}
      <div className="hours-section">
        <h2>營業時間</h2>
        <div className="hours-grid">
          <div className="day-row">
            <span className="day">星期一</span>
            <span className="hours">08:00–19:00</span>
          </div>
          <div className="day-row">
            <span className="day">星期二</span>
            <span className="hours">08:00–19:00</span>
          </div>
          <div className="day-row">
            <span className="day">星期三</span>
            <span className="hours">08:00–19:00</span>
          </div>
          <div className="day-row">
            <span className="day">星期四</span>
            <span className="hours">08:00–19:00</span>
          </div>
          <div className="day-row">
            <span className="day">星期五</span>
            <span className="hours">08:00–19:00</span>
          </div>
          <div className="day-row">
            <span className="day">星期六</span>
            <span className="hours">08:00–17:00</span>
          </div>
          <div className="day-row closed">
            <span className="day">星期日</span>
            <span className="hours">休息</span>
          </div>
        </div>
        <a href="https://line.me/R/ti/p/@mxn8805y" className="book-now-btn">立即預約</a>
      </div>

      {/* Location Info */}
      <div className="location-section">
        <h2>店家資訊</h2>
        <div className="location-details">
          <p><i className="fas fa-map-marker-alt"></i> 地址：台北市內湖區民權東路六段180巷6號</p>
          <p><i className="fas fa-phone"></i> 電話：(02)8160-6455</p>
          <p><i className="fas fa-subway"></i> 交通：捷運文德站步行5分鐘</p>
          <a href="https://www.google.com/maps/place/Anne+%E7%BE%8E%E7%9D%AB+%E7%BE%8E%E7%94%B2+%E7%B4%8B%E7%B9%A1-+%E5%85%A7%E6%B9%96%E5%8D%80(%E7%BE%8E%E7%94%B2%E6%8E%A8%E8%96%A6%2F%E7%BE%8E%E7%9D%AB%E6%8E%A8%E8%96%A6%2F%E7%B4%8B%E7%B6%89%E6%8E%A8%E8%96%A6)+%E5%85%A7%E6%B9%96(%E7%BE%8E%E7%94%B2%2F%E7%BE%8E%E7%9D%AB%2F%E7%B4%8B%E7%B6%89%2F%E7%B2%89%E9%9C%A7%E7%9C%89%E6%8E%A8%E8%96%A6)/@25.0834185,121.5645197,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ad980875c73b:0xbda9d834a537fdb9!8m2!3d25.0834185!4d121.5670946!16s%2Fg%2F11vdqhzxq6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" 
             className="directions-btn" 
             target="_blank"
             rel="noopener noreferrer">
            <i className="fas fa-directions"></i> 規劃路線
          </a>
        </div>
      </div>

      {/* Map Container */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5446402825833!2d121.56451967537807!3d25.083418477784395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad980875c73b%3A0xbda9d834a537fdb9!2zQW5uZSDnvo7nnasg576O55SyIOe0i-e5oS0g5YWn5rmW5Y2AKOe-jueUsuaOqOiWpi_nvo7nnavmjqjolqYv57SL57aJ5o6o6JamKSDlhafmuZYo576O55SyL-e-juedqy_ntIvntokv57KJ6Zyn55yJ5o6o6JamKQ!5e0!3m2!1szh-TW!2stw!4v1738495911575!5m2!1szh-TW!2stw" 
          width="100%" 
          height="450" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="店家地圖位置">
        </iframe>
      </div>

      <style jsx>{`
        .business-info {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
          font-family: 'Noto Sans TC', sans-serif;
        }

        .hours-section, .location-section {
          background: #fff;
          border-radius: 8px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .hours-grid {
          display: grid;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .day-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .closed {
          color: #ff4444;
        }

        .book-now-btn, .directions-btn {
          display: inline-block;
          background: #ff69b4;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          margin-top: 1rem;
          transition: background 0.3s ease;
        }

        .book-now-btn:hover, .directions-btn:hover {
          background: #ff1493;
        }

        .location-details {
          line-height: 1.8;
        }

        .location-details i {
          width: 20px;
          color: #ff69b4;
          margin-right: 0.5rem;
        }

        .map-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .day-row {
            font-size: 0.9rem;
          }
          
          .location-details {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BusinessInfo; 