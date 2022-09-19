import { csrfFetch } from './csrf';
const GET_ALL_SPOTS = '/spots/getAllSpots';



const loadSpots = (list) => {
  return {
    type: GET_ALL_SPOTS, 
    list
  };
};


//thunk action creator
export const getAllSpots = ()=> async(dispatch) => {
    
    const response = await csrfFetch('/api/spots')
    console.log('response!!!!!!!!!!', response)
    if(response.ok){
        const list = await response.json()
        console.log('list!!!!!!!!!!', list)
        dispatch(loadSpots(list))
    }
}

//state object
const initialState = {}

//reducer
const spotsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_SPOTS: 
            const allSpots = {};
            console.log('action.spots!!!!!!!!!!!', action.spots)
            action.spots.forEach((spot) => {allSpots[spot.id] = spot})
            return allSpots;
        
        default:
            return state
    }
}
export default spotsReducer;