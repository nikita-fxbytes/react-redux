import { ADD_TO_CARD, REMOVE_TO_CARD } from "../constant"

export const addToCart = (data) =>{
    return {
        type: ADD_TO_CARD,
        data: data
    }
}

export const removeToCart = () =>{
    console.log(';;')
    return {
        type: REMOVE_TO_CARD
    }
}