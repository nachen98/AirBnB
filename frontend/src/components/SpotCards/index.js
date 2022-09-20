import "./SpotCards.css"
import { Link } from "react-router-dom"
export default function SpotCards ({spot}) {
    return (
        <div>
            <Link to={`/spots/${spot.id}`} className='link-for-spot'>
              
                <img src={spot.previewImage} alt={spot.description} className='spotcard-img'/>
                <div className="spotcard-info">
                    <div className="spotcard-location">
                        {spot.city},{spot.state}
                    </div>
                    <div className="location-rating">
                        {spot.avgRating}
                    </div>
                    <div className="location-price">
                        {spot.price} night
                    </div>
                </div>
            </Link>
             

        </div>
    )
}