import React from 'react';
import styles from './Motivation.module.css';

function Motivation() {
  const videoId = '2-VKC8g2u1Y'; // Replace with video ID if needed
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="motivation" className={styles.container}>
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Motivation to Code"
        ></iframe>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.paragraph}>
          Coding opens doors to a world of creativity and problem-solving. It
          allows you to build the future and turn your ideas into reality.
          Don't be afraid to start, embrace the challenges, and enjoy the
          process of learning and creating!
        </p>
        <p className={styles.quote}>
          "The best way to predict the future is to invent it." – Alan Kay
        </p>
      </div>
    </div>
  );
}

export default Motivation;
