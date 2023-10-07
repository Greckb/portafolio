
import Link from "next/link";
import Layout from "../components/layout";
import _error from "./_error";



const Github = ({user, statusCode}) => {
if(statusCode){
  return <_error statusCode={statusCode} />
}
return (
  <Layout title={"GitHub"} description={"Mis proyectos de GitHub"} footer={false} dark>
    <div class="row">
      <div className="col-md-4 offset-md-4">
        <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt={`Imagen de ${user.name}`} />
            <p className="mt-3 fw-bold">{user.bio}</p>
            <Link href={user.blog} className="btn btn-outline-secondary rounded mt-2" target="_blank">My Blog</Link>
            <Link href={user.html_url} className="btn btn-outline-secondary rounded mt-2" target="_blank">Go to GitHub</Link>
        </div>
      </div>

    </div>
   

  </Layout>
)
}

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/Greckb');
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;


  return {
    props: {
      user: data,
      statusCode
    }
  }
}

export default Github;