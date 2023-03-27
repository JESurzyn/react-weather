// import './SearchBar.css'
import {useState} from 'react'
import ErrorFlash from './ErrorFlash';

function SearchBar({onLocationTextClick}) {
    const [inputField, setInputField] = useState({
        location:''
    })

    const inputsHandler = (evt) => {
        setInputField( {[evt.target.name]: evt.target.value})
    }

    const submitButton = (evt) => {
        evt.preventDefault();
        onLocationTextClick(inputField.location);
        setInputField({location:''});
    }

    return (
        <div className="container" id="search">
            <ErrorFlash />
            <h1>Find Today's Weather</h1>
            <form>
                <label htmlFor="location">Input City</label>
                <input 
                    className="m-1" 
                    type="text"
                    name="location"
                    id="location"
                    onChange={inputsHandler}
                    value={inputField.location}  />
                <button 
                    className="btn btn-primary" 
                    id="weatherSearch"
                    onClick={submitButton}>Search</button>
                {/* <button id="weatherSearch">Search</button> */}
            </form>
        </div>
    )
}

export default SearchBar;