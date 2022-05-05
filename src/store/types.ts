export const SEARCH_CHARACTERS = "SEARCH_CHARACTERS"
export const FETCH_CHARACTERS = "FETCH_CHARACTERS"
export const MALE_CHECKBOX = "MALE_CHECKBOX";
export const FEMALE_CHECKBOX = "FEMALE_CHECKBOX";
export const ALIVE_CHECKBOX = "ALIVE_CHECKBOX";
export const DEAD_CHECKBOX = "DEAD_CHECKBOX";
export const UNKNOWN_CHECKBOX = "UNKNOWN_CHECKBOX";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR"

export type Character = {
    id: number
    created: string | Date
    episode: unknown
    gender: string
    image: string
    location: unknown
    name: string
    origin: unknown
    species: string
    status: string
    type: string
    url: string
}

export type ReducerInitState = {
    characters: Character[]
    isLoading: boolean
    totalPage: number
    currentPage: number
    error?: string
}