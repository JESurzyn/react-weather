import axios from 'axios'

export async function getWeatherData(location) {
    try {
        const config = {params: { location: location} }
        const res = await axios.get('https://localhost:5000/search', config);
        return res
    } catch(e) {
        return {}
    }
}