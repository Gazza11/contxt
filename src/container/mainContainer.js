import {useState, useEffect} from 'react'
import CharacterList from '../component/CharacterList'

const MainContainer = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = function () {
        fetch('https://psychonauts-api.herokuapp.com/api/characters?limit=20')
        .then(result => result.json())
        .then(characters => {
            console.log(characters[0].name)
            setCharacters(characters)
        })
    }

    return (
        <div>
            <h1>
                Help
            </h1>
            <CharacterList characters = {characters}></CharacterList>
        </div>
    )
}

export default MainContainer;