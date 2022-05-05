import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as characterActionCreators from '../store/action'

export const useCharacterActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(characterActionCreators, dispatch)
    }, [dispatch])
}