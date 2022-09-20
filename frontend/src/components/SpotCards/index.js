import "./SpotCards.css"
import { Link } from "react-router-dom"
export default function SpotCards({ spot }) {
    return (
        <div className='link-for-spot'>
            <Link to={`/spots/${spot.id}`} >

                <img src={spot.previewImage} className='spotcard-img'
                    style={{ height: 100, width: 100 }}
                />
                <div className="spotcard-info">
                    <div className="spotcard-location">
                        {spot.city},{spot.state}
                    </div>
                    <div className='rating-star'>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='single-spot-rating'>
                        {Number(spot.avgRating).toFixed(1)}
                    </div>
                    <div className="location-price">
                        {`$${spot.price} `}
                        <span>night</span>
                    </div>
                </div>
            </Link>


        </div>
    )
}
