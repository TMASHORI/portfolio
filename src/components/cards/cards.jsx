"use client"
import React, { useState } from 'react'
import styles from "./cards.module.css"
import Image from 'next/image'
import Preview from '../preview/preview'

const data = [
    {
        title: "Madulo.com",
        category: "Rent and Accomidation",
        desc: "This is a Rental full stack app for local mine workers in South Africa",
        path: "/",
        type: "website",
        stack: "Next | Mongo | NextAuth | Figma",
        img: "/briefcase.png",
    },
    {
        title: "YouTravel.com",
        category: "Travel and Bookings",
        desc: "This is a Travel Agency app that helps travelers find they're holiday destinations",
        path: "/",
        type: "website",
        stack: "Next | Mongo | NextAuth | Figma",
        img: "/briefcase.png",
    },
]


const Cards = () => {
    const [view, setView] = useState(true)
    return (
        <article className={styles.container}>
            {data.map((card, i) => {
                return <div key={i} className={styles.singleCard}>
                    <div className={styles.img}>
                        <Image src={card.img} width={100} height={100} alt="" unoptimized />
                    </div>
                    <div className={styles.infomationContainer}>
                        <h3 className={styles.heading}>{card.title}</h3>
                        <p className={styles.category}>{card.category}</p>
                    </div>
                    <div className={styles.button} onClick={() => { setView(!view) }}>
                        <Image src="/Vector.png" width={25} height={25} alt="" />
                        <p className={styles.text}>Preview</p>
                    </div>


                </div>
            })}
            {view &&
                <Preview view={view} setView={setView} />
            }
        </article>
    )
}

export default Cards