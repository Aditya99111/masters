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

const {BLOG_URL,CONTENT_API_KEY} = process.env;

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon2.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon2.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <title>Guild masters den</title>
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
