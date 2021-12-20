import React from 'react'
import herostyles from "../../../styles/Hero.module.css"
import Link from 'next/link'
const Hero = () => {
    return (

        <section className={herostyles.home} id="home">
            <div className={herostyles.herocontainer}>
                <div className={herostyles.content}>
                    <h3>Gather &apos;round </h3>
                    <p>Come; sit by the fire and listen to a tale I&apos;ve spun for you, traveler.</p>
                    <a className={herostyles.btn}> <Link href="/stories">get started</Link></a>
                </div>

            </div>
        </section>

    )
}

export default Hero
