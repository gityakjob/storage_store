import axios from 'axios';

const API_URL = "http://localhost:8000/"

export default class ApiService {

  apiTableBalance(){
    const url = `${API_URL}table_balance/`
    return axios.get(url)
  }

  apiTablaEntradas(){
    const url = `${API_URL}table_entradas/`
    return axios.get(url)
  }

  apiTablaSalidas(){
    const url = `${API_URL}table_salidas/`
    return axios.get(url)
  }

  apiCardData(){
    const url = `${API_URL}card_data/`
    return axios.get(url)
  }

  apiWeekSales(){
    const url = `${API_URL}week_sales/`
    return axios.get(url)
  }

  apiMouthSales(){
    const url = `${API_URL}mouth_sales/`
    return axios.get(url)
  }

  apiWeekBalance(){
    const url = `${API_URL}week_balance/`
    return axios.get(url)
  }

  apiMouthBalance(){
    const url = `${API_URL}mouth_balance/`
    return axios.get(url)
  }
}