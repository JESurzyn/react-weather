//import './PreviousSearchesTable.css';
// import PreviousSearchesLink from "./PreviousSearchesLink";
// import clearStorage from "./PreviousSearches";
// let locationList = []
// for (let i=1; i < localStorage.length+1; i++) {
//     locationList.push(<PreviousSearchesLink
//                             key={i} 
//                             location={localStorage.getItem(i)}/>)
// }
import { useState, useEffect } from 'react';
import { pullLocalStorage } from './PreviousSearches';


function PreviousSearchesTable({ locationList }) {
    const [locations, setLocationList] = useState(locationList)
    const useClearLocal = () => {
        localStorage.clear();
        const newLocList = pullLocalStorage()
        setLocationList(newLocList)
    }
    useEffect(() => {
        setLocationList(locationList)
    }, [locationList])

    if (locations.length > 0) {
        return (
            <div className="container mt-5 p-4" id="previousSearches">
                <h6>Previous Searches</h6>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {/* {locationList} */}
                    {locations}
                </div>
                <button
                    className="btn btn-secondary mt-3 btn-sm"
                    onClick={useClearLocal}>
                    Clear Searches
                </button>
            </div>
        )
    } else {
        return null
    }

}

export default PreviousSearchesTable;