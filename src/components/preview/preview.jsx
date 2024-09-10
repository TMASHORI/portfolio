import Image from 'next/image'
import React from 'react'
import styles from "./preview.module.css"

const Preview = ({view,setView}) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttons}  >
                <div className={styles.button}>
                    <Image src="/Github.png" width={15} height={15} alt="" />
                    <p className={styles.text}>Source Code</p>
                </div>
                <div className={styles.button}>
                    <Image src="/Globe.png" width={15} height={15} alt="" />
                    <p className={styles.text}>Visit Page</p>
                </div>
            </div>
        </div>
    )
}

export default Preview
