import { useRouter } from "next/router"
import Layout from "../components/layout"
import { posts } from "../profile"


const Post = () => {
    const router = useRouter();
    console.log(router)

    const currentPost = posts.filter(post => post.title === router.query.tittle)[0]
    console.log(currentPost)
  return (
    <>
      <Layout
        title={`Post de ${currentPost.title}`}
        description={`Mi post de ${currentPost.title}`}
        footer={false}
        >
            <div className="card">
            <div className="text-center p-2">
                <img src={currentPost.imageURL} alt={`Imagen de ${currentPost.title}`} className="img-fluid" style={{width: '50%'}}/>
            </div>
            <div className="card-body">
          <h1>{currentPost.title}</h1>
          <p>{currentPost.content}</p>
          </div>

            </div>

        
      </Layout>
    </>
  )
}

export default Post
