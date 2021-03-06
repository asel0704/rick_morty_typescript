import {
    FETCH_CHARACTERS,
    SEARCH_CHARACTERS,
    MALE_CHECKBOX,
    FEMALE_CHECKBOX,
    ALIVE_CHECKBOX,
    DEAD_CHECKBOX,
    UNKNOWN_CHECKBOX,
    FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, CHANGE_CURRENT_PAGE
} from "./types"
import {Dispatch} from 'redux'

export const fetchCharacters = (currentPage: number, gender:string,status:string, name:string ) => (dispatch: Dispatch<any>) => {
    dispatch({type: FETCH_CHARACTERS})
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&gender=${gender}&status=${status}&name=${name}`)
        .then((res) => res.json())
        .then((res) => {
            dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res})
        }).catch(() => {
        dispatch({type: FETCH_CHARACTERS_ERROR, payload: 'Ошибка при загрузке Rick and Morty characters'})
    })
}
export const changeCurrentPage = (newPage:number) =>(dispatch:Dispatch<any>) => {
    dispatch({
        type: CHANGE_CURRENT_PAGE,
        payload: newPage
    })
}
export function findCharacters(text: any) {
    return {
        type: SEARCH_CHARACTERS,
        payload: text
    }
}

export function maleCheckbox(data: any) {
    console.log(data)
    return {
        type: MALE_CHECKBOX,
        payload: data
    }
}

export function femaleCheckbox(data: any) {
    return {
        type: FEMALE_CHECKBOX,
        payload: data
    }
}

export function aliveCheckbox(data: any) {
    return {
        type: ALIVE_CHECKBOX,
        payload: data
    }
}

export function deadCheckbox(data: any) {
    return {
        type: DEAD_CHECKBOX,
        payload: data
    }
}

export function unknownCheckbox(data: any) {
    return {
        type: UNKNOWN_CHECKBOX,
        payload: data
    }
}