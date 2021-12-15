import Link from "next/link";
import { useRouter } from "next/router";
import commentBox from "commentbox.io";
import { useEffect } from "react";

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
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;
  const router = useRouter();
  useEffect(() => {
    const removeCommentBox = commentBox("5674909359407104-proj");
    return () => {
      removeCommentBox();
    };
  }, [router.isFallback]);

  if (router.isFallback) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <h1>My Blog Post</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="commentbox" />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Post;
