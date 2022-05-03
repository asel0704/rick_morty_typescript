import {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card'
import RickAndMorty from "./components/RickAndMorty";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from './store/action';

const App = () => {
  const dispatch = useDispatch();
  // const characters = useSelector(state => state.characters.characters);
  // const loading = useSelector(state =>  state.characters.isLoading)
  const [characters, setCharacters ] = useState([])
  const [loading, setLoading ] = useState(false)
  console.log(characters)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character').then(response => {
      if (response.ok){
          return response.json();
      }
      throw response;
      }).then(data => {
        setCharacters(data.results)
        setLoading(true)
        // dispatch(fetchCharacters(data.results))
      })
  }, [])

  return (
    <div className="App">
        <Routes>
          {loading ? <Route path="/" element={<RickAndMorty data={characters} loading={loading}/> } />  : "" }
          <Route path="/card/:id" element={<Card data={characters} />} />
        </Routes>
    </div>  
  );
}

export default App;
