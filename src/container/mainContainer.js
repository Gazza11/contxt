import {useState, useEffect} from 'react'
import CharacterList from '../component/CharacterList'
import Header from '../component/Header'
import CharacterDetail from '../component/CharacterDetail'

const MainContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    useEffect(() => {
        getCharacters()
    }, [])

    // Intial call to the API
    const getCharacters = function () {
        fetch('https://psychonauts-api.herokuapp.com/api/characters?limit=20')
        .then(result => result.json())
        .then(characters => {
            setCharacters(characters)
        })
    }

const onCharacterClick = function (character){
    setSelectedCharacter(character)
    console.log('character selected')
    console.log(selectedCharacter)
    if (selectedCharacter === character) {
        setSelectedCharacter(null)
    }
}

    return (
        <div>
            <Header/>
            <div className='Main-Body'>
                <CharacterList characters = {characters} onCharacterClick={onCharacterClick}/>
                {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} /> : null}
            </div>
        </div>
    )
}

export default MainContainer;