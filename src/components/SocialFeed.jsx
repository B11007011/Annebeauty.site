import React from 'react';
import styles from './SocialFeed.module.css';

const SocialFeed = () => {
  return (
    <section className={styles.socialFeedSection}>
      <div className={styles.sectionHeader}>
        <h2>社群媒體動態</h2>
        <p>關注我們的最新消息和客戶評價</p>
      </div>
      
      <div className={styles.socialFeedContainer}>
        <div className={styles.socialCard}>
          <div className={styles.cardHeader}>
            <i className={`fab fa-instagram ${styles.instagramIcon}`}></i>
            <h3>Instagram 最新動態</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.iframeContainer}>
              <iframe 
                src="https://www.instagram.com/a0081606455/embed"
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
                title="Instagram Feed"
              ></iframe>
            </div>
          </div>
          <a href="https://www.instagram.com/a0081606455/" 
             target="_blank" 
             rel="noopener noreferrer"
             className={styles.followButton}>
            <i className="fab fa-instagram"></i>
            追蹤我們的 Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed; 