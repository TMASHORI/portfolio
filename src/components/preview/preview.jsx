
import Image from 'next/image'
import React from 'react'
import styles from "./preview.module.css"
import Link from 'next/link'

const Preview = ({ view, setView, website }) => {

    console.log(website)
    return (<>
        {
            <div className={styles.container}>
                <Image src="/Close.png" height={50} width={50} alt="" className={styles.close} unoptimized onClick={() => { setView(false) }} />
                <Image src={website.img} height={250} width={450} alt="" className={styles.img} unoptimized />
                <div className={styles.buttons}  >
                    <Link className={styles.button} href={website.site} target="_blank">
                        <Image src="/Hub.png" width={15} height={15} alt="" />
                        <p className={styles.text}>Source Code</p>
                    </Link>
                    <div className={styles.button}>
                        <Link className={styles.Mobilebutton} href={website.site} target="_blank">
                            <Image src="/Globe.png" width={15} height={15} alt="" />
                            <p className={styles.text}>Visit Page</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.infomation}>
                    <h3 className={styles.title}
                    >Title: {website.title} </h3>
                    <p className={styles.category}>Category : {website.title}  </p>
                    <p className={styles.stack}>Tech stack : {website.stack} </p>
                    <p className={styles.desc}>Description: <div className={styles.descText}>{website.desc} </div></p>
                </div>
            </div>
        }
    </>
    )
}

export default Preview
