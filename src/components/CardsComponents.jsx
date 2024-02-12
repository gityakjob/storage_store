import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardsComponents = ({cardData}) => {

  return (
    <div className="row">
      {cardData.map((data, index) => (
        <div className="col-xl-3 col-md-6" key={index}>
          <div className={'card bg-'+data.class+' text-white mb-4'}>
            <div className="card-body">{data.title}</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link to={data.link} className="small text-white stretched-link">{data.linkname}</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
      ))}
    </div>  
  )
}

CardsComponents.propTypes = {
  cardData: PropTypes.any.isRequired,
}

export default CardsComponents
