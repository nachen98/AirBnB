import './SingleSpot.css';
import {useParam, useHistory} from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
export function SingleSpot({spotId}){
    
    const {spotId} = useParam()
    const dispatch = useDispatch();
    const history = useHistory()
    const oneSpotById = useSelector(state => state.spot.singleSpot)
    const currUser = useSelector(state => state.session.user)

    useEffect(()=> {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])

    let currUserIsOwner = false;
    if(currUser && currUser.id === ownerId) currUserIsOwner = true;

    const deleteSpot = async(e) => {
        e.preventDefault()
        await dispatch(deleteSpot(spotId))
        history.push('/')
    }
    if(!oneSpotById) return null;

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
    
                {oneSpotById?.numReviews }reviews
            
            </div>
            <div className='single-spot-img'>
                {oneSpotById.SpotImages.map(img => {
                    <img key={img.id} src={img.url} />
                })}
            </div>
            <div className='single-spot-owner'>
                <h2>Hosted by: {oneSpotById.owner.firstName }{oneSpotById.owner.lastName}</h2>

            </div>
            <div className='single-spot-description'>
                Description: {oneSpotById.description}
            </div>
            
        </div>
    )
}