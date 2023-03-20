//import './PreviousSearchesTable.css';

function PreviousSearchesTable() {
    return (
        <>
            <div class="container mt-5 p-4" id="previousSearches">
                <h6><u>Previous Searches</u></h6>
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <a href="search?location=New York">New York</a>
                    </div>
                    <div class="col">
                        <a href="search?location=New York">New York</a>
                    </div>
                    <div class="col">
                        <a href="search?location=New York">New York</a>
                    </div>
                    <div class="col">
                        <a href="search?location=New York">New York</a>
                    </div>
                    <div class="col">
                        <a href="search?location=New York">New York</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PreviousSearchesTable;