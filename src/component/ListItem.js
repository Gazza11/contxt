const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function () {
        onCharacterClick(character)
    }
    return(

        <li>
            <h2 onClick={handleClick} className='capitalise'>
                <a>{character.name}</a>
            </h2>
            <a onClick={handleClick}>
                <img src={character.img} width="240" height="300" alt='{character}'></img>
            </a>
        </li>
    )
}

export default ListItem