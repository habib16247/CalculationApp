import React from 'react';
import styles from "../../Pages/Users/User.module.css";
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.list}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.title}>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className={styles.section}>
          <h4 className={styles.title}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#facebook"><img className={styles.social} src={"/src/assets/image/facebook.png"} alt="" /></a>
            <a href="#facebook"><img className={styles.social} src={"/src/assets/image/instagram.png"} alt="" /></a>
            <a href="#facebook"><img className={styles.social} src={"/src/assets/image/twitter.png"} alt="" /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2023 MyWebsite.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer