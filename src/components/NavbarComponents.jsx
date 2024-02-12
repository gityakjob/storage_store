import { Link } from "react-router-dom"
import logo from "../assets/img/storage.png"

export default function NavbarComponents() {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/"><img src={logo} width="30" height="30" alt="logo" /> Almacen Virtual </Link>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
                <i className="fas fa-bars"></i>
            </button>
            <div className="d-none d-md-inline-block ms-auto me-0 me-md-3 my-2 my-md-0">
            </div>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user fa-fw"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                            <Link className="dropdown-item" to="#">Configuraciones</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="#">informacion de UserName</Link>
                        </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li>
                            <Link className="dropdown-item" to="#">Salir</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
