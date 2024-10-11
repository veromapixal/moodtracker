import React from 'react';
import styles from './about.module.css'; // �⨫� ��� ��࠭��� About

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>� �ਫ������</h1>
      <p className={styles.description}>
        �� �ਫ������ �������� ��� ��᫥������ ᢮� �樨 � �������஢��� ᢮� ��᫨
        � ������� �����⢥����� ��⥫����. ���� ������ ⥪�� � ������ १����!
      </p>
    </div>
  );
}

export default About;
