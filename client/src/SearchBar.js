// import './SearchBar.css'
import {useState} from 'react'
import axios from 'axios'; 
import ErrorFlash from './ErrorFlash';

function SearchBar({setWeatherData}) {
    const [inputField, setInputField] = useState({
        location:''
    })

    const inputsHandler = (evt) => {
        setInputField( {[evt.target.name]: evt.target.value})
    };

    
    const submitButton = async (evt) => {
        evt.preventDefault();
        const config = {params: {location:inputField.location }}
        const res = await axios.get('http://localhost:5000/search', config);
        // console.log(res);
        // console.log(res.status);
        // console.log(res.data);
        // console.log(res.data.location);
        if (res.status === 200) {
            setWeatherData(res);
        }
        
        
        // setValidatedLocationText(inputField.location);
        // setInputField({location:''});
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