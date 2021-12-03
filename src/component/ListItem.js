const ListItem = ({character}) => {
    return(
        <li>
            <h2>
                {character.name}
            </h2>
            <img src={character.img} width="240" height="300"></img>
        </li>
    )
}

export default ListItem