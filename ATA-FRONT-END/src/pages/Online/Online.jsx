import React from 'react';
import styles from './Online.module.css';

function Online() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.techFont}>Online or Physical Classes</h1>
        <p className={styles.techFont_info}>
          We understand that everyone learns differently. That's why we offer
          both comprehensive online and physical classes to fit your needs and
          learning style. Whether you prefer the flexibility of online learning
          or the in-person interaction of a physical classroom, we have a
          program for you.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/src/assets/1.png" alt="Online and Physical Classrooms" />
      </div>
    </div>
  );
}

export default Online;
