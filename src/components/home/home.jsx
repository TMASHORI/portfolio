"use client"
import { useState } from "react"
import styles from "./home.module.css"
import Link from 'next/link'

const home = () => {

    const [view, setView] = useState(false)
    return (
        <div className={`${styles.container} ${view && styles.active}`}>

            <div className={styles.LogoContainer}>
                <Link href="/"
                    className={`${styles.basker} ${styles.logo} `}>
                    Mashori
                    <span className={styles.dot}>.</span>
                </Link>
                <div className={`${styles.mainContainer} ${!view && styles.active}`}>
                    Hello World
                </div>
            </div>
                <button className={styles.button} onClick={() => setView(!view)}>Click</button>
        </div>
    )
}

export default home
