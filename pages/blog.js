import Link from "next/link";
import Layout from "../components/layout";
import { posts } from "../profile";




  
const PostCard = ({post}) => (
    <div className="col-md-4 p-2">
      <div className="card h-75">
        <div className="overflow">
          <img src={post.imageURL} alt={`Imagen de ${post.title}`} className="card-img-top "/>
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/post?tittle=${post.title}`} as={`/post/${post.title}`} >
            <button className="btn btn-light">Read</button>
          </Link>
        </div>
      </div>
    </div>
  )
const blog=() => (
  
      <Layout
        title={"Blog"}
        description={"Mi Blog personal"}
        footer={false}
        >
        <div className="row">
          <h1 className="text-center p-2">My Blog</h1>
          {posts.map((post,id) => (
            <PostCard post={post} key={id}/>
          ))}
        </div>
      </Layout>
   
  )

  export default blog;

