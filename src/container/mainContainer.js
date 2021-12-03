import {useState, useEffect} from 'react'
import CharacterList from '../component/CharacterList'
import Header from '../component/Header'
import CharacterDetail from '../component/CharacterDetail'
import Filter from '../component/Filter'

const MainContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [filteredCharacters, setFilteredCharacters] = useState([])

    useEffect(() => {
        getCharacters()
    }, [])

    // Intial call to the API
    const getCharacters = function () {
        fetch('https://psychonauts-api.herokuapp.com/api/characters?limit=20')
        .then(result => result.json())
        .then(characters => {
            setCharacters(characters)
            setFilteredCharacters(characters)
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

const filterByName = (searchTerm) => {
    const filteredCharacters = characters.filter((character) => {
        return character.name.indexOf(searchTerm) > -1
    })

    setFilteredCharacters(filteredCharacters)
}

const filterByGender = (gender) => {
    let filteredCharactersByGender = characters.filter((character) => {
        return character.gender.indexOf(gender) > -1
    })
    setFilteredCharacters(filteredCharactersByGender)
}


    return (
        <div>
            <Header/>
            <Filter filterByName={filterByName} filterByGender={filterByGender}/>
            <div className='Main-Body'>
                <CharacterList characters = {filteredCharacters} onCharacterClick={onCharacterClick}/>
                {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} /> : null}
            </div>
        </div>
    )
}

export default MainContainer;