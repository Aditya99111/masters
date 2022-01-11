import React from "react";
import Header from "../components/home/header/Header";
import Footer from "../components/home/footer/Footer";
import Blog from "../components/blogs/Blog";
import Head from "next/head";

const {BLOG_URL,CONTENT_API_KEY} = process.env;

const stories = (props) => {
  return (
    <div>
      <>
        <Head>
          <title>All Stories</title>
          <meta property="og:title" content="All Stories" key="stories" />
        </Head>
        <Header />
        <Blog posts={props.posts} />
        <Footer />
      </>
    </div>
  );
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,id,feature_image, html`
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
