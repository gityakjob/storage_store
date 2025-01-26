import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardsComponents from './CardsComponents'
import SalesGraphComponents from './SalesGraphComponents'
import ApiService from "../lib/ApiService"

const apiService = new ApiService()

const HomeComponents = ({updateErrG, updateLoginPage}) => {

  const [ cardDataLocal, setCardDataLocal ] = useState([])
  const [ weekSales, setWeekSales ] = useState({
    "title":"",
    "chart_title":"",
    "chart_labels":[],
    "chart_data":[],
  })
  const [ mouthSales, setMouthSales ] = useState({
    "title":"",
    "chart_title":"",
    "chart_labels":[],
    "chart_data":[],
  })
  const [ weekBalance, setWeekBalance ] = useState({
    "title":"",
    "chart_title":"",
    "chart_labels":[],
    "chart_data":[],
  })
  const [ mouthBalance, setMouthBalance ] = useState({
    "title":"",
    "chart_title":"",
    "chart_labels":[],
    "chart_data":[],
  })
  
  useEffect(() => {
    apiService.apiCardData().then((result) => {
      if (result.ok) {
      return result.json()
      } else {
      throw new Error('Network response was not ok.')
      }
    }).then((data) => {
      setCardDataLocal(data)
    }).catch((error) => {
      console.log("error", error)
      alert("Err")
      setCardDataLocal({
      "title":"",
      "chart_title":"",
      "chart_labels":[],
      "chart_data":[],
      })
    })
  }, [])

  useEffect(() => {
    apiService.apiWeekSales().then((result) => {
      if (result.ok) {
      return result.json()
      } else {
      throw new Error('Network response was not ok.')
      }
    }).then((data) => {
      setWeekSales(data)
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
      setWeekSales({
        "title":"",
        "chart_title":"",
        "chart_labels":[],
        "chart_data":[],
      })
    })
  }, [])

  useEffect(() => {
    apiService.apiMouthSales().then((result) => {
      if (result.ok) {
      return result.json()
      } else {
      throw new Error('Network response was not ok.')
      }
    }).then((data) => {
      setMouthSales(data)
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
      setMouthSales({
        "title":"",
        "chart_title":"",
        "chart_labels":[],
        "chart_data":[],
      })
    })
  }, [])

  useEffect(() => {
    apiService.apiWeekBalance().then((result) => {
      if (result.ok) {
      return result.json()
      } else {
      throw new Error('Network response was not ok.')
      }
    }).then((data) => {
      setWeekBalance(data)
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
      setWeekBalance({
        "title":"",
        "chart_title":"",
        "chart_labels":[],
        "chart_data":[],
      })
    })
  }, [])

  useEffect(() => {
    apiService.apiMouthBalance().then((result) => {
      if (result.ok) {
      return result.json()
      } else {
      throw new Error('Network response was not ok.')
      }
    }).then((data) => {
      setMouthBalance(data)
    }).catch((error)=>{
      console.log("error", error)
      alert("Err")
      setMouthBalance({
        "title":"",
        "chart_title":"",
        "chart_labels":[],
        "chart_data":[],
      })
    })
  }, [])

  useEffect(() => {
    updateErrG(false)
    updateLoginPage(false)
  }, [updateErrG, updateLoginPage])

  return (
    <>
      <CardsComponents cardData={cardDataLocal}/>
      <SalesGraphComponents 
        week_sales={weekSales}
        mouth_sales={mouthSales}
      />
      <SalesGraphComponents 
        week_sales={weekBalance}
        mouth_sales={mouthBalance}
      />
    </>
  )
}

HomeComponents.propTypes = {
  updateErrG: PropTypes.any.isRequired,
  updateLoginPage: PropTypes.any.isRequired,
}

export default HomeComponents


