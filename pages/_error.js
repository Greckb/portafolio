import Layout from "../components/layout"



const _error = ({statusCode}) => {
  return (
    <Layout title={"Error"} description={"Pagina no reconocida"} footer={false}>

        {
        statusCode ? (
            <h3 className="text-center mt-2">Could not Load your page: Status Code {statusCode}</h3> 
        ) : (
            <h3 className="text-center mt-2">Could not Load your page</h3>
        )
        }

       
    </Layout>
  )
}

export default _error
