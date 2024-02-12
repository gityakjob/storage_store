import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'
import { DataTable } from "simple-datatables"
import 'simple-datatables/dist/style.css'

export default function TableMainComponents({tableData, tableName, tableColumns}) {
  const tableRef = useRef(null);
  const [ tData, setTData ] = useState(tableData)
  const [ tName, setTname ] = useState(tableName)
  const [ tColumns, setTColumns ] = useState(tableColumns)

  useEffect(() => {
    let options = {
      searchable: true,
      perPage: 5,
    }
    let columns = [
      { select: 0, sort: "asc" },
    ]
    new DataTable(tableRef.current, {...options, columns});
  }, [])

  useEffect(() => {
    setTData(tableData)
    setTname(tableName)
    setTColumns(tableColumns)
  }, [tableData, tableName, tableColumns])

  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-table me-1"></i>
        {tName}
      </div>
      <div className="card-body text-center ">
        <table ref={tableRef} className="text-center">
          <thead className="text-center">
            <tr className="text-center">
              {tColumns? tColumns.map((d, index) =>(
                <th key={index} className="text-center">{d}</th>
              )): <></>}
            </tr>
          </thead>
          <tfoot className="text-center">
            <tr className="text-center">
              {tColumns? tColumns.map((d, index) =>(
                <th key={index} className="text-center">{d}</th>
              )): <></>}
            </tr>
          </tfoot>
          <tbody>
          {tData?
            tData.map((data) => (
              <tr key={data.id + "_" + tName}>
                {data.name?<td className="text-center">{data.name}</td>:<></>}
                {data.existencia?<td className="text-center">{data.existencia}</td>:<></>}
                {data.entrada?<td className="text-center">{data.entrada}</td>:<></>}
                {data.salida?<td className="text-center">{data.salida}</td>:<></>}
                {data.precio?<td className="text-center">{data.precio}</td>:<></>}
                {data.saldo?<td className="text-center">{data.saldo}</td>:<></>}
                {data.fecha?<td className="text-center">{data.fecha}</td>:<></>}
              </tr>
            )):<></>}
            </tbody>
          
        </table>
      </div>
    </div>
  )
}

TableMainComponents.propTypes = {
  tableData: PropTypes.any.isRequired,
  tableName: PropTypes.any.isRequired,
  tableColumns: PropTypes.any.isRequired,
}