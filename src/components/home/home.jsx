"use client"
import { useState } from "react"
import styles from "./home.module.css"
import Link from 'next/link'
import LandingView from "../landingView/landingView"
import Image from "next/image"

const Home = () => {

    const [view, setView] = useState(true)
    return (
        <div className={`${styles.container} ${view && styles.active}`}>

            <div className={styles.LogoContainer}>
                <Link href="/"
                    className={ styles.logo}>
                    Mashori
                    <span className={styles.dot}>.</span>
                </Link>
                <div className={`${styles.mainContainer} ${!view && styles.active}`}>
                    <LandingView/>
                </div>
            </div>
                {/* <Image scr="/Down.png" height={50} width={50} alt=""  unoptimized/> */}
                <Image src={view ? "Up.png" : "/Down.png"} width={30} height={30} alt="" onClick={() => setView(!view)} unoptimized className={styles.arrow}/>
            
        </div>
    )
}

export default Home
