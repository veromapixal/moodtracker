// src/pages/Home.tsx
import React from 'react';
import Button from '../components/Button';
import styles from './home.module.css'; // Импортируем стили для Home

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Your Personal Mood Analyzer</h1>
      </header>

      <section className={styles.description}>
        <p>
          This site can help you monitor your mood level by analyzing your messages
          via AI and NLP.
        </p>
      </section>

      <section className={styles.tryOutSection}>
        <Button
          label="Try me out!"
          onClick={() => alert('Try me out button clicked!')}
          color="blue"
          size="large"
        />
      </section>

      <section className={styles.infoSection}>
        <div className={styles.imagePlaceholder}>Image</div>
        <div className={styles.swipeInfo}>
          <p>Swipe for more information.</p>
        </div>
      </section>

      <footer className={styles.quoteSection}>
        <blockquote>
          "Life becomes easier when you learn to accept an apology you never got."
        </blockquote>
      </footer>
    </div>
  );
};

export default Home;