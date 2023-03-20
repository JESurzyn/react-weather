// import logo from './logo.svg';
import SearchBar from './SearchBar';
import WeatherTable from './WeatherTable';
import PreviousSearchesTable from './PreviousSearchesTable';
// import './App.css';

function App() {
  return (
    <div className="container pt-3" id="mainContainer">
      <SearchBar />
      <WeatherTable />
      <PreviousSearchesTable />
    </div>
  );
}

export default App;
