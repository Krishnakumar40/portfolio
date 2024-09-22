import React from 'react'
import styles from './SkillsStyles.module.css'
import SkillsList from './SkillsList'
import { SkillsData } from './SkillsData'


import { useTheme } from '../../common/ThemeContext'

function Skills() {
  return (
    
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            {SkillsData.map((data,index)=>(
                <SkillsList key={index} src={data.icon} skill={data.skill} hoverColor={data.hoverColor}/>
            ))}
            </div>

    </section>
  )
}

export default Skills
