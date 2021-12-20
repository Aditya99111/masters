import React from 'react'
import pricing from "../../styles/Pricng.module.css"
// import ramen from "./unknown.png"
const Pricing = () => {
  return (

    <div className={pricing.support}>


      <h1 className={pricing.heading}> Support <span>my work</span> </h1>

      <div className={pricing.wrapperabcd}>

        <div className="h1">
          <h1 className={pricing.headinga}>buy me a coffee</h1>
        </div>

        <div className="h1">
          <h1 className={pricing.headinga}>buy me a pen</h1>
        </div>

        <div className="h1">
          <h1 className={pricing.headinga}>buy me a lunch</h1>
        </div>

      </div>
      <div className={pricing.wrapperabc}>

        <a href="https://buy.stripe.com/test_3cscPQ7x57K97vOdQT">
          <div className={pricing.img}>
            <img title="buy me a coffee" src="data:image/png;base64,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" alt="" />
          </div>
        </a>
        <a href="https://buy.stripe.com/test_3cscPQ7x57K97vOdQT">
          <div className={pricing.img}>
            <img title="buy me a notebook" src="https://img.freepik.com/free-vector/book-pen-cartoon-icon-illustration-education-object-icon-concept-isolated-flat-cartoon-style_138676-2145.jpg?size=338&ext=jpg" alt="" />
          </div>
        </a>
        <a href="https://buy.stripe.com/test_3cscPQ7x57K97vOdQT">
          <div className={pricing.img}>
            <img title="buy me a lunch" src="https://i.imgur.com/MbQsN2F.png" alt="" />
          </div>
        </a>


      </div>



      <div className={pricing.wrapperabc}>
        <div className={[pricing.item, pricing.item_1].join(" ")}>
          <h3>trial</h3>
          <img src="https://i.imgur.com/OtJ3Uaw.png" alt="cycle_image" />
          <div className="info">
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div className={pricing.price}>
            <h3><sup>$</sup>5<sub>/14D</sub><sup></sup></h3>
          </div>
          <div className={pricing.btn}>
            <a href="#">check out</a>
          </div>
        </div>
        <div className={[pricing.item, pricing.item_2].join(" ")}>
          <h3>Premium</h3>
          <img src="https://i.imgur.com/U0TRjs5.png" alt="bike_image" />
          <div className={pricing.info}>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div className={pricing.price}>
            <h3><sup>$</sup>10<sub>/month</sub></h3>
          </div>
          <div className={pricing.btn}>
            <a href="https://buy.stripe.com/test_5kA9DE6t17K917qeUV">check out</a>
          </div>
        </div>
        <div className={[pricing.item, pricing.item_3].join(" ")}>
          <h3>Ultimate</h3>
          <img src="https://i.imgur.com/8eO9O9M.png" alt="bike_image" />
          <div className={pricing.info}>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div className={pricing.price}>
            <h3><sup>$</sup>15<sub>/month</sub></h3>
          </div>
          <div className={pricing.btn}>
            <a href="https://buy.stripe.com/test_7sIbLM5oX8OdbM47ss">check out</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
