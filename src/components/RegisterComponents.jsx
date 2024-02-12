import { useEffect } from 'react'
import PropTypes from 'prop-types'
import logo from "../assets/img/storage.png"

const RegisterComponents = ({ updateErrG, updateLoginPage }) => {
  
  useEffect(() => {
    document.title = "Almacen Virtual | Registro"
    updateErrG(true)
    updateLoginPage(true)
  }, [updateErrG, updateLoginPage])

  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
          <div className="card-header"><h3 className="text-center font-weight-light my-4"><img src={logo} width="30" height="30" alt="logo" /> Almacen Virtual</h3></div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                    <label htmlFor="inputFirstName">Nombre</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                    <label htmlFor="inputLastName">Apellidos</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                <label htmlFor="inputEmail">Correo</label>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                    <label htmlFor="inputPassword">Contraseña</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                    <label htmlFor="inputPasswordConfirm">Confirmar Contraseña</label>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-0">
                <div className="d-grid"><a className="btn btn-primary btn-block" href="/login/">Crear usuario</a></div>
              </div>
            </form>
          </div>
          <div className="card-footer text-center py-3">
            <div className="small"><a href="/">Regresar al Inicio </a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponents

RegisterComponents.propTypes = {
  updateErrG: PropTypes.any.isRequired,
  updateLoginPage: PropTypes.any.isRequired,
}
