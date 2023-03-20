// import './SearchBar.css'

function SearchBar() {
    return (
        <div className="container" id="search">
            <h1>Find Today's Weather</h1>
            <form>
                <label for="location">Input City</label>
                <input className="m-1" type="text" id="location" name="location" />
                <button className="btn btn-primary" id="weatherSearch">Search</button>
                {/* <button id="weatherSearch">Search</button> */}
            </form>
        </div>
    )
}

export default SearchBar;