import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spots';
import { Link, Route, useParams } from 'react-router-dom'
const SpotsList = () => {
    const dispatch = useDispatch();
    //const spotsList = useSelector ((state => Object.values(state.spots)))
    const { spotId } = useParams()
    const spot = useSelector(state => {
        console.log('state!!!!!!!!!', state)
        return state.spots.map(spotId => state.spots[spotId])
    })


    //loaded the redux store with all the spots
    useEffect(() => {
        dispatch(getAllSpots())
    })

    dispatch(getAllSpots())
    if (!spot) return null;

    return (
        <main>
            <div>
                {spot.map((spot) => {
                    return (
                        <Link key={spot.id} to={`/spots/${spot.id}`}>
                            <div
                                className={
                                    Number.parseInt(spotId) === spot.id
                                        ? "nav-entry is-selected"
                                        : "nav-entry"
                                }
                            >
                                <div
                                    className='nav-entry-image'
                                    style={{ backgroundImage: `url('${spot.imageUrl}')` }}
                                ></div>
                                <div>
                                    <div className="primary-text">{spot.name}</div>
                                    <div className="secondary-text">
                                        {spot.number} {spot.captured && "(Captured)"}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    
    
    )
}
export default SpotsList