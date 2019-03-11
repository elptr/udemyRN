//action creators file, to run asynchronous code

import * as actionTypes from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: actionTypes.ADD_PLACE, //required
        placeName:placeName //payload
    }
}


export const deletePlace = () => {
    return {
        type: actionTypes.DELETE_PLACE, //required

    }
}


export const selectPlace = (key) => {
    return {
        type: actionTypes.SELECT_PLACE, //required
        placeKey:key //payload
    }
}


export const deselectPlace = () => {
    return {
        type: actionTypes.DESELECT_PLACE //required
    }
}