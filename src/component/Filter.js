import {useState, useEffect} from "react"

const Filter = ({filterByName}) => {
    
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        filterByName(searchTerm)
    }, [searchTerm])

    const changeSearchTerm = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Filter by Name' onChange={changeSearchTerm}></input>
            </form>
        </div>
    )
}

export default Filter;