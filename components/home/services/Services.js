import React from 'react'
import servicesstyles from "../../../styles/Services.module.css"
const Services = () => {
    return (

        <section className={servicesstyles.services} id="services" data-aos="zoom-out-left">

            <div className={servicesstyles.heading}>
                <span>Gather round the Hearth
                </span>
                <h1>Provisions</h1>
            </div>

            <div className={servicesstyles.box_container}>

                <div className={servicesstyles.box}>
                    <img src="image/icon-1.svg" alt="" />
                    <h3>Read online for free.</h3>
                    <p>Episodes are available Monthly On mobile and PC. Post-Apocalyptic TTRPG Coming SOON.

                    </p>
                </div>

                <div className={servicesstyles.box}>
                    <img src="image/icon-2.svg" alt="" />
                    <h3>Anime Fan Fiction.</h3>
                    <p>My Hero Academia, Yu-Gi-Oh, Fire Force and more!
                        Post-Apocalyptic TTRPG Coming SOON
                    </p>
                </div>

                <div className={servicesstyles.box}>
                    <img src="image/icon-3.svg" alt="" />
                    <h3>supporters get early content.</h3>
                    <p> Support Directly online or via Patreon. Support Development of Upcoming Projects

                    </p>
                </div>



            </div>

        </section>

    )
}

export default Services
