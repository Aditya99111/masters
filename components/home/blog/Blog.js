import React from "react";
import blogstyle from "../../../styles/Blog.module.css";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <section className={blogstyle.blogs} id="blogs">
      <h1 className={blogstyle.heading}>
        
        our <span>blogs</span>
      </h1>

      <div className={blogstyle.box_container}>
        {posts.map((post) => {
          return (
            <Link key={post.id} href="/post/slug" as={`/post/${post.slug}`}>
              <div
                key={post.id}
                className={blogstyle.box}
                data-aos="fade-right"
              >
                <div className={blogstyle.image}>
                  <img src={post.feature_image} alt="" />
                </div>
                <div className={blogstyle.content}>
                  <h3>{post.title}</h3>
                  <p>
                    {post.html.substring(0, 200).replace(/(<([^>]+)>)/gi, "")}
                    ...
                  </p>
                  <a className={blogstyle.btn}>
                    <Link href="#"> read more</Link>
                  </a>
                  <div className={blogstyle.icons}>
                    {/* <a href="#"> <i className={blogstyle.fas}fa-calendar"></i> 1st may, 2021 </a> */}
                    {/* <a href="#"> <i className={blogstyle.fas}fa-user"></i> by admin </a> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={blogstyle.loadmorecontainer}>
        <a className={blogstyle.btn}>
          <Link href="/stories"> View More</Link>
        </a>
      </div>
    </section>
  );
};

export default Blog;
