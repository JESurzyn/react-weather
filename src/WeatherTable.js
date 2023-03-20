//import './WeatherTable.js'

function WeatherTable() {
    return (
        <div className="container my-5 p-4 border">
            <h3>
              Static's weather right now is Cloudy and Sunny
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
                            1,000 &#176;
                        </td>
                        <td>
                            200%
                        </td>
                        <td>
                            400 in.
                        </td>
                        <td>
                            130%
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default WeatherTable;