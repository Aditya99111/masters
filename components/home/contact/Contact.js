import React from 'react'
import contactstyles from "../../../styles/Contact.module.css"
const Contact = () => {
    return (

        <section className={contactstyles.contact} id="contact">

            <h1 className={contactstyles.heading}> <span>contact</span> us </h1>

            <div className={contactstyles.row}>


                <form action="">
                    <h3 data-aos="zoom-in">tell us something!</h3>
                    <input data-aos="zoom-in" type="text" placeholder="your name" className={contactstyles.box} />
                    <input data-aos="zoom-in" type="email" placeholder="your email" className={contactstyles.box} />
                    <input data-aos="zoom-in" type="number" placeholder="your number" className={contactstyles.box} />
                    <textarea data-aos="zoom-in" placeholder="your message" className={contactstyles.box} cols="30" rows="10"></textarea>
                    <input data-aos="zoom-in" type="submit" value="send message" className={contactstyles.btn} />
                </form>

            </div>

        </section>
    )
}

export default Contact
