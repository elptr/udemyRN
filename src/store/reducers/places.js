import * as actionTypes from '../actions/actionTypes';

const initialState = { //just js object
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => { //reducer is just a function, executed when we receive a function

    switch (action.type) {
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName, //name from action/places.js (from action creators)
                    image: {
                        uri: 'https://www.geekyexplorer.com/wp-content/uploads/2017/04/must-visit-places-siquijor-island-cambuhagay-falls.jpg'
                    }
                })
            }
        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key
                }),
                selectedPlace: null
            }
        case actionTypes.SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey; //name from action/places.js (from action creators)
                })
            }
        case actionTypes.DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
}

export default reducer;