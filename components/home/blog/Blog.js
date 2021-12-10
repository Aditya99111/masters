import React from 'react'
import blogstyle from "../../../styles/Blog.module.css"
import Link from 'next/link'
const Blog = () => {
    return (

        <section className={blogstyle.blogs} id="blogs">

            <h1 className={blogstyle.heading}> our <span>blogs</span> </h1>

            <div className={blogstyle.box_container}>

                <div className={blogstyle.box} data-aos="fade-right">
                    <div className={blogstyle.image}>
                        <img src="image/1.jpeg" alt="" />
                    </div>
                    <div className={blogstyle.content}>
                        <h3>Lorem ipsum dolor sit amet..</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, harum!</p>
                        <Link href="#" className={blogstyle.btn}>read more</Link>
                        <div className={blogstyle.icons}>
                            {/* <a href="#"> <i className={blogstyle.fas}fa-calendar"></i> 1st may, 2021 </a> */}
                            {/* <a href="#"> <i className={blogstyle.fas}fa-user"></i> by admin </a> */}
                        </div>
                    </div>
                </div>
                <div className={blogstyle.box} data-aos="fade-right">
                    <div className={blogstyle.image}>
                        <img src="image/1.jpeg" alt="" />
                    </div>
                    <div className={blogstyle.content}>
                        <h3>Lorem ipsum dolor sit amet..</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, harum!</p>
                        <Link href="#" className={blogstyle.btn}>read more</Link>
                        <div className={blogstyle.icons}>
                            {/* <a href="#"> <i className={blogstyle.fas}fa-calendar"></i> 1st may, 2021 </a> */}
                            {/* <a href="#"> <i className={blogstyle.fas}fa-user"></i> by admin </a> */}
                        </div>
                    </div>
                </div>
                <div className={blogstyle.box} data-aos="fade-right">
                    <div className={blogstyle.image}>
                        <img src="image/1.jpeg" alt="" />
                    </div>
                    <div className={blogstyle.content}>
                        <h3>Lorem ipsum dolor sit amet..</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, harum!</p>
                        <Link href="#" className={blogstyle.btn}>read more</Link>
                        <div className={blogstyle.icons}>
                            {/* <a href="#"> <i className={blogstyle.fas}fa-calendar"></i> 1st may, 2021 </a> */}
                            {/* <a href="#"> <i className={blogstyle.fas}fa-user"></i> by admin </a> */}
                        </div>
                    </div>
                </div>

               
            </div>
            <Link href="/stories" className={blogstyle.btn}>view more</Link>

        </section>

    )
}

export default Blog
