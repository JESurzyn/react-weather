// import logo from './logo.svg';
// import SearchBar from './SearchBar';
// import WeatherTable from './WeatherTable';
// import PreviousSearchesTable from './PreviousSearchesTable';
// import { useState } from 'react';
// // import './App.css';

// let weatherData = {
//   weatherData1: 
//     {
//       locationName: 'weatherData1',
//       generalDescription: 'Overcast',
//       forecast: {
//         temperature: '100',
//         humidity: '300',
//         precipitation: '20',
//         cloudCover: '180'
//       }
//     },
//   weatherData2:
//     {
//     locationName: 'weatherData2',
//     generalDescription: 'Sunny',
//     forecast: {
//       temperature: '200',
//       humidity: '20',
//       precipitation: '0',
//       cloudCover: '0'
//       }
//     },
//   weatherData3:
//     {
//     locationName: 'weatherData3',
//     generalDescription: 'Rainy',
//     forecast: {
//       temperature: '50',
//       humidity: '300',
//       precipitation: '100',
//       cloudCover: '100'
//       },
//     } 
// }

// function App() {
//   const [locationText, setLocationText] = useState('weatherData1');
//   // const [weatherState]
//   return (
//     <div className="container pt-3" id="mainContainer">
//       <SearchBar 
//         onLocationTextClick ={setLocationText}/>
//       {/* <WeatherTable 
//         weatherData = {weatherData}
//         locationText = {locationText} /> */}
//       <WeatherTable 
//         weatherLocationData = {weatherData[locationText]} />
//       <PreviousSearchesTable />
//     </div>
//   );
// }

// export default App;

//just examples for basic fetching of backend api
import { useEffect, useState} from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    )
  })

  return (
    <div>
      
    </div>
  )

}

