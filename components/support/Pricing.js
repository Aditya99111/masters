import React from 'react'
import pricing from "../../styles/Pricng.module.css"
const Pricing = () => {
    return (
      <div className={pricing.support}>
<h1 className={pricing.heading}> Support <span>my work</span> </h1>
        <div className={pricing.wrapper}>
        <div className={[pricing.item ,pricing.item_1]}>
          <h3>Starter</h3>
          <img src="https://i.imgur.com/OtJ3Uaw.png" alt="cycle_image"/>
          <div className="info">
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
            <p>stories</p>
          </div>
          <div className={pricing.price}>
             <h3><sup>$</sup>5<sub>/month</sub></h3>
          </div>
          <div className={pricing.btn}>
              <a href="#">check out</a>
          </div>
      </div>
        <div className={[pricing.item ,pricing.item_2]}>
          <h3>Premium</h3>
          <img src="https://i.imgur.com/U0TRjs5.png" alt="bike_image"/>
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
              <a href="#">check out</a>
          </div>
      </div>
        <div className={[pricing.item ,pricing.item_3]}>
          <h3>Ultimate</h3>
          <img src="https://i.imgur.com/8eO9O9M.png" alt="bike_image"/>
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
              <a href="#">check out</a>
          </div>
      </div>
    </div>
    </div>
    )
}

export default Pricing
