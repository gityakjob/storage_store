import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { tableDataBalance,
        tableBalanceColumns,
        tableEntradasColumns,
        tableSalidasColumns,
        cardDataLocal} from './src/lib/data.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(json())
app.use(corsMiddleware())
app.use(express.static(path.join(__dirname, 'dist')));
app.disable('x-powered-by')

app.get('/table_balance/', (req, res) => {
  const result = tableDataBalance.map((obj) => {
    obj.saldo = (parseInt(obj.existencia) + parseInt(obj.entrada) - parseInt(obj.salida)).toString()
    return obj
  })
  res.status(200).json([{ data: result }, { cols: tableBalanceColumns }])
})

app.get('/table_entradas/', (req, res) => {
  const tableDataEntradas = tableDataBalance.map((obj) => {
    // eslint-disable-next-line no-unused-vars
    const {salida, ...element } = obj
    element.saldo = (parseInt(element.existencia) + parseInt(element.entrada)).toString()
    return element
  })
  res.status(200).json([{ data: tableDataEntradas }, { cols: tableEntradasColumns }])
})

app.get('/table_salidas/', (req, res) => {
  const tableDataSalidas = tableDataBalance.map((obj) => {
    // eslint-disable-next-line no-unused-vars
    const {entrada, ...element } = obj
    element.saldo = (parseInt(element.existencia) + parseInt(element.salida)).toString()
    return element
  })
  res.status(200).json([{ data: tableDataSalidas }, { cols: tableSalidasColumns }])
})

app.get('/card_data/', (req, res) => {
  var data = tableDataBalance.map((obj) => {
    return {salidas: parseInt(obj.salida), precio: parseInt(obj.precio), existencia: parseInt(obj.existencia)}
  })
  let salidas = 0
  let existencia = 0
  let ganacia = 0
  let perdidas = 0
  for (let i = 0; i < data.length; i++){
    salidas += data[i].salidas
    existencia += data[i].existencia
    let s = data[i]. salidas * data[i].precio
    ganacia += s
  }
  for (let i = 0; i < cardDataLocal.length; i++){
    if (cardDataLocal[i].name === "ventas"){
      cardDataLocal[i].title = 'Ventas Semana: ' + salidas + ' productos'
    }
    if (cardDataLocal[i].name === "atasados"){
      cardDataLocal[i].title = 'Atrasados: ' + existencia + ' productos'
    }
    if (cardDataLocal[i].name === "ganancia"){
      cardDataLocal[i].title = 'Ganancia Semana: $' + ganacia
    }
    if (cardDataLocal[i].name === "perdidas"){
      cardDataLocal[i].title = 'Perdidas: $' + perdidas
    }
  }
  res.status(200).json(cardDataLocal)
})

app.get('/week_sales/', (req, res) => {
  var today = new Date()
  var week_sales = {
    "title":"Ventas en la semana",
    "chart_title":"Ventas por dias",
    "chart_labels":['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Vienrnes', 'Sabado'],
    "chart_data":[],
  }
  var date_week = tableDataBalance.map(function(obj) {
    var day = parseInt(obj.fecha.split("/")[0])
    return { day , data: parseInt(obj.salida) }
  })

  var chart_labels = week_sales.chart_labels.filter(function(element, index) {
    return index <= today.getDay()
  })
  var day_week = today.getDate() - (date_week.length - 1)
  var chart_data = chart_labels.map(function(element, index) {
    return date_week.find((d) => {
      if (d.day === (day_week + index)){
        return d.data
      }
    })?.data || 0
  })
  week_sales.chart_labels = chart_labels
  week_sales.chart_data = chart_data
  res.status(200).json(week_sales)
})

app.get('/mouth_sales/', (req, res) => {
  var today = new Date()
  var mouth_sales = {
    "title":"Ventas en el mes",
    "chart_title":"Ventas por dias",
    "chart_labels":[],
    "chart_data":[],
  }
  var result = tableDataBalance.map(function(obj) {
    var day = parseInt(obj.fecha.split("/")[0])
    return { day , data: parseInt(obj.salida) }
  })

  for (var day = 1; day <= today.getDate(); day++){
    var obj = result.find(function(item) {
      return item.day === day
    })

    if (obj) {
      mouth_sales.chart_labels.push(day.toString())
      mouth_sales.chart_data.push(obj.data)
    } else {
      mouth_sales.chart_labels.push(day.toString())
      mouth_sales.chart_data.push(0)
    }
  }
  res.status(200).json(mouth_sales)
})

app.get('/week_balance/', (req, res) => {
  var today = new Date()
  var week_balance = {
    "title":"Balance en la semana",
    "chart_title":"Balance por dias",
    "chart_labels":['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Vienrnes', 'Sabado'],
    "chart_data":[],
  }
  var date_week = tableDataBalance.map(function(obj) {
    var day = parseInt(obj.fecha.split("/")[0])
    return { day , salida: parseInt(obj.entrada) + parseInt(obj.existencia) - parseInt(obj.salida) }
  })
  var chart_labels = week_balance.chart_labels.filter(function(element, index) {
    return index <= today.getDay()
  })
  var day_week = today.getDate() - (date_week.length - 1)
  var chart_data = chart_labels.map(function(element, index) {
    return date_week.find((d) => {
      if (d.day === (day_week + index)){
        return d.salida
      }
    })?.salida || 0
  })

  week_balance.chart_labels = chart_labels
  week_balance.chart_data = chart_data

  res.status(200).json(week_balance)
})

app.get('/mouth_balance/', (req, res) => {
  var today = new Date()
  var mouth_blance = {
    "title":"Blance en el mes",
    "chart_title":"Balance por dias",
    "chart_labels":[],
    "chart_data":[],
  }
  var result = tableDataBalance.map(function(obj) {
    var day = parseInt(obj.fecha.split("/")[0])
    return { day , data: parseInt(obj.entrada) + parseInt(obj.existencia) - parseInt(obj.salida)}
  })

  for (var day = 1; day <= today.getDate(); day++){
    var obj = result.find(function(item) {
      return item.day === day
    })

    if (obj) {
      mouth_blance.chart_labels.push(day.toString())
      mouth_blance.chart_data.push(obj.data)
    } else {
      mouth_blance.chart_labels.push(day.toString())
      mouth_blance.chart_data.push(0)
    }
  }
  
  res.status(200).json(mouth_blance)
})

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 8000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})


/*
var data = [...tableDataEntradas.map(function(obj) {
    var day = parseInt(obj.fecha.split("/")[0])
    return { day , data: parseInt(obj.entrada) + parseInt(obj.existencia)}
  }), ...tableDataSalidas.map(function(obj) {
    var day = parseInt(obj.fecha.split("/")[0])
    return { day , data: parseInt(obj.existencia) - parseInt(obj.salida) }
  })]
var result = data.reduce(function(acc, obj){
    var existingObj = acc.find(function(item) {
      return item.day === obj.day;
    });
  
    if (existingObj) {
      existingObj.data += obj.data;
    } else {
      acc.push(obj);
    }
  
    return acc;
  }, [])

  

  */