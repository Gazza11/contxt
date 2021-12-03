import {useState, useEffect} from "react"

const Filter = ({filterByName, filterByGender}) => {
    
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTermGender, setSearchTermGender] = useState("")

    useEffect(() => {
        filterByName(searchTerm)
    }, [searchTerm])

    useEffect(() => {
        filterByGender(searchTermGender)
    }, [searchTermGender])

    const changeSearchTerm = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    const changeSearchTermGender = (event) => {
        event.preventDefault()
        setSearchTermGender(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Filter by Name' onChange={changeSearchTerm}></input>
            </form>
            <select onChange={changeSearchTermGender}>
                <option value="">Select a Gender</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
            </select>
        </div>
    )
}

export default Filter;