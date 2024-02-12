import { Link } from "react-router-dom"

export default function SidebarComponents() {
  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Dashboard</div>
            <Link className="nav-link" to="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-home-alt"></i>
              </div>
              Inicio
            </Link>
            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Paginas
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </Link>
            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-key"></i>
                  </div>
                  Autentificacion
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/login/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-sign-in"></i>
                      </div>
                      Login
                    </Link>
                    <Link className="nav-link" to="/register/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-user-plus"></i>
                      </div>
                      Register
                    </Link>
                  </nav>
                </div>
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseTables" aria-expanded="false" aria-controls="pagesCollapseTables">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table"></i>
                  </div>
                  Tablas
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
                <div className="collapse" id="pagesCollapseTables" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/tabla/entradas/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-pencil-alt"></i>
                      </div>
                      Entradas
                      </Link>
                    <Link className="nav-link" to="/tabla/salidas/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-sign-out-alt"></i>
                      </div>
                      Salidas
                    </Link>
                    <Link className="nav-link" to="/tabla/balances/">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-balance-scale"></i>
                      </div>
                      Balance
                    </Link>
                  </nav>
                </div>
                <Link className="nav-link" to="/graficos/">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  Graficos
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Usuario:</div>
          Pedro Test Perez
        </div>
      </nav>
    </div>
  )
}
