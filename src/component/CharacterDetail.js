const CharacterDetail = ({selectedCharacter}) => {
    return(
        <div className='fixed-details'>
            <h2 className='capitalise'>Character Abilities - {selectedCharacter.name}</h2>
            <h4>
                {selectedCharacter.psiPowers ? selectedCharacter.psiPowers.map(power => (
                    <div>
                        <h4 className='capitalise'>{power.name}</h4><img src={power.img}></img>
                        <p> - {power.description}</p>
                        <br></br>
                    </div>
                )): "No Powers"}
            </h4>
        </div>
    )
}

export default CharacterDetail