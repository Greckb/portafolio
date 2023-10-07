import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Importa los estilos de Font Awesome
import Image from 'next/image';

const TypewriterEffect = () => {
  const text = 'an enthusiastic Junior Developer'; // El texto con efecto
  const [displayText, setDisplayText] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  // Estados para cada ícono
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTalk, setIsTalk] = useState(false);


  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Velocidad de escritura en milisegundos

    return () => clearInterval(interval);
  }, []);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column', // Cambiar la dirección de la columna
    textAlign: 'center', // Centrar el texto horizontalmente
    backgroundColor: 'black', // Fondo en color negro
    color: 'rgb(255, 83, 160)', // Color de letra para el texto
    fontFamily: 'VT323, sans-serif',
  };

  const nameStyle = {
    fontFamily: 'Dancing Script, cursive',
    display: 'inline',
    color: 'rgb(1, 255, 149)',
    fontSize: '64px', // Cambiar el tamaño de la letra a 64px
    fontStyle: 'italic', // Agregar inclinación al texto
  };

  const imageContainerStyle = {
    display: 'flex', // Mostrar como flexbox
    alignItems: 'center', // Alinear verticalmente al centro
    position: 'absolute', // Posición absoluta para superponerla
    top: 100, // Alinear a la izquierda de la pantalla
  };

  const circularImageStyle = {
    borderRadius: '50%', // Hacer que la imagen sea circular
    border: '2px solid rgb(1, 255, 149)', // Borde verde
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px', // Ajustar la posición vertical
    right: '10px', // Ajustar la posición horizontal
    backgroundColor: 'white', // Fondo blanco
    color: 'black', // Texto negro
  };

  const socialIconStyle = {
    margin: '0 10px', // Añadir margen horizontal entre los iconos
    transition: 'color 1.2s', // Transición más lenta (0.5 segundos) al cambiar el color
    color: 'white',
  };

  // Estilos individuales para los iconos cuando se pasa el ratón por encima
  const socialIconHoverStyle = {
    color: 'rgb(1, 255, 149)', // Cambia el color al pasar el ratón por encima
    transform: 'scale(1.2)', // Aumenta el tamaño al pasar el ratón por encima (por ejemplo, 1.2 veces más grande)
    transition: 'color 1.2s, transform 1.2s', // Aplica una transición tanto al color como al tamaño
  };

  const buttonContainerStyle = {
    marginTop: '20px', // Agrega margen superior
  };

  const footerStyle = {
    position: 'absolute',
    bottom: '250px', // Ajusta la distancia desde la parte inferior
    left: '50%', // Centra horizontalmente
    transform: 'translateX(-50%)', // Centra horizontalmente
  };

  const footer = {
    position: 'fixed',
    bottom: '0', // Coloca el footer en la parte inferior de la pantalla
    left: '50%', // Centra horizontalmente
    transform: 'translateX(-50%)', // Centra horizontalmente
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgb(255, 83, 160)', // Color de letra para el texto
    backgroundColor: 'black',
    width: '100%',
    padding: '20px',
    // borderTop: '2px solid rgb(1, 255, 149)', // Agrega un borde superior verde
  };

  const greenButtonStyle = {
    backgroundColor: 'transparent',
    color: 'rgb(1, 255, 149)',
    border: '2px solid rgb(1, 255, 149)',
    borderRadius: '20px',
    padding: '10px 20px',
    margin: '0 20px', // Ajusta el margen horizontal
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const greenButtonHoverStyle = {
    border: '2px solid white',
    color: 'white',
  };

  const handleAboutMeClick = () => {
    // Manejar clic en el botón "About Me"
    // Puedes redirigir a la página "About Me" o realizar la acción deseada aquí
  };

  const handleLetsTalkClick = () => {
    // Manejar clic en el botón "Let's Talk"
    // Puedes redirigir a la página de contacto o abrir un formulario de contacto aquí
  };


  return (
    <header>

      <div style={style}>
        <div style={imageContainerStyle}>
          {/* Agregar la imagen con transición de opacidad y estilo circular */}
          <Image
            src="/yo.png" // Ruta relativa a la imagen en la carpeta "public"
            alt="Mi foto"
            width={200} // Ancho deseado
            height={200} // Altura deseada
            className="image"
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 3s',
              ...circularImageStyle, // Aplicar estilo circular y borde verde
            }}
            onLoad={() => setImageLoaded(true)} // Cambiar el estado cuando la imagen se carga
          />
        </div>
        <h1>
          <span style={{ color: 'white' }}>Hi I'm </span>
          <span style={nameStyle}>Raúl López</span>
        </h1>
        <h2>{displayText}</h2>
        <br></br>

        {/* Agrega los iconos de redes sociales aquí */}
        <div>
          <a
            href="https://www.instagram.com/tu_usuario_de_instagram/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              ...socialIconStyle, // Estilo normal
              ...(isInstagramHovered ? socialIconHoverStyle : {}), // Estilo al pasar el ratón por encima
            }}
            onMouseEnter={() => setIsInstagramHovered(true)}
            onMouseLeave={() => setIsInstagramHovered(false)}
          >
            <i className="fa fa-instagram fa-2x"></i> {/* Icono más grande */}
          </a>
          <a
            href="https://github.com/tu_usuario_de_github"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              ...socialIconStyle, // Estilo normal
              ...(isGithubHovered ? socialIconHoverStyle : {}), // Estilo al pasar el ratón por encima
            }}
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
          >
            <i className="fa fa-github fa-2x"></i> {/* Icono más grande */}
          </a>
          <a
            href="https://www.linkedin.com/in/tu_usuario_de_linkedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              ...socialIconStyle, // Estilo normal
              ...(isLinkedinHovered ? socialIconHoverStyle : {}), // Estilo al pasar el ratón por encima
            }}
            onMouseEnter={() => setIsLinkedinHovered(true)}
            onMouseLeave={() => setIsLinkedinHovered(false)}
          >
            <i className="fa fa-linkedin fa-2x"></i> {/* Icono más grande */}
          </a>
        </div>
        <div style={footerStyle}>
          <button
            onClick={handleAboutMeClick}
            style={{ ...greenButtonStyle, ...(isHovered ? greenButtonHoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            About Me
          </button>
          <button
            onClick={handleLetsTalkClick}
            style={{ ...greenButtonStyle, ...(isTalk ? greenButtonHoverStyle : {}) }}
            onMouseEnter={() => setIsTalk(true)}
            onMouseLeave={() => setIsTalk(false)}
          >
            Let's Talk
          </button>
         
        </div>

        <div style={footer}>
            
            <p>&copy; Raul Lopez - Portafolio {new Date().getFullYear()} All Rights Reserved.</p>
      
        </div>

      </div>

    </header>
  );
};

export default TypewriterEffect;
