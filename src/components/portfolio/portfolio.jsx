import Image from "next/image"
import styles from "./portfolio.module.css"
import Cards from "../cards/cards"

const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.container}>
            <div className={styles.linkContainer}>
                <a href='#about' className={styles.link} >
                    Scroll Up
                    <Image src="/Up.png" alt='' width={50} height={50} className={styles.img} />
                </a>
            </div>
            <div className={styles.infomationContainer}>
                <h1 className={styles.heading}>Featured Works</h1>
                <a href="/Mashori.pdf" className={styles.Mobiledownload} target="_blank" >Download CV</a>
                <Cards />
            </div>
        </section>
    )
}

export default Portfolio
