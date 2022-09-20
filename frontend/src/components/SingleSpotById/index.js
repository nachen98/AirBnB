import './SingleSpot.css';
import {useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneSpot } from '../../store/spots';
export function SingleSpot(){
    
    const {spotId} = useParams()
    const dispatch = useDispatch();
    const history = useHistory()
    const oneSpotById = useSelector(state => state.spots.singleSpot)
    const currUser = useSelector(state => state.session.user)

    useEffect(()=> {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])

    let currUserIsOwner = false;
    if(currUser && currUser.id === oneSpotById.ownerId) currUserIsOwner = true;

    const deleteSpot = async(e) => {
        e.preventDefault()
        await dispatch(deleteSpot(spotId))
        history.push('/')
    }
    
    if(Object.keys(oneSpotById).length === 0) return null
    console.log('oneSpotById!!!!!!!', oneSpotById)
    return(
        <div className='single-spot-info'>
            <div className='spot-name'>
                {oneSpotById?.name }
            </div>
            <div className='rating-star'>
            <i className="fa-solid fa-star"></i>
            </div>
            <div className='single-spot-rating'>
            {Number(oneSpotById?.avgStarRating).toFixed(1)}
            </div>
            
            {currUserIsOwner && (
                <div className='owner-for-spot'>
                    <button onClick={deleteSpot}>Delete your spot</button>
                    {/* <EditSpotModalForm spotId={spotId} /> */}
                </div>
          
            )}
            
            <div className="space"> · </div>
            <div className='single-spot-review'>
    
                {oneSpotById?.numReviews} review
            
            </div>
            <div className='single-spot-img'>
               
                {oneSpotById.SpotImages.map(img => {
                    <img key={img.id} src={img.url} />
                })}
            </div>
            <div className='single-spot-owner'>
                <h2>Hosted by: {oneSpotById.Owner.firstName} {oneSpotById.Owner.lastName}</h2>

            </div>
            <div className='single-spot-description'>
                Description: {oneSpotById.description}
            </div>
            
        </div>
    )
}