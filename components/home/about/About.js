import React from 'react'
import aboutimg from "./about.png"
import Image from "next/image"
import Link from "next/link"
import aboutstyles from "../../../styles/About.module.css"
const About = () => {
    return (

        <section className={aboutstyles.about} id="about">

            <div className={aboutstyles.image}>
                <Image src={aboutimg} alt="" />
            </div>

            <div className={aboutstyles.content}>
                <h3>about <span>us?</span></h3>
                <p> As an aspiring writer seeking to enter the animation industry I seek to weave stories and tales that I can be proud of showing to the world. Get lost in the worlds created in my own head quite often. Come by and hear a tale; maybe you might stick around for another in the near future</p>
                <a className={aboutstyles.btn}><Link href="/stories">Start Reading</Link></a>
            </div>

        </section>
    )
}

export default About
