// import logo from './logo.svg';
import SearchBar from './SearchBar';
import WeatherTable from './WeatherTable';
import PreviousSearchesTable from './PreviousSearchesTable';
import {getWeatherData} from './GetWeather';
import {addPreviousSearch, pullLocalStorage} from './PreviousSearches';
import {useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react';


export async function loader({ request }) {
  const url = new URL(request.url);
  // console.log(url, ' this is the url in loader')
  let location = url.searchParams.get('location');
  let weatherData = {}
  if (location) {
    weatherData = await getWeatherData(location)
    addPreviousSearch(weatherData);
  } else {
    location = ""
  }
  const locationList = pullLocalStorage()
  const loaderPayload = [locationList, weatherData, location]
  return loaderPayload
}


export default function App() {
  const [show, setShow] = useState(false);
  const [locationList,weatherData, location] = useLoaderData();
  console.log(location)

  useEffect(() => {
    if (weatherData && weatherData.status === 400) {
        setShow(true)
      } else {
        setShow(false);
    };
    }, [weatherData])

  if (weatherData) {
    return (
      <div className="container pt-3" id="mainContainer">
        <SearchBar 
          // responseCode = {weatherData.status}
          show = {show} 
          setShow = {setShow}
          location = {location} />

          <WeatherTable 
            weatherLocationData = {weatherData} />
          <PreviousSearchesTable 
            locationList = {locationList} />
      </div>
    );
  } else {
    return (
      <div className="container pt-3" id="mainContainer">
        <SearchBar 
          // responseCode = {weatherData.status}
          showError = {show} 
          setShow = {setShow} />
          <PreviousSearchesTable 
            locationList = {locationList} />
      </div>
    )
  }
}
