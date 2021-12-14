import React from "react";
import blogstyles from "../../styles/Blogspage.module.css";
import Link from "next/link";

type post = {
  title: string;
  slug: string;
  id: string;
  feature_image: string;
  html: string;
};

const Blog: React.FC<{ posts: post[] }> = (props) => {
  const { posts } = props;

  return (
    <div>
      <section className={blogstyles.blogspage} id="blogs">
        <h1 className={blogstyles.heading}>
          all<span> Stories</span>
        </h1>
        <div className={blogstyles.box_container}>
          {posts.map((post) => {
            return (
              <Link key={post.id} href="/post/slug" as={`/post/${post.slug}`}>
                <div className={blogstyles.box} data-aos="fade-right">
                  <div className={blogstyles.image}>
                    <img src={post.feature_image} alt="" />
                  </div>
                  <div className={blogstyles.content}>
                    <h3>{post.title}...</h3>
                    {/* {post.html} */}
                    <p>
                      {post.html.substring(0, 200).replace(/(<([^>]+)>)/gi, "")}
                      ...
                    </p>
                    <a href="#" className={blogstyles.btn}>
                      read more
                    </a>
                    <div className={blogstyles.icons}></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Blog;
