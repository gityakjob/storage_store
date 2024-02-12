import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'
import Chart from "chart.js"

const SalesGraphComponents = ({mouth_sales, week_sales}) => {
  const areaChart = useRef(null)
  const barChart = useRef(null)

  useEffect(() => {
    const ctx_area = areaChart.current.getContext('2d')
    new Chart(ctx_area, {
      type: 'line',
      data: {
        labels: week_sales.chart_labels,
        datasets: [{
          label: week_sales.chart_title,
          data: week_sales.chart_data,
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: Math.round(Math.max(...mouth_sales.chart_data) / 10) * 10,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        }
      },
      legend: {
        display: false
      }
    })
    const ctx_bar = barChart.current.getContext('2d')
    new Chart(ctx_bar, {
      type: 'bar',
      data: {
        labels: mouth_sales.chart_labels,
        datasets: [{
          label: mouth_sales.chart_title,
          data: mouth_sales.chart_data,
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
        }]
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'day'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: Math.round(Math.max(...mouth_sales.chart_data) / 10) * 10,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }]
        }
      },
      legend: {
        display: false
      }
    })

  }, [mouth_sales, week_sales])

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-chart-area me-1"></i>
             {week_sales.title}
          </div>
          <div className="card-body"><canvas ref={areaChart} width="100%" height="40"></canvas></div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-chart-bar me-1"></i>
            {mouth_sales.title}
          </div>
          <div className="card-body"><canvas ref={barChart} width="100%" height="40"></canvas></div>
        </div>
      </div>
    </div>
  )
}

export default SalesGraphComponents

SalesGraphComponents.propTypes = {
  mouth_sales: PropTypes.any.isRequired,
  week_sales: PropTypes.any.isRequired,
}
