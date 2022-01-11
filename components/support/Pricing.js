import React from 'react'
import pricing from "../../styles/Pricng.module.css"
import ramen from "./ramen.jpg"
import coffee from "./coffee.png"
import pen from "./pen.jpg"
import silver from "./silver.png"
import gold from "./gold.png"
import Image from 'next/image'
import plat from "./plat.png"
const Pricing = () => {
  return (

    <div className={pricing.support}>


      <h1 className={pricing.heading}> Support <span>my work</span> </h1>

      <div className={pricing.wrapperabcd}>

        <div className="h1">
          <h1 className={pricing.headinga}>buy me a coffee</h1>
          <h1 className={pricing.heading}><sup>$</sup>2.50</h1>
        </div>

        <div className="h1">
          <h1 className={pricing.headinga}>buy me a pen</h1>
          <h1 className={pricing.heading}><sup>$</sup>6.50</h1>

        </div>

        <div className="h1">
          <h1 className={pricing.headinga}>buy me a lunch</h1>
          <h1 className={pricing.heading}><sup>$</sup>12.50</h1>
        </div>

      </div>
      <div className={pricing.wrapperabc}>

        <a href="https://buy.stripe.com/00g16naWpa3d20U3ci">
          <div className={pricing.img}>
            <Image className={pricing.img} title="buy me a coffee" src={coffee} alt="buy me a coffee" />
          </div>
        </a>
        <a href="https://buy.stripe.com/8wMaGX0hL2ALgVOfZ6">
          <div className={pricing.img}>
            <Image className={pricing.img} title="buy me a pen" src={pen} alt="buy me a pen" />
          </div>
        </a>
        <a href="https://buy.stripe.com/14kg1h9Slejt8pi8wD">
          <div className={pricing.img}>
            <Image className={pricing.img} title="buy me a lunch" src={ramen} alt="buy me a lunch" />
          </div>
        </a>
      </div>
      <div className={pricing.wrapperabc}>
        <div className={[pricing.item, pricing.item_1].join(" ")}>
          <h3>silver support</h3>
          <Image height="200" width="200" className={pricing.image} src={silver} alt="cycle_image" />
          <div className={pricing.info}>
            <p>Our Thanks</p>
            <p>Early access to chapters</p> 
          </div>
          <div className={pricing.price}>
            <h3><sup>$</sup>2<sub>/month</sub><sup></sup></h3>
          </div>
          <div className={pricing.btn}>
            <a href="https://buy.stripe.com/7sI9CT7KdcbldJCcMV">check out</a>
          </div>
        </div>
        <div className={[pricing.item, pricing.item_2].join(" ")}>
          <h3>Gold Support</h3>
          <Image height="200" width="200" className={pricing.image} src={gold} alt="bike_image" />
          <div className={pricing.info}>
            <p className={pricing.black}>all features in silver</p>
            <p className={pricing.black}>+</p>
            <p>Discord Access</p>
            <p>special event invite</p>

          </div>

          <div className={pricing.price}>
            <h3><sup>$</sup>5<sub>/month</sub></h3>
          </div>
          <div className={pricing.btn}>
            <a href="https://buy.stripe.com/cN28yP0hL2ALcFycMW">check out</a>
          </div>
        </div>
        <div className={[pricing.item, pricing.item_3].join(" ")}>
          <h3>Platinum Support</h3>
          <Image height="200" width="200" className={pricing.image} src={plat} alt="bike_image" />
          <div className={pricing.info}>
            <p className={pricing.black}>All features in gold</p>
            <p className={pricing.black}>+</p>
            <p>personal meetings with dev team</p>
            <p>Members discount 20% on merch and art</p>
            <p>$10 Monthly credit to merch store</p>
            <p>private event live streams</p>
            <p>artwork (comming soon)</p>
            
          </div>
          <div className={pricing.price}>
            <h3><sup>$</sup>10<sub>/month</sub></h3>
          </div>
          <div className={pricing.btn}>
            <a href="https://buy.stripe.com/cN29CT2pT4ITdJC6oz">check out</a>
          </div>
        </div>

      

        
     

      </div>
    </div>
  )
}

export default Pricing
