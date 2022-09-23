import { csrfFetch } from './csrf';

const GET_ALL_REVIEWS_By_SPOT = 'reviews/getAllReviews';
const CREATE_ONE_REVIEW = 'reviews/createOneReview';
const DELETE_ONE_REVIEW = 'reviews/deleteOneRevew'

const getReviewsBySpot = (reviews) => {
    return {
        type: GET_ALL_REVIEWS_By_SPOT,
        reviews
    }
}

const createOneReview = (review) => {
    return{
        type: CREATE_ONE_REVIEW,
        review
    }
}

const deleteOneRevew= (reviewId) => {
    return {
        type: DELETE_ONE_REVIEW,
        reviewId
    }
}

export const getAllReviewsBySpot = (spotId) => async(dispatch) => {
    //console.log(`/api/spots/${spotId}`)
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
    //console.log('review response!!!!')
    if(response.ok){
        const reviews = await response.json()
        dispatch(getReviewsBySpot(reviews))
    }

}

export const addReview = (createdReview, spotId, user)=> async(dispatch) => {
    //console.log('spotId!!!!!!!!!', spotId)
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(createdReview)
    }).catch(res=>res)
    //console.log('res!!!!!!!!!', response)
    if(response.ok){
        const newReview = await response.json()
        //console.log("user:33333333333333", user)
        newReview.User = {id: user.user.id, firstName: user.user.firstName, lastName: user.user.lastName}
        dispatch(createOneReview(newReview))
        return newReview
    }else{
        const result = await response.json();
        return result;
    }
}

export const deleteReview = (reviewId) => async(dispatch)=> {
    const response = await csrfFetch( `/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if(response.ok){
        dispatch(deleteOneRevew(reviewId))
    }
}

const initialState = {spot: {}, user: {}}

const reviewsReducer = (state=initialState, action)=> {
    switch(action.type){
        case GET_ALL_REVIEWS_By_SPOT:
            const newState = {...state};
            const newAllReviews = {}
            //console.log('action.reviews!!!!!!!!!!!', action.reviews)
            action.reviews.Reviews.forEach((review) => {newAllReviews[review.id] = review})
            newState.spot = newAllReviews
            return newState;
        
        case CREATE_ONE_REVIEW:
            //console.log(state, "state!!!!!!!!!!!!!!!!!!!")
            //action.review.User = {...state.session.user}
            const newState1 = {spot: {...state.spot}, user: {...state.user}}
            newState1.spot[action.review.id]= action.review
            return newState1

        case DELETE_ONE_REVIEW:
            const newState2 = {spot: {...state.spot}, user: {...state.user}}
            delete newState2.spot[action.reviewId]
            delete newState2.user[action.reviewId]
            return newState2
        default:
            return state
    }
}
export default reviewsReducer