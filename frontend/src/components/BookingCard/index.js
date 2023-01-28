import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBooking, getCurrUserBookings } from "../../store/bookings";

const dateToStr = (date) =>{
    return date.toJSON().slice(0,10)
}

export function BookingCard({oneSpotById, currUser}){

    const dispatch = useDispatch();
    const history = useHistory();
    const [startDate, setStartDate] =useState('')
    const [endDate, setEndDate] = useState('')
    const [errors, setError] = useState([])

    useEffect(()=> {
        const errors = [];
        const today = new Date().toISOString().slice(0, 10);
        
        if(dateToStr(startDate) <= today || dateToStr(endDate) <= today){
            errors.push("Please book dates after today.")    
        }

        if(dateToStr(startDate) > dateToStr(endDate)){
            errors.push("End date cannot be earlier than start date.")
        }

        setError(errors)

    }, [startDate, endDate])

    const handleSubmit = async(e)=> {
        e.preventDefault();

        const addedBooking = {startDate, endDate}

        dispatch(createBooking(oneSpotById.id, addedBooking))
            .then(res=> {
                if(res.ok){
                    setError([])
                    setStartDate("")
                    setEndDate("")
                    dispatch(getCurrUserBookings())
                    history.push('/trips')
                }
            }).catch( async(res)=> {
               const result = await res.json()
               const errors = []
               if(result && result.message){
                errors.push(data.message)
               }
               setError(errors)
            })

    }
    return (
        <div className='spot-info-right'>
            <form onSubmit={handleSubmit}>
          {errors.length > 0 && (<div className="error-message-create-booking">
          
              {errors.map((error, idx) => <div key={idx}>{error}</div>)}
          
          </div>)}
                        <div className='single-spot-price'>
                            <span style={{ fontWeight: 'bold' }}> {`$${oneSpotById.price} `}</span> night
                        </div>
                        <div className='star-reviews'>
    
                            <div className='rating-star'>
                                <i className="fa-solid fa-star"></i>
                                {Number(oneSpotById.avgStarRating) !== 0 ? Number(oneSpotById.avgStarRating).toFixed(1) : ` New`}
                            </div>
                            <div className="space">  ·  </div>
                            <div className='single-spot-review'>
    
                                {oneSpotById?.numReviews} reviews
    
                            </div>
    
    
                        </div>
                        </form>
                    </div>
    )
}


