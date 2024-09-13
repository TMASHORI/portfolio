"use client"
import React, { useState } from 'react'
import styles from "./cards.module.css"
import Image from 'next/image'
import Preview from '../preview/preview'
import Link from 'next/link'

const data = [
    {
        id: 1,
        title: "Madulo.com",
        category: "Rent and Accomidation",
        desc: "This is a Rental full stack app for local mine workers in South Africa",
        repo: "http://github.com/TMASHORI/RentApp",
        site: "http://madulo.vercel.app/",
        type: "website",
        stack: "Next | Mongo | NextAuth | Figma",
        img: "/Madulo.png",
    },
    {
        id: 2,
        title: "YouTravel.com",
        category: "Travel and Bookings",
        desc: "This is a Travel Agency app that helps travelers find they're holiday destinations",
        repo: "http://github.com/TMASHORI/travelblog",
        site: "http://travelmania.vercel.app/",
        type: "website",
        stack: "Next | Mongo | NextAuth | Figma",
        img: "/Travel.png",
    },
]

const Cards = () => {

    const [view, setView] = useState(false)
    const [card, setCard] = useState(null)

    return (
        <article className={styles.container}>
            {data.map((card, i) => {
                return <div key={i} className={styles.singleCard}>
                    <div className={styles.imgContainer}>
                        <Image src={card.img} width={100} height={100} alt="" unoptimized />
                    </div>
                    <div className={styles.infomationContainer}>
                        <h3 className={styles.heading}>{card.title}</h3>
                        <p className={styles.category}>{card.category}</p>
                    </div>
                    <div className={styles.button} onClick={() => { setView(!view); setCard(card) }}>
                        <Image src="/Vector.png" width={25} height={25} alt="" />
                        <p className={styles.text}>Preview</p>
                    </div>
                    {<div className={styles.Mobilebuttons}  >
                        <Link
                            href={card.repo}
                            target="_blank"
                            className={styles.Mobilebutton}
                        >
                            <Image src="/Hub.png" width={15} height={15} alt="" />
                            <p className={styles.text}>Source Code</p>
                        </Link>
                        <div className={styles.Mobilebutton}>
                            <Link 
                            href={card.site} 
                            target="_blank"
                            className={styles.Mobilebutton} 
                            >
                                <Image src="/Globe.png" width={15} height={15} alt="" />
                                <p className={styles.text}>Visit Page</p>
                            </Link>
                        </div>
                    </div>}
                </div>
            })}
            {view &&
                <Preview view={view} setView={setView} website={card} />
            }
        </article>
    )
}

export default Cards