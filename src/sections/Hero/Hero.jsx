import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon= theme === 'light'?sun:moon;
    const twitterIcon= theme === 'light'?twitterLight:twitterDark;
    const githubIcon= theme === 'light'?githubLight:githubDark;
    const linkedinIcon= theme === 'light'?linkedinLight:linkedinDark;

    const [text]=useTypewriter(
      {
        words:['WEB','BLOCKCHAIN','JAVA'],
        loop:0,
        delaySpeed: 2000, // Time before each loop starts
    typeSpeed: 80, // Typing speed
    deleteSpeed: 50, // Speed of deleting characters
      }
    );
    console.log(text); 
    
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of krishna"/>
        <img className={styles.colorMode} src={themeIcon} alt='Color mode icon'
        onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
           I'm Krishna
            <br/>
            kumar
        </h1>
        <span>
        <h2>
          {text} Developer

      </h2>
      </span>
          
        <span>
            <a href='https://twitter.com/krishna' target="_blank">
            <img src={twitterIcon} alt='x icon'/>
            </a>
            <a href='https://github.com/Krishnakumar40' target="_blank">
            <img src={githubIcon} alt='Github icon'/>
            </a>
            <a href='https://www.linkedin.com/in/krishnakumarm2003/' target="_blank">
            <img src={linkedinIcon} alt='linkedin icon'/>
            </a>
        </span>
        <p className={styles.description}>
            With a passion for developing modern React web apps for commercial
            bussiness.
        </p>

        
        <a href={CV} download="Resume">
  <button className="hover" type="button">Resume</button>
</a>
      </div>
    </section>
  )
}

export default Hero;
