import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Card from './components/Card'
import RickAndMorty from "./components/RickAndMorty";
import {useSelector, useDispatch} from 'react-redux';
import {useCharacterActions} from "./hooks/useCharacterActions";

const App = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state: any) => state.characters.characters);
    const loading = useSelector((state: any) => state.characters.isLoading)
    const currentPage = useSelector((state: any) => state.characters.currentPage)
    const {fetchCharacters} = useCharacterActions()
    useEffect(() => {
        fetchCharacters(currentPage)
    }, [fetchCharacters])
    console.log(characters)
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RickAndMorty data={characters} loading={loading}/>}/>
                <Route path="/card/:id" element={<Card data={characters}/>}/>
            </Routes>
        </div>
    );
}

export default App;
