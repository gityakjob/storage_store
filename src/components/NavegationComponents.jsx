import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const rutesVal = [
  {"route":"/tabla/entradas/", "name":"Entradas", "prefix": [true, "Tablas"]},
  {"route":"/tabla/salidas/", "name":"Salidas", "prefix": [true, "Tablas"]},
  {"route":"/tabla/balances/", "name":"Balances", "prefix": [true, "Tablas"]},
  {"route":"/graficos/", "name":"Graficos", "prefix": [false, ""]},
]

const NavegationComponents = () => {
  const [ rval, setRval ] = useState({
    name: 'Inicio',
    prefix: [false, ""],
    route: "/",
    start: true,
  })
  const location = useLocation()

  useEffect(() => {
    //console.log(location.pathname)
    const routeNow = rutesVal.find((r) => r.route ===  location.pathname)
    if (routeNow) {
      setRval({ 
        name: routeNow.name,
        prefix: routeNow.prefix,
        route: routeNow.route,
        start: false,
      })
      document.title = "Almacen Virtual | " + routeNow.name
    }else{
      setRval({ 
        name: "Inicio",
        prefix: [false, ""],
        route: "/",
        start: true,
      })
      document.title = "Almacen Virtual | Inicio"
    }
  }, [location])

  return (
    <>
      
      <ol className="breadcrumb mb-4 mt-2">
        {rval.prefix[0] ?<>
        <li className="breadcrumb-item"><Link to="/" title="Regresar al Inicio"><i className="fas fa-home-alt"></i></Link></li>
        <li className="breadcrumb-item">{rval.prefix[1]}</li>
        <li className="breadcrumb-item active">{rval.name}</li></>
        : rval.start ? <li className="breadcrumb-item active"><Link to={rval.route}><i className="fas fa-home-alt"></i></Link></li>:
        <><li className="breadcrumb-item"><Link to="/" title="Regresar al Inicio"><i className="fas fa-home-alt"></i></Link></li>
        <li className="breadcrumb-item active">{rval.name}</li></>}
        
      </ol>
    </>
  )
}

export default NavegationComponents