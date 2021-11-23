import type { NextPage } from 'next'
import Image from 'next/image'
import SocialIcons from '../components/SocialIcons'
import styles from '../styles/Home.module.css'
import profilePic from '../images/profile-pic.jpg'
import Particles from "react-tsparticles";
import { particlesOptions } from '../constants'

const Home: NextPage = () => {
  return (
    <div>
      <Particles options={particlesOptions} style={{}} />
      <div className={styles.container}>
        <Image className={styles.image} src={profilePic} width="250px" height="250px" layout="intrinsic" placeholder="blur" />
        <h1>Lukáš Litvan</h1>
        <h2>Converting caffeine into code since 2017.</h2>
        <SocialIcons />
      </div>
    </div>
  )
}

export default Home
