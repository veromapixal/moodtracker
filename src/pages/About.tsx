import React from 'react';
import styles from './about.module.css'; // Стили для страницы About

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>О приложении</h1>
      <p className={styles.description}>
        Это приложение позволяет вам отслеживать свои эмоции и анализировать свои мысли
        с помощью искусственного интеллекта. Просто введите текст и получите результат!
      </p>
    </div>
  );
}

export default About;
