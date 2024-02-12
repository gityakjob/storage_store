import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import eimg from '../assets/img/error-404-monochrome.svg'

export default function Err404({updateErrG}) {

  const handleErrOff = () =>{
    updateErrG(false)
  }

  useEffect(() => {
    document.title = "Almacen Virtual | Error 404"
    updateErrG(true)
  }, [updateErrG])

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="text-center mt-4">
          <img className="mb-4 img-error" src={eimg} />
          <p className="lead">This requested URL was not found on this server.</p>
          <Link to="/" onClick={handleErrOff}>
            <i className="fas fa-arrow-left me-1"></i>
            Regresar al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

Err404.propTypes = {
  updateErrG: PropTypes.any.isRequired,
}
