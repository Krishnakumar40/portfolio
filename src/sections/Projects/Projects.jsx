import React from 'react'
import Weather from '../../assets/Weather-app.png'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import { projectData } from '../../common/projectData'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          {projectData.map((project,index)=>(
            <ProjectCard 
            key={index}
            src={project.src} 
            link={project.link}
            h3={project.h3}
            p={project.p}
            />
          ))}
            
        </div>
      
    </section>
  )
}

export default Projects
