import {
    FETCH_CHARACTERS,
    SEARCH_CHARACTERS,
    MALE_CHECKBOX,
    FEMALE_CHECKBOX,
    ALIVE_CHECKBOX,
    DEAD_CHECKBOX,
    UNKNOWN_CHECKBOX,
    FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR
} from "../types";
import {ReducerInitState} from "../types";

const initialState: ReducerInitState = {
    characters: [],
    isLoading: false,
    totalPage: 1,
    currentPage: 1,
}

export const charactersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {...state, isLoading: true, error: undefined}
        case FETCH_CHARACTERS_SUCCESS:
            return {...state, characters: action.payload, isLoading: false}
        case FETCH_CHARACTERS_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case SEARCH_CHARACTERS:
            if (action.payload === "") {
                return state
            }
            return {
                ...state,
                characters: state.characters.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case MALE_CHECKBOX:
            return {
                ...state, characters: action.payload.filter((item: any) => item.gender === "Male")
            }
        case FEMALE_CHECKBOX:
            return {
                ...state, characters: action.payload.filter((item: any) => item.gender === "Female")
            }
        case ALIVE_CHECKBOX:
            return {
                ...state, characters: action.payload.filter((item: any) => item.status === "Alive")
            }
        case DEAD_CHECKBOX:
            return {
                ...state, characters: action.payload.filter((item: any) => item.status === "Dead")
            }
        case UNKNOWN_CHECKBOX:
            return {
                ...state, characters: action.payload.filter((item: any) => item.status === "unknown")
            }
        default:
            return state;
    }
}