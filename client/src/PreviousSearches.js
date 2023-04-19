
export default function addPreviousSearch(weatherData) {
    if (weatherData && weatherData.status === 200) {
        let key = 0
        const {location} = weatherData.data
        
        //if there is data already in localStorage
        if (localStorage.length > 0) {

            //checks if new location already matches any in localStorage
            //and skips if there is a match
            for (let i = 1; i < localStorage.length+1; i++) {
                if (location === localStorage.getItem(i)){
                    return
                }
            };
            // if there are fewer than 5 searches, adds the new location
            // onto the list
            if (localStorage < 5) {
                key = localStorage.length + 1
                localStorage.setItem(key, location)
            } else {
                //if there are 5 items then have to remove one
                //removes earliest item
                localStorage.removeItem(1)
                //relabel keys for existing items
                let keys = Object.keys(localStorage);
                let tempObj = {}
                //puts existing items in a new temp object with new keys
                for (let key of keys) {
                    tempObj[key-1] = localStorage.getItem(key)
                }
                //dumps localStorage
                localStorage.clear()
                keys = Object.keys(tempObj);
                let tempVal = ''
                for (let key of keys) {
                    tempVal = tempObj[key];
                    localStorage.setItem(key, tempVal)
                }
                localStorage.setItem(5, location)
            };
        } else {
            //if there are no items in localStorage just add location
            key = localStorage.length + 1
            localStorage.setItem(key, location)
        }
    }
};

// export function clearStorage() {
//     localStorage.clear();
// }