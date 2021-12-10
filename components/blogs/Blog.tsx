import React from 'react'
// import blogstyles from '../../styles/Blogspage.module.css'

const BLOG_URL = "https://guild-masters-den.herokuapp.com"
const CONTENT_API_KEY = "bdd359f52eb21b10b4f5d95ae3"

type Post ={

}
async function getPosts(){
// curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`).then(res => res.json())

    const titles = res.posts.map((post)=>post.title)
    
    console.log(titles)
    console.log("hello")
    return titles
}   
export const getStaticProps = async ({params})=>{
    const posts = await getPosts()
    return{
        props : {posts}
    }
}


const Blog: React.FC <{posts: string[]}> = (props) => {
    const {posts} = props
    return (
   <div>
       <h1>hello</h1>
       <ul>
           {posts.map((post , index)=>{
               return(
                   <li key={index}>{post}</li>
               )
           })}
       </ul>
   </div>
    )
}

export default Blog
