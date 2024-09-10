import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import Link from 'next/link'
import IconCloud from "@/components/magicui/icon-cloud";


const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];



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
            I have been coding for 5 years now ,<br />and its been a great journey.

          </p>
          <div className={styles.social}>
            <Image src="/Mail.png" height={30} width={30} alt="" />
            <Link href='mailto:chachumashori@gmail.com' className={styles.mail} >chachumashori@gmail.com</Link>
          </div>
        </div>
        <div className={styles.imagesContainer}>
          <span className={styles.text}> <span className={styles.dot}>*</span>These are some of the technologies i use </span>
          <div className="relative flex h-full w-full max-w-[1rem] 
          items-center 
          justify-center 
          overflow-hidden 
          rounded-lg 
          border 
          bg-background 
          px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section >
  )
}

export default About
