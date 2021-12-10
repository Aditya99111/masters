import React from 'react'
import headerstyles from "../../../styles/Header.module.css"
import Link from 'next/link'
const Header = () => {
    return (

            <header className={headerstyles.header}>

                <a href="/stories" className={headerstyles.logo}> <i className="fas fa-dice-d20"></i> Guild Masters Den </a>

                <nav className={headerstyles.navbar}>
                    <a href="#home" className={headerstyles.active}>home</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className={headerstyles.icons}>
                    <Link href="/support"><button className={headerstyles.btn}>Support us!</button></Link>
                </div>

            </header>
    )
}

export default Header
