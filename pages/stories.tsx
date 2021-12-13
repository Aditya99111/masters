import React from "react";
import Header from "../components/home/header/Header";
import Blog from "../components/blogs/Blog";
const stories = (props) => {
  console.log(props);
  return (
    <div>
      <>
        <Header />
        <Blog posts={props.posts} />
      </>
    </div>
  );
};

const BLOG_URL = "https://demo.ghost.io";
const CONTENT_API_KEY = "22444f78447824223cefc48062";

type post = {};
async function getPosts() {
  // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const titles = res.posts.map((post) => post.title);

  return titles;
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const titles = res.posts.map((post) => post.title);
  console.log(titles);

  const posts = await getPosts();
  return {
    props: { posts },
  };
};

export default stories;
