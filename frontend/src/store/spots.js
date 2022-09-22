import { csrfFetch } from './csrf';

const GET_ALL_SPOTS = '/spots/getAllSpots';
const GET_ONE_SPOT_By_ID = 'spots/getOneSpot';
const CREATE_ONE_SPOT = 'spots/createOneSpot';
const UPDATE_ONE_SPOT = 'spots/updateOneSpot'
const DELETE_ONE_SPOT = 'spots/deleteOneSpot'
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

const updateOneSpot = (spot) => {
    return {
        type: UPDATE_ONE_SPOT,
        spot
    }
}

const deleteOneSpot = (spotId)=> {
    return {
        type: DELETE_ONE_SPOT,
        spotId
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
    //console.log(`/api/spots/${spotId}`)
    const response = await csrfFetch(`/api/spots/${spotId}`)
    //console.log('oneSpot!!!!!!!')
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
        }).catch(res=> res)
        
        if(response.ok){
            //console.log('###########1')
            const newSpot = await response.json()
            //console.log('###########2')
            dispatch(createOneSpot(newSpot))
            return newSpot
        }else {
            //console.log('###########21')
            const result = await response.json()
            //console.log('###########22')
            return result
        }
    }

export const addImage = (spotId, {preview, url}) => async(dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({preview, url})
    })
    if(response.ok){
        //console.log("&&&&&&&&&&&&&response", response)
        dispatch(getOneSpot(spotId))
        return response; 
    }
    return response
}

export const updateSpot = (spotBody, spotId) => async(dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(spotBody)
   
    }).catch(res=> res)
    if(response.ok){
        const updatedSpot = await response.json()
        dispatch(updateOneSpot(updatedSpot)) 
    }else{
        const result = await response.json();
        return result
    }
}

export const deleteSpot = (spotId) => async(dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`,{
        method: 'DELETE'
    });
    if(response.ok){
        dispatch(deleteOneSpot(spotId))
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
            const newState2 = {...state, allSpots: {...state.allSpots, [action.spot.id]: action.spot}}
            return newState2

        case UPDATE_ONE_SPOT:
            const newState3 = {...state}
            newState3.allSpots={...state.allSpots, [action.spot.id]: action.spot}
            newState3.singleSpot={...state.singleSpot, ...action.spot}
            //console.log('newState3!!!!!!!!!!', newState3)
            return newState3
        
        case DELETE_ONE_SPOT:
            const newState4 = {...state}
            delete newState4.allSpots[action.spotId]
            if(newState4.singleSpot.id === action.spotId) newState4.singleSpot={}
            return newState4
        default:
            return state
    }
}
export default spotsReducer;