import {FETCH_CHARACTERS, SEARCH_CHARACTERS, MALE_CHECKBOX, FEMALE_CHECKBOX, ALIVE_CHECKBOX,DEAD_CHECKBOX,UNKNOWN_CHECKBOX} from '../types'

interface CharactersState{
    characters: Array<any>,
    isLoading:boolean
}

const initialState : CharactersState = {
    characters: [],
    isLoading:false
}

export const charactersReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CHARACTERS:
            return {
                ...state, characters:action.payload, isLoading:true
            }
            break;
        case SEARCH_CHARACTERS:
            if (action.payload === ""){
                return state
            }
            return {
                ...state, characters : state.characters.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
            break;
        case MALE_CHECKBOX:
            return {
                ...state, characters:action.payload.filter(item => item.gender === "Male")
            }
        case FEMALE_CHECKBOX: 
            return {
                ...state, characters:action.payload.filter(item => item.gender === "Female")
            }
        case ALIVE_CHECKBOX:
            return {
                ...state, characters:action.payload.filter(item => item.status === "Alive")
            }       
        case DEAD_CHECKBOX:
            return {
                ...state, characters:action.payload.filter(item => item.status === "Dead")
            } 
        case UNKNOWN_CHECKBOX:
            return {
                ...state, characters:action.payload.filter(item => item.status === "unknown")
            } 
        default:
            return state;
    }
}