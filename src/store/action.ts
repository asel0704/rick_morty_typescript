import {SEARCH_CHARACTERS, FETCH_CHARACTERS, MALE_CHECKBOX, FEMALE_CHECKBOX, ALIVE_CHECKBOX,DEAD_CHECKBOX,UNKNOWN_CHECKBOX } from './types'


export function fetchCharacters(data){
    return {
        type:FETCH_CHARACTERS,
        payload:data
    }
}

export function findCharacters(text){
    return {
        type: SEARCH_CHARACTERS,
        payload:text
    }
}

export function maleCheckbox(data){
    console.log(data)
    return {
        type: MALE_CHECKBOX,
        payload:data
    }
}

export function femaleCheckbox(data){
    return {
        type: FEMALE_CHECKBOX,
        payload:data
    }
}

export function aliveCheckbox(data){
    return {
        type: ALIVE_CHECKBOX,
        payload:data
    }
}

export function deadCheckbox(data){
    return {
        type: DEAD_CHECKBOX,
        payload:data
    }
}
export function unknownCheckbox(data){
    return {
        type:UNKNOWN_CHECKBOX,
        payload:data
    }
}