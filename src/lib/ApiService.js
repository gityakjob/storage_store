const API_URL = "http://localhost:8000/"

export default class ApiService {

  apiTableBalance(){
    const url = `${API_URL}table_balance/`
    return fetch(url)
  }

  apiTablaEntradas(){
    const url = `${API_URL}table_entradas/`
    return fetch(url)
  }

  apiTablaSalidas(){
    const url = `${API_URL}table_salidas/`
    return fetch(url)
  }

  apiCardData(){
    const url = `${API_URL}card_data/`
    return fetch(url)
  }

  apiWeekSales(){
    const url = `${API_URL}week_sales/`
    return fetch(url)
  }

  apiMouthSales(){
    const url = `${API_URL}mouth_sales/`
    return fetch(url)
  }

  apiWeekBalance(){
    const url = `${API_URL}week_balance/`
    return fetch(url)
  }

  apiMouthBalance(){
    const url = `${API_URL}mouth_balance/`
    return fetch(url)
  }
}
