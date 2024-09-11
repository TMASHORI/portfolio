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
                <a href="/ThatoCv.pdf" className={styles.Mobiledownload} download="MashoriCV">Download CV</a>
                <h1 className={styles.heading}>Hello 👋 i'm Thato <span>Mashori <span className={styles.dot}>.</span>
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
                        <Link href='http://github.com/TMASHORI' className={styles.socialText}>github.com/TMASHORI</Link>
                    </div>
                    <div className={styles.socialWrapper}>
                        <div className={styles.linkedin} />
                        <Link href='https://www.linkedin.com/in/thato-mashori-a103882b1/' className={styles.socialText}>thato-mashori-a103882b1/</Link>
                    </div>
                    <div className={styles.socialWrapper}>
                        <div className={styles.mail} />
                        <Link href='mailto:chachumashori@gmail.com' className={styles.socialText}>chachumashori@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <a href="/ThatoCv.pdf" className={styles.download} download="MashoriCV">Download CV</a>
                <Image src="/Avatar.png" width={700} height={700} alt="" className={styles.avatar} unoptimized/>

            </div>
        </section>
    )
}

export default LandingView
