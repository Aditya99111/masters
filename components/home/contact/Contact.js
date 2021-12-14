import React from 'react'
import contactstyles from "../../../styles/Contact.module.css"
const Contact = () => {

   
    return (

        <section className={contactstyles.contact} id="contact">

            <h1 className={contactstyles.heading}> <span>contact</span> us </h1>

            <div className={contactstyles.row}>


                <form action="https://sheetdb.io/api/v1/mh5pwfr9b4xep" method="POST" id="form">
                    <h3 data-aos="zoom-in">tell us something!</h3>
                    <input name="data[name]" type="text" placeholder="Your name" className={contactstyles.box} />
                    <input name="data[email]" type="email" placeholder="Your email" className={contactstyles.box} />
                    <input name="data[subject]" type="text" placeholder="Subject :" className={contactstyles.box} />
                    <textarea name="data[message]" placeholder="Your message" className={contactstyles.box} cols="30" rows="10"></textarea>
                    <input data-aos="zoom-in" type="submit" value="send message" className={contactstyles.btn} />
                </form>

            </div>

        </section>
    )
}

export default Contact
