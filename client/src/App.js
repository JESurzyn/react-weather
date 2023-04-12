// import logo from './logo.svg';
import SearchBar from './SearchBar';
import WeatherTable from './WeatherTable';
import PreviousSearchesTable from './PreviousSearchesTable';
import {getWeatherData} from './GetWeather';
import {useLoaderData} from 'react-router-dom'


export async function loader({ request }) {
  const url = new URL(request.url);
  const location = url.searchParams.get('location');
  const weatherData = await getWeatherData(location)
  console.log(weatherData)
  return weatherData
}

export default function App() {
  const weatherData = useLoaderData();

  return (
    <div className="container pt-3" id="mainContainer">
      <SearchBar />

        <WeatherTable 
          weatherLocationData = {weatherData} />
        <PreviousSearchesTable />
    </div>
  );
}

