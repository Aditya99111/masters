import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/home/hero/Hero";
import About from "../components/home/about/About";
import Contact from "../components/home/contact/Contact";
import Services from "../components/home/services/Services";
import Blog from "../components/home/blog/Blog";
import Header from "../components/home/header/Header";
import Footer from "../components/home/footer/Footer";

const BLOG_URL = "https://demo.ghost.io";
const CONTENT_API_KEY = "22444f78447824223cefc48062";

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Guild masters den</title>
        <meta property="og:title" content="Guild masters den" key="title" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Blog posts={props.posts} />
      <Footer />
    </div>
  );
}

async function getPosts() {
  // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,id,feature_image, html`
  ).then((res) => res.json());

  return res.posts.slice(0, 3);
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 10,
  };
};
