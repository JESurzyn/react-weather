//import './PreviousSearchesTable.css';

function PreviousSearchesTable() {
    return (
        <div className="container mt-5 p-4" id="previousSearches">
            <h6>Previous Searches</h6>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div className="col">
                    <a href="search?location=New York">New York</a>
                </div>
                <div className="col">
                    <a href="search?location=New York">New York</a>
                </div>
                <div className="col">
                    <a href="search?location=New York">New York</a>
                </div>
                <div className="col">
                    <a href="search?location=New York">New York</a>
                </div>
                <div className="col">
                    <a href="search?location=New York">New York</a>
                </div>
            </div>
            <button className="btn btn-secondary mt-3 btn-sm">Clear Searches</button>
        </div>
    )

}

export default PreviousSearchesTable;