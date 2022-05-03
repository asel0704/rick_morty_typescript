import {FETCH_CHARACTERS, SEARCH_CHARACTERS, MALE_CHECKBOX, FEMALE_CHECKBOX, ALIVE_CHECKBOX, DEAD_CHECKBOX, UNKNOWN_CHECKBOX } from "./types"

export function fetchCharacters(data:any){
    return {
        type:FETCH_CHARACTERS,
        payload:data
    }
}

export function findCharacters(text:any){
    return {
        type: SEARCH_CHARACTERS,
        payload:text
    }
}

export function maleCheckbox(data:any){
    console.log(data)
    return {
        type: MALE_CHECKBOX,
        payload:data
    }
}

export function femaleCheckbox(data:any){
    return {
        type: FEMALE_CHECKBOX,
        payload:data
    }
}

export function aliveCheckbox(data:any){
    return {
        type: ALIVE_CHECKBOX,
        payload:data
    }
}

export function deadCheckbox(data:any){
    return {
        type: DEAD_CHECKBOX,
        payload:data
    }
}
export function unknownCheckbox(data:any){
    return {
        type:UNKNOWN_CHECKBOX,
        payload:data
    }
}