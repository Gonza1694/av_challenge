const API_URL = '/api/Weather/';

const weatherService = {

    fetchFiveDaysWeather: async (city, country) => {
        try {
            const url = `${API_URL}/getWeather?city=${city}&country=${country}`;
            const response = await fetch(url);
            console.log({response});
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Failed to fetch weather data: ${error.message}`);
        }
    }
}
    
export default weatherService;
