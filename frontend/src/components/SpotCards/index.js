import "./SpotCards.css"
import { Link } from "react-router-dom"
export default function SpotCards({ spot }) {
    return (
        <div className='link-for-spot'>
            <Link to={`/spots/${spot.id}`} >

                <img src={spot.previewImage} className='spotcard-img' />
                <div className="spotcard-info">
                    <div className="location-plus-rating">


                        <div className="spotcard-location">
                            {spot.city},{spot.state}
                        </div>
                        <div className='rating-star'>
                            <i className="fa-solid fa-star"></i>
                            {Number(spot.avgRating).toFixed(1)}
                        </div>
                    </div>
                    <div className="location-price">
                        <span style={{ fontWeight: 'bold' }}> {`$${spot.price} `}</span> night
                    </div>
                </div>
            </Link>
        </div>
    )
}
