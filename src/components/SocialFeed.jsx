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

        <div className={styles.socialCard}>
          <div className={styles.cardHeader}>
            <i className={`fab fa-facebook ${styles.facebookIcon}`}></i>
            <h3>Facebook 動態</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.iframeContainer}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100054297440256&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="700"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Feed"
              ></iframe>
            </div>
          </div>
          <a href="https://www.facebook.com/profile.php?id=100054297440256" 
             target="_blank" 
             rel="noopener noreferrer"
             className={`${styles.followButton} ${styles.facebookButton}`}>
            <i className="fab fa-facebook"></i>
            追蹤我們的 Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed; 