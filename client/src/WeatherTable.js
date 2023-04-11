//import './WeatherTable.js'

function WeatherTable({ weatherLocationData }) {
    if (weatherLocationData.status && weatherLocationData.status  === 200) {
        return (
            <div className="container my-5 p-4 border">
                <h3>
                    {weatherLocationData.data.location}'s weather right now is {weatherLocationData.data.text}
                    <img src={weatherLocationData.data.icon} />
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
                                {weatherLocationData.data.temp_f} &#176;
                            </td>
                            <td>
                                {weatherLocationData.data.humidity}%
                            </td>
                            <td>
                                {weatherLocationData.data.precip_in} in.
                            </td>
                            <td>
                                {weatherLocationData.data.cloud}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return null
    }
}

export default WeatherTable;