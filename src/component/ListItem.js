const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function () {
        onCharacterClick(character)
    }
    return(

        <li>
            <h2 onClick={handleClick} className='capitalise'>
                <a>{character.name}</a>
            </h2>
            <img src={character.img} width="240" height="300" alt='{character}'></img>
        </li>
    )
}

export default ListItem