// import logo from './logo.svg';
import SearchBar from './SearchBar';
import WeatherTable from './WeatherTable';
import PreviousSearchesTable from './PreviousSearchesTable';
import './App.css';

function App() {
  return (
    <>
      <body>
        <div>
          <SearchBar />
          <WeatherTable />
          <PreviousSearchesTable />
        </div>
      </body>
      <footer class="footer bg-secondary py-3 mt-auto">
        <div class="container">
          Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
          <a href="https://www.weatherapi.com/" title="Free Weather API"><img
            src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com"
            border="0" /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
