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
        Web developer with a passion for creating aesthetically pleasing and functional websites. Experienced in utilizing React and Spring Boot, along with various web technologies, to deliver engaging user experiences. Committed to continuous learning and staying current with the latest trends in web development. Eager to take on new and exciting projects while consistently seeking opportunities to enhance skills and knowledge.
        </p>
      </div>
    </section>
  );
};

export default About;
