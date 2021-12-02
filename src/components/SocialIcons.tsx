import styles from '../styles/SocialIcons.module.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/litvaluk/" aria-label="Facebook"><FaFacebookSquare className={styles.icon} size="34" /></a>
      <a href="https://www.instagram.com/litvanius/" aria-label="Instagram"><FaInstagramSquare className={styles.icon} size="34" /></a>
      <a href="https://twitter.com/litvanius/" aria-label="Twitter"><FaTwitterSquare className={styles.icon} size="34" /></a>
      <a href="https://www.linkedin.com/in/lukaslitvan/" aria-label="LinkedIn"><FaLinkedin className={styles.icon} size="34" /></a>
      <a href="https://github.com/litvaluk/" aria-label="Github"><FaGithubSquare className={styles.icon} size="34" /></a>
    </div>
  )
}

export default SocialIcons
