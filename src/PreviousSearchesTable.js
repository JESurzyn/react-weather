//import './PreviousSearchesTable.css';
import PreviousSearchesLink from "./PreviousSearchLink";

function PreviousSearchesTable() {
    return (
        <div className="container mt-5 p-4" id="previousSearches">
            <h6>Previous Searches</h6>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <PreviousSearchesLink />
                <PreviousSearchesLink />
                <PreviousSearchesLink />
                <PreviousSearchesLink />
                <PreviousSearchesLink />
            </div>
            <button className="btn btn-secondary mt-3 btn-sm">Clear Searches</button>
        </div>
    )

}

export default PreviousSearchesTable;