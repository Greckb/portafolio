

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light text-center">
        <div className="contanier py-4">
            <h2>&copy; Raul Lopez - Portafolio </h2>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All Rights Reserved.</p>
        </div>

      </footer>
    </>
  )
}
