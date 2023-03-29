//import './WeatherTable.js'

function WeatherTable({weatherLocationData}) {
    return (
        <div className="container my-5 p-4 border">
            <h3>
              {weatherLocationData.locationName} right now is {weatherLocationData.generalDescription}
            </h3>
            <table className="table border">
                <thead>
                    <tr className="table-success">
                        <th>Temperature (F)</th>
                        <th>Humidity</th>
                        <th>Precipitation</th>
                        <th>Cloud Cover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {weatherLocationData.forecast.temperature} &#176;
                        </td>
                        <td>
                            {weatherLocationData.forecast.humidity}%
                        </td>
                        <td>
                            {weatherLocationData.forecast.precipitation} in.
                        </td>
                        <td>
                            {weatherLocationData.forecast.cloudCover}%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default WeatherTable;