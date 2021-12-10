import React from "react";
import blogstyles from "../../styles/Blogspage.module.css";

const BLOG_URL = "https://guild-masters-den.herokuapp.com";
const CONTENT_API_KEY = "bdd359f52eb21b10b4f5d95ae3";

type Post = {};
async function getPosts() {
  // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const titles = res.posts.map((post) => post.title);

  console.log(titles);
  console.log("hello");
  return titles;
}
export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Blog: React.FC<{ posts: string[] }> = (props) => {
  const { posts } = props;
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
