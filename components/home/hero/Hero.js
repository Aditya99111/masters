import React from 'react'
import herostyles from "../../../styles/Hero.module.css"
import Link from 'next/link'
const Hero = () => {
    return (

            <section className={herostyles.home} id="home">

                <div className={herostyles.content}>
                    <h3>Gather round </h3>
                    <p>Come; sit by the fire and listen to a tale I&apos;ve spun for you, traveler.</p>
                    <Link href="/stories" className={herostyles.btn}>get started</Link>
                </div>


            </section>

    )
}

export default Hero
