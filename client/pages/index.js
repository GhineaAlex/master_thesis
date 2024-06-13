import React from 'react';
import buildClient from '../api/build-client';
import styles from '../LandingPage.module.css'; // Assuming you have a CSS module for styling

const LandingPage = ({ currentUser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/path-to-your-image.jpg" alt="Banking App" className={styles.heroImage} />
        <h1>Welcome to notBank</h1>
      </div>
      <div className={styles.loginStatus}>
        {currentUser ? (
          <h2>You are signed in</h2>
        ) : (
          <h2>You are NOT signed in</h2>
        )}
      </div>
      <div className={styles.navigation}>
        <button className={styles.button}>About Us</button>
        <button className={styles.button}>Services</button>
        <button className={styles.button}>Contact</button>
      </div>
    </div>
  );
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  console.log("Test landing page");
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
