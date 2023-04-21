//import './PreviousSearchesTable.css';
// import PreviousSearchesLink from "./PreviousSearchesLink";
// import clearStorage from "./PreviousSearches";
// let locationList = []
// for (let i=1; i < localStorage.length+1; i++) {
//     locationList.push(<PreviousSearchesLink
//                             key={i} 
//                             location={localStorage.getItem(i)}/>)
// }
import {useState} from 'react';

// localStorageClear hook
// function useClearLocal() {
//     //createing state so state changes trigger rerendering
//     const [value, setValue] = useState(false)
//     localStorage.clear()
//     return () => setValue(value => !value);
// }

function PreviousSearchesTable({locationList}) {
    const [value, setValue] = useState(0)
    const useClearLocal = () => {
        localStorage.clear();
        setValue(value => value+1);
    }
    // const clearLocal = useClearLocal()

    return (
        <div className="container mt-5 p-4" id="previousSearches">
            <h6>Previous Searches</h6>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {locationList}
            </div>
            <button 
                className="btn btn-secondary mt-3 btn-sm"
                onClick={useClearLocal}>
                Clear Searches
            </button>
        </div>
    )

}

export default PreviousSearchesTable;