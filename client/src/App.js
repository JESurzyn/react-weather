// import logo from './logo.svg';
import SearchBar from './SearchBar';
import WeatherTable from './WeatherTable';
import PreviousSearchesTable from './PreviousSearchesTable';
import {getWeatherData} from './GetWeather';
import addPreviousSearch from './AddPreviousSearch';
import {useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react';


export async function loader({ request }) {
  const url = new URL(request.url);
  // console.log(url, ' this is the url in loader')
  const location = url.searchParams.get('location');
  if (location) {
    const weatherData = await getWeatherData(location)
    return weatherData
  } else {
    return null  
  }
}

export default function App() {
  const [show, setShow] = useState(false);
  const weatherData = useLoaderData();

  useEffect(() => {
    if (weatherData && weatherData.status === 400) {
        setShow(true)
      } else {
        setShow(false);
    };
    // console.log(weatherData)
    addPreviousSearch(weatherData.data.location);
    }, [weatherData])

  if (weatherData) {
    return (
      <div className="container pt-3" id="mainContainer">
        <SearchBar 
          // responseCode = {weatherData.status}
          show = {show} 
          setShow = {setShow} />

          <WeatherTable 
            weatherLocationData = {weatherData} />
          <PreviousSearchesTable />
      </div>
    );
  } else {
    return (
      <div className="container pt-3" id="mainContainer">
        <SearchBar 
          // responseCode = {weatherData.status}
          showError = {show} 
          setShow = {setShow} />
          <PreviousSearchesTable />
      </div>
    )
  }
}
