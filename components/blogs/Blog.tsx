import React from "react";
import blogstyles from "../../styles/Blogspage.module.css";

const Blog: React.FC<{ posts: string[] }> = (props) => {
  const { posts } = props;

  console.log(posts);
  return (
    <div>
      <section className={blogstyles.blogspage} id="blogs">
        <h1 className={blogstyles.heading}>
          {" "}
          all <span>Stories</span>{" "}
        </h1>

        <div className={blogstyles.box_container}>
          <h1>hello</h1>
          <ul>
            <li>hi</li>
            {posts.map((post, index) => {
              return (
                <div
                  key={index}
                  className={blogstyles.box}
                  data-aos="fade-right"
                >
                  <div className={blogstyles.image}>
                    <img src="image/1.jpeg" alt="" />
                  </div>
                  <div className={blogstyles.content}>
                    <h3>Lorem ipsum dolor sit amet..</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, harum!
                    </p>
                    <a href="#" className={blogstyles.btn}>
                      read more
                    </a>
                    <div className={blogstyles.icons}></div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog;
