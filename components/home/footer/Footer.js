import React from 'react'
import fotterstyles from "../../../styles/Footer.module.css"
const Footer = () => {
    return (

        <section className={fotterstyles.footer} id="footer">
            <div className={fotterstyles.credit}> &copy; all rights reserved <span>Guild Masters Den</span> @ 2021 </div>
        </section>
    )
}

export default Footer
