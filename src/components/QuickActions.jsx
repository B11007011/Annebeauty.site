import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickActions.module.css';

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles['quick-actions']} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles['main-button']}
        onClick={toggleMenu}
        aria-label={isOpen ? '關閉選單' : '開啟選單'}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-plus'}`}></i>
      </button>

      <div className={styles['action-buttons']}>
        <Link to="/booking" className={`${styles['action-button']} ${styles.booking}`}>
          <i className="far fa-calendar-alt"></i>
          <span>預約服務</span>
        </Link>
        
        <a href="tel:+886123456789" className={`${styles['action-button']} ${styles.call}`}>
          <i className="fas fa-phone-alt"></i>
          <span>立即來電</span>
        </a>

        <Link to="/price" className={`${styles['action-button']} ${styles.price}`}>
          <i className="fas fa-tag"></i>
          <span>價目表</span>
        </Link>
      </div>
    </div>
  );
}

export default QuickActions; 