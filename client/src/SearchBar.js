// import './SearchBar.css'
import ErrorFlash from './ErrorFlash';
import {Form} from 'react-router-dom';

function SearchBar() {
    return (
        <div className="container" id="search">
            {/* <ErrorFlash responseCode={responseCode}/> */}
            <ErrorFlash />
            <h1>Find Today's Weather</h1>
            <Form id='search-form' role='search'>
                <label htmlFor="location">Input City</label>
                <input
                    className="m-1"
                    type="text"
                    name="location"
                    id="location" />
                <button
                    className="btn btn-primary"
                    id="weatherSearch"
                    type="submit">Search</button>
            </Form>
        </div>
    )
}

export default SearchBar;