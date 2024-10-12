import React from 'react';
import styles from './AboutStyles.module.css';

import profilePic from '../../assets/myimage.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className='sectionTitle'>About Me</h1>
      <div className={styles.aboutSection}>
        <div className={styles.profilePicContainer}>
          <img className={styles.profilePic} src={profilePic} alt="Profile Picture" />
        </div>
        <p className={styles.description}>
          I am a web developer with a passion for creating beautiful and functional websites. 
          I have experience working with React, Next.js, and other web technologies. 
          I enjoy learning new things and staying up-to-date with the latest trends in web development. 
          I am always looking for new and exciting projects to work on, and I am always looking for ways to improve my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
