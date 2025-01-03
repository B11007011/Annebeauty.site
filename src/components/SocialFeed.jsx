import React, { useEffect } from 'react';
import styles from './SocialFeed.module.css';

const SocialFeed = () => {
  useEffect(() => {
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: 'YOUR_FACEBOOK_APP_ID',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/zh_TW/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

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
                src={`https://www.instagram.com/a0081606455/embed`}
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
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
            <h3>Facebook 評價</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.iframeContainer}>
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/profile.php?id=100054297440256"
                data-tabs="timeline,reviews"
                data-width="500"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote 
                  cite="https://www.facebook.com/profile.php?id=100054297440256" 
                  className="fb-xfbml-parse-ignore"
                ></blockquote>
              </div>
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