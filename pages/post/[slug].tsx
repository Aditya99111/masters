import Link from "next/link";
import { useRouter } from "next/router";
import slugstyles from "../../styles/Slug.module.css"
import Header from "../../components/home/header/Header";
import Footer from "../../components/home/footer/Footer";
import Script from "next/script";

const BLOG_URL = "https://demo.ghost.io";
const CONTENT_API_KEY = "22444f78447824223cefc48062";

async function getPost(slug: string) {
  // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  return res.posts[0];
}


type Post = {
  title: string;
  html: string;
  slug: string;
  feature_image: string;
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;
  const router = useRouter();
  if (router.isFallback) {
    return (
      
      <div className={slugstyles.loadingcontainer}>
      <p className={slugstyles.loadingpage}>Please wait! <br /> Loading....</p>
      </div>
    );
  }
{/* <>
<Script
   src="https://unpkg.com/commentbox.io/dist/commentBox.min.js" 
   strategy="lazyOnload"
/>

<Script
   strategy="lazyOnload"
   {
      commentBox('my-project-id')
   }
/>
  </> */}

  return (
    <>
    <Header/>
    <Link href="/stories">
        <a className={slugstyles.back}>←</a>
      </Link>
      <h1 className={slugstyles.heading}> {post.title}</h1>

        <div className={slugstyles.blogbody}>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
    {/* <div className="commentbox"></div> */}

    <Footer/>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Post;
