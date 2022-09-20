import { csrfFetch } from './csrf';

const GET_ALL_SPOTS = '/spots/getAllSpots';
const GET_ONE_SPOT_By_ID = 'spots/getOneSpot';


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
        default:
            return state
    }
}
export default spotsReducer;