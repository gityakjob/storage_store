
export const tableDataBalance = [
  {
    id:"0",
    name:"chancletas",
    existencia:"10",
    precio:"20",
    entrada:"3",
    salida:"3",
    saldo:"200",
    fecha:"01/10/2023",
  },
  {
    id:"1",
    name:"galletas",
    existencia:"25",
    precio:"60",
    entrada:"10",
    salida:"20",
    saldo:"20",
    fecha:"02/10/2023",
  },
  {
    id:"2",
    name:"refrescos",
    existencia:"10",
    precio:"20",
    entrada:"10",
    salida:"8",
    saldo:"15",
    fecha:"03/10/2023",
  },
  
]

export const tableBalanceColumns = [
  'Producto',
  'Existencia',
  'Entrada',
  'Salida', 
  'Precio', 
  'Saldo',
  'Fecha',
]

export const tableEntradasColumns = [
  'Producto',
  'Existencia',
  'Entrada',
  'Precio',       
  'Saldo',
  'Fecha',
]

export const tableSalidasColumns = [
  'Producto',
  'Existencia',
  'Salida',
  'Precio',       
  'Saldo',
  'Fecha',
]

export const cardDataLocal =  [
    {class: 'primary', title: 'Ventas Semana: 8 productos', link: '/tabla/salidas/', linkname: 'Ver Salidas', name: 'ventas'},
    {class: 'warning', title: 'Atrasados: 10 productos', link: '/tabla/balances/', linkname: 'Ver Balance', name: 'atasados'},
    {class: 'success', title: 'Ganancia Semana: $500', link: '/tabla/salidas/', linkname: 'Ver Salidas', name: 'ganancia'},
    {class: 'danger', title: 'Perdidas: $0', link: '/tabla/balances/', linkname: 'Ver Balance', name: 'perdidas'},
  ]