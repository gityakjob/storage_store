import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import FooterComponents from "./FooterComponents"
import NavbarComponents from "./NavbarComponents"
import SidebarComponents from "./SidebarComponents"
import TableMainComponents from "./TableMainComponents"
import Err404 from "./Err404"
import NavegationComponents from "./NavegationComponents"
import HomeComponents from "./HomeComponents"
import GraphComponents from "./GraphComponents"
import LoginComponents from "./LoginComponents"
import RegisterComponents from "./RegisterComponents"
import ApiService from "../lib/ApiService"

const apiService = new ApiService()

const LayautComponent = () => {
  const [ errg, setErrG ] = useState(false)
  const [ loginPage, setLoginPage ] = useState(false)
  const [ tableDataBalance, setTableDataBalance ] = useState([])
  const [ tableBalanceColumns, setTableBalanceColumns ] = useState([])
  const [ tableDataEntradas, setTableDataEntradas ] = useState([])
  const [ tableEntradasColumns, setTableEntradasColumns ] = useState([])
  const [ tableDataSalidas, setTableDataSalidas ] = useState([])
  const [ tableSalidasColumns, setTableSalidasColumns ] = useState([])

  const updateErrorG = (newErrG) => {
    if (newErrG && errg === false){
      setErrG(true)
    }
  }

  const updateLoginPage = (newLP) => {
    if (newLP && loginPage === false){
      setLoginPage(true)
    }
  }

  useEffect(() => {
    apiService.apiTableBalance().then((result) => {
      if (result.status === 200) {
        setTableDataBalance(result.data[0].data)
        setTableBalanceColumns(result.data[1].cols)
      }
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
    })
  }, [])

  useEffect(() => {
    apiService.apiTablaEntradas().then((result) => {
      if (result.status === 200) {
        setTableDataEntradas(result.data[0].data)
        setTableEntradasColumns(result.data[1].cols)
      }
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
    })
  }, [])    
  
  useEffect(() => { 
    apiService.apiTablaSalidas().then((result) => {
      if (result.status === 200) {
        setTableDataSalidas(result.data[0].data)
        setTableSalidasColumns(result.data[1].cols)
      }
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
    })
      
  }, [])

  return (
    <>
    {errg ? <></> : <NavbarComponents />}
    <div id={errg?loginPage?"layoutAuthentication":"layoutError":"layoutSidenav"}>
      <div id={errg?loginPage?"layoutAuthentication_content":"layoutError_content":"layoutSidenav_content"}>
      {errg ? <></> : <SidebarComponents /> }
        <main>
          <div className={errg?"container":"container-fluid px-4"}>
          {errg ? <></> : <NavegationComponents />}
            <Routes>
              <Route path="/" element={<HomeComponents updateErrG={updateErrorG} updateLoginPage={updateLoginPage}/>} />
              <Route path="/login/" element={<LoginComponents updateErrG={updateErrorG} updateLoginPage={updateLoginPage}/>} />
              <Route path="/register/" element={<RegisterComponents updateErrG={updateErrorG} updateLoginPage={updateLoginPage}/>} />
              <Route path="/tabla/entradas/" element={
                <TableMainComponents tableData={tableDataEntradas} tableName={"Entradas realizadas"} tableColumns={tableEntradasColumns} />} />
              <Route path="/tabla/salidas/" element={
                <TableMainComponents tableData={tableDataSalidas} tableName={"Salidas realizadas"} tableColumns={tableSalidasColumns} />} />
              <Route path="/tabla/balances/" element={
                <TableMainComponents tableData={tableDataBalance} tableName={"Balance de Entradas | Salidas"} tableColumns={tableBalanceColumns} />} />
              <Route path="/graficos/" element={<GraphComponents />} />
              <Route path="*" element={<Err404 updateErrG={updateErrorG} />} />
            </Routes>
          </div>
        </main>
        {errg ? <></> : <FooterComponents />}
      </div>
    </div>
    </>
  )
}


export default LayautComponent