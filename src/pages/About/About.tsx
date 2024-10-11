import styles from './about.module.css'; // �⨫� ��� ��࠭��� About

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About page</h1>
      <p className={styles.description}>About page content</p>
    </div>
  );
}

export default About;
