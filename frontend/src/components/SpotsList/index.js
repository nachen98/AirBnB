import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spots';
import SpotCards from '../SpotCards';
const SpotsList = () => {
    const dispatch = useDispatch();
    const spotsList = useSelector ((state => state.spots))
    console.log('spotsList!!!!!!!!!', spotsList)
    const spots = Object.values(spotsList)

    //loaded the redux store with all the spots
    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])


    if (!spots) return null;

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                {spots.map((spot) => (
                    <div className='most-inner-container'>
                        <SpotCards key={spot.id} spot={spot} />
                    </div>
                ))}

            </div>

        </div>
    )
}
export default SpotsList