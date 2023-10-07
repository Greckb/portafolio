import Link from "next/link";
import TypewriterEffect from '../components/TypewriterEffect';
import Layout from "../components/layout";




export default function Index() {


  return (
    <>
      <Layout title={"Inicio"} description={"Portafolio de Raul Lopez"}>
        {/** Header Class */}

        <div>
    
      <TypewriterEffect />
    </div>

        {/* <header className="row">
          <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="ryan-ray-profile2.jpeg"
                    alt="Foto Portafolio"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h1>Raul Lopez</h1>
                  <h3>FullStack Developer</h3>
                  <p>
                  ¡Hola! Soy Raul Lopez, un entusiasta desarrollador web junior con una pasión por crear experiencias en línea excepcionales. <br></br>Permíteme contarte un poco sobre mí:
                  </p>
                  <a href="/hireme">Hire me</a>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        {/** Second part **/}
        {/* 
        <div className="row py-2">
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <h1>Skills</h1>

                {skills.map(({ skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{skill}</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progress-bar"
                        style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card bg-light">
              <div className="card-body">
                <h1>Experience</h1>
                <ul>
                  {experience.map(({ name, age, description }, i) => (
                    <li className="py-3" key={i}>
                      <h3>{name}</h3>
                      <h5>{age}</h5>
                      <p>{description}</p>
                      <hr />
                    </li>
                  ))}
                </ul>
                <Link href="/experience" className="btn btn-primary rounded">
                  Know more
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        {/** PortFolio **/}
        {/* <div className="row">
          <div className="col-md-12">
            <div className="card-body card bg-dark">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>

                {proyects.map(({ title, description, image }, i) => (
                  <div className="col-md-4 p-2" key={i}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={image}
                          alt={`Imagen ${title}`}
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href="#">Know More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/portafolio"
                  className="btn btn-outline-light mt-4">
                  More Proyects
                </Link>
              </div>
            </div>
          </div>
        </div> */}

      </Layout>
    </>
  );
}
