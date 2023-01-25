import booking from '../../../backend/db/models/booking';
import { csrfFetch } from './csrf';

const GET_CURRENT_USER_BOOKINGS = 'bookings/getCurrentUserBookings';
const GET_BOOKINGS_BY_SPOT_ID = 'bookings/getBookingsBySpotId';
const CREATE_ONE_BOOKING = 'bookings/createOneBooking';
const EDIT_ONE_BOOKING = 'bookings/editOneBooking';
const DELETE_ONE_BOOKING = 'bookings/deleteOneBooking';

const loadCurrentUserBookings = (bookings)=> {
    return {
        type: GET_CURRENT_USER_BOOKINGS,
        bookings
    }
}

const loadBookingsBySpotId = (bookings) => {
    return {
        type: GET_BOOKINGS_BY_SPOT_ID,
        bookings
    }
}

const createOneBooking = (booking) => {
    return {
        type: CREATE_ONE_BOOKING,
        booking
    }
}

const editOneBooking = (booking)=>{
    return {
        type: EDIT_ONE_BOOKING,
        booking
    }
}

const deleteOneBooking = (bookingId) => {
    return {
        type: DELETE_ONE_BOOKING,
        bookingId
    }
}

export const getCurrUserBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/current`);
    if (response.ok){
        const userBookings = await response.json()
        dispatch(loadCurrentUserBookings(userBookings))
        return userBookings
    }
}

export const getBookingsBySpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`);

    if(response.ok){
        const spotBookings = await response.json()
        dispatch(loadBookingsBySpotId(spotBookings))
        return spotBookings
    }
}

export const createBooking = (spotId, bookingInfo) => async (dispatch) => {
    const response = await csrfFetch (`/api/spots/${spotId}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingInfo)
    }).catch(res=>res)
    
    if(response.ok){
        const newBooking = await response.json()
        dispatch(createOneBooking(newBooking))
        return newBooking
    }else {
        const result = await response.json();
        return result;
    }
}

export const updateBooking = (spotId, bookingInfo) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingInfo)
    }).catch(res=>res)

    if(response.ok){
        const updatedBooking = await response.json()
        dispatch(editOneBooking(updatedBooking))
        return updatedBooking
    }else {
        const result = await response.json();
        return result;
    }
}

export const deleteBooking = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE'
    })

    if(response.ok){
        dispatch(deleteOneBooking(bookingId))
    }
}

const initialState = { spot: {}, user: {} };

const bookingsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case GET_CURRENT_USER_BOOKINGS:
            return{
                spot: {...state.spot},
                user: {
                    ...action.bookings.Bookings.reduce((newUserBooking, booking)=>{
                        newUserBooking[booking.id] = booking
                        return newUserBooking
                }, {})
                
            }
        }
        
        case GET_BOOKINGS_BY_SPOT_ID:
            return {
                user: {...state.user},
                spot: {
                    ...action.bookings.Bookings.reduce((newSpotBooking, booking)=> {
                        newSpotBooking[booking.id] = booking
                        return newSpotBooking
                    }, {})
                }
            }
        
        case CREATE_ONE_BOOKING:
            return {
                spot: {
                    ...state.spot,
                    [action.booking.id]: {...action.booking}
                
                },
                user: {
                    ...state.user,
                    [action.booking.id]: {...action.booking}
                }
            }
        
        case EDIT_ONE_BOOKING:
            return {
                spot: {
                    ...state.spot,
                    [action.booking.id]: {...action.booking}
                
                },
                user: {
                    ...state.user,
                    [action.booking.id]: {...action.booking}
                }
            }
        
        case DELETE_ONE_BOOKING:
            newUserState = { ... state.user}
            delete newUserState[action.bookingId]

            newSpotState = {... state.spot}
            delete newSpotState[action.bookingId]
            return {
                user: newUserState,
                spot: newSpotState
            }
        
        default:
            return state;
    } 
}

export default bookingsReducer