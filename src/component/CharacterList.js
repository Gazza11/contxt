import ListItem from "./ListItem"

const CharacterList = ({characters}) => {

    const characterItems = characters.map((character, index) => {
        return <ListItem character={character} key={index} />
    })

    return(
        <div>
            <ul>
                {characterItems}
            </ul>
        </div>
    )
}

export default CharacterList