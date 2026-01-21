function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <div className="brand">Yannis Camelin</div>
          <small className="text-muted">Portfolio 2026</small>
        </div>
        <small className="text-muted">© {new Date().getFullYear()} Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default Footer
