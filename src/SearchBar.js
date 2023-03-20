// import './SearchBar.css'

function SearchBar() {
    return (
        <>
            <h1>Find Today's Weather</h1>
            <form>
            <label for="location">Input City</label>
                <input type="text" id="location" name="location" />
                {/* <button class="btn btn-primary" id="weatherSearch">Search</button> */}
                <button id="weatherSearch">Search</button>
            </form>
        </>
    )
}

export default SearchBar;