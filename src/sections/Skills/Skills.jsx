import React from 'react'
import styles from './SkillsStyles.module.css'
import MarkLight from '../../assets/checkmark-light.svg'
import MarkDark from '../../assets/checkmark-dark.svg'
import SkillsList from './SkillsList'
import { SkillsData } from './SkillsData'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const {theme,toggleTheme}=useTheme();
    const checkMarkIcon= theme === 'light'?MarkLight:MarkDark;
  return (
    
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            {SkillsData.map((data,index)=>(
                <SkillsList key={index} src={checkMarkIcon} skill={data.skill}/>
            ))}
            </div>

    </section>
  )
}

export default Skills
