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

async function getPosts() {
  // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,id`
  ).then((res) => res.json());

  return res.posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 10,
  };
};

export default stories;
