import styles from "./portfolio.module.css"

const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.container}>
            <div className={styles.linkContainer}>
                <a href='#about' className={styles.aboutLink}>About Me</a>
            </div>
        </section>
    )
}

export default Portfolio
