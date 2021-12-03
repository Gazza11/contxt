import ListItem from "./ListItem"

const CharacterList = ({characters, onCharacterClick}) => {

    const characterItems = characters.map((character, index) => {
        return <ListItem character={character} key={index} onCharacterClick={onCharacterClick}/>
    })

    return(
        <div>
            <ul className='character-items'>
                {characterItems}
            </ul>
        </div>
    )
}

export default CharacterList