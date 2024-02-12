import PropTypes from 'prop-types'
import { useEffect } from 'react'
import logo from "../assets/img/storage.png"

const LoginComponents = ({updateErrG, updateLoginPage}) => {
  
  useEffect(() => {
    document.title = "Almacen Virtual | Login"
    updateErrG(true)
    updateLoginPage(true)

  }, [updateErrG, updateLoginPage])
  
  return (
    <div className="row justify-content-center">
      <div className="col-lg-5">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
          <div className="card-header"><h3 className="text-center font-weight-light my-4"><img src={logo} width="30" height="30" alt="logo" /> Almacen Virtual</h3></div>
          <div className="card-body">
            <form>
              <div className="form-floating mb-3">
                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                <label htmlFor="inputEmail">Correo | Usuario </label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                <label htmlFor="inputPassword">Contraseña</label>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                <a className="btn btn-primary" href="/">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponents

LoginComponents.propTypes = {
  updateErrG: PropTypes.any.isRequired,
  updateLoginPage: PropTypes.any.isRequired,
}