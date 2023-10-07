import Link from "next/link"
import Layout from "../components/layout"




export default function page404() {
  return (
    <>
    <Layout title={"Error"} description={"Pagina no reconocida"}>
        <div className="text-center">

        <h1>404</h1>
        <p>This page doesn't exist. Please return to <Link href="/">Home</Link></p>
        </div>

    </Layout>
    </>
  )
}
