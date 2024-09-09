import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.linkContainer}>
        <a href='#portfolio' className={styles.link} >
          View Portfolio
          <Image src="/Work.png" alt='' width={50} height={50} className={styles.img} />
        </a>
      </div>
      <div className={styles.infomationContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>About Me</h1>
          <p className={styles.text}>I am a self-taught software developer who loves to create websites
            that are easy on the eye and functional for end users.
            <br />
            <br />
            I have been coding for 5 years now ,<br/>and its been a great journey.

          </p>
          <div className={styles.social}>
            <Image src="/Mail.png" height={30} width={30} alt=""/>
          <Link href='mailto:chachumashori@gmail.com' className={styles.mail} >chachumashori@gmail.com</Link>
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <h1 className={styles.heading}>Tech stack</h1>
      </div>
    </div>
    </section >
  )
}

export default About
