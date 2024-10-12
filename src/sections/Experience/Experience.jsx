import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../common/experiences";
import styles from './ExperienceStyles.module.css'; // Importing the CSS module


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ backgroundColor:"black" }}
    icon={
      <div className={styles.iconContainer}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className={styles.experienceTitle}>{experience.title}</h3>
      <p className={styles.experienceCompany}>{experience.company_name}</p>
    </div>
    <ul className={styles.experiencePoints}>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div>
        <h1 className={styles.sectionHeadText}>
          Work Experience
        </h1>
      </div>

      <div className={styles.experienceContainer}>
        <VerticalTimeline lineColor='var(--text-color)'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
