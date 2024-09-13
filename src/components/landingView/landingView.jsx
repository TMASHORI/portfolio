import React from 'react'
import styles from "./landing.module.css"
import { Mulish } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import WordRotate from "@/components/magicui/word-rotate";

const LandingView = () => {
    return (
        <section className={`${styles.container}`}>
            <div className={styles.infomationContainer}>
                <a href="/Mashori.pdf" className={styles.Mobiledownload} target="_blank" >Download CV</a>
                <h1 className={styles.heading}>Hello 👋 im Thato <span>Mashori <span className={styles.dot}>.</span>
                    <WordRotate
                        className="text-2xl font-bold text-black dark:text-white"
                        words={["Front-End", "UI/UX"]}
                    />
                </span>
                    developer , get in touch with me !
                </h1>
                <div className={styles.socialContainer}>
                    <div className={styles.socialWrapper}>
                        <div className={styles.github} />
                        <Link href='http://github.com/TMASHORI' target="_blank" className={styles.socialText}>github.com/TMASHORI</Link>
                    </div>
                    <div className={styles.socialWrapper}>
                        <div className={styles.linkedin} />
                        <Link href='https://www.linkedin.com/in/thato-mashori-a103882b1/' target="_blank" className={styles.socialText}>thato-mashori-a103882b1/</Link>
                    </div>
                    <div className={styles.socialWrapper}>
                        <div className={styles.mail} />
                        <Link href='mailto:chachumashori@gmail.com' target="_blank" className={styles.socialText}>chachumashori@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <a href="/Mashori.pdf" className={styles.download} target="_blank">Download CV</a>
                <Image src="/Avatar.png" width={700} height={700} alt="" className={styles.avatar} unoptimized/>

            </div>
        </section>
    )
}

export default LandingView
