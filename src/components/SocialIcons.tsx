import styles from '../styles/SocialIcons.module.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/litvaluk/" ><FaFacebookSquare className={styles.icon} size="32" /></a>
      <a href="https://www.instagram.com/litvanius/"><FaInstagramSquare className={styles.icon} size="32" /></a>
      <a href="https://twitter.com/litvanius/"><FaTwitterSquare className={styles.icon} size="32" /></a>
      <a href="https://www.linkedin.com/in/lukaslitvan/"><FaLinkedin className={styles.icon} size="32" /></a>
      <a href="https://github.com/litvaluk/"><FaGithubSquare className={styles.icon} size="32" /></a>
    </div>
  )
}

export default SocialIcons
