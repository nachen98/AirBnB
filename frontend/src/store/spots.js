import { csrfFetch } from './csrf';

const GET_ALL_SPOTS = '/spots/getAllSpots';
const GET_ONE_SPOT_By_ID = 'spots/getOneSpot';
const CREATE_ONE_SPOT = 'spots/createOneSpot'

const loadSpots = (list) => {
  return {
    type: GET_ALL_SPOTS, 
    list
  };
};

const loadOneSpot = (spotId) => {
    return{
        type: GET_ONE_SPOT_By_ID,
        spotId
    }
}

const createOneSpot = (spot) => {
    return {
        type:  CREATE_ONE_SPOT,
        spot
    }    
}
//thunk action creator
export const getAllSpots = ()=> async(dispatch) => {
    
    const response = await csrfFetch('/api/spots')
    
    if(response.ok){
        const list = await response.json()
        //console.log('list!!!!!!!!!!', list)
        dispatch(loadSpots(list))
    }
}

export const getOneSpot = (spotId) => async(dispatch) => {
    console.log(`/api/spots/${spotId}`)
    const response = await csrfFetch(`/api/spots/${spotId}`)
    console.log('oneSpot!!!!!!!')
    if(response.ok){
        const oneSpot = await response.json()
       
        dispatch(loadOneSpot(oneSpot))
    }
} 

export const addSpot=(spotBody, user)=> async(dispatch)=> {
        const response = await csrfFetch(`/api/spots`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(spotBody)
        })
        if(response.ok){
            const newSpot = await response.json()
            dispatch(createOneSpot(newSpot))
        }else {
            const result = await response.json()
            return result
        }
    }
//state object
const initialState = {
    allSpots: {},
    singleSpot: {}
}

//reducer
const spotsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_SPOTS: 
            const newState = {...state};
            const newAllSpots = {}
            //console.log('action.list!!!!!!!!!!!', action.list)
            action.list.Spots.forEach((spot) => {newAllSpots[spot.id] = spot})
            newState.allSpots = newAllSpots
            return newState;
        
        case GET_ONE_SPOT_By_ID:
            const newState1 = {...state}
            newState1.singleSpot= action.spotId
            return newState1

        case CREATE_ONE_SPOT:
            const newState2 = {...state}
            newState2.allSpots= {...state.allSpots, [action.spot.id]: action.spot}
            return newState2
        default:
            return state
    }
}
export default spotsReducer;