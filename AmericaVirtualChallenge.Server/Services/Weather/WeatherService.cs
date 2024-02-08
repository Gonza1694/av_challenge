using AmericaVirtualChallenge.Data.Models;
using Newtonsoft.Json;

namespace AmericaVirtualChallenge.Server.Services.Weather
{
    public class WeatherService : IWeatherService
    {
        private readonly IConfiguration _configuration;
        private readonly string _apiKey;

        public WeatherService(
            IConfiguration configuration)
        {
            _configuration = configuration;
            _apiKey = _configuration["OpenWeatherMap:ApiKey"];

        }

        public async Task<WeatherResponse> GetWeatherByCoordinates(string city, string country)
        {
            int forecastDays =5;
            string apiUrl = $"https://api.weatherbit.io/v2.0/forecast/daily?city={city},{country}&days={forecastDays}&lang=es&key={_apiKey}";

            var httpClient = new HttpClient();

            var response = await httpClient.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();

                try
                {
                    var weatherData = JsonConvert.DeserializeObject<WeatherResponse>(jsonString);

                    return weatherData;

                }
                catch (Exception ex)
                {
                    throw new HttpRequestException($"Error en la deserializacion: {ex.Message}");
                }

            }
            else
            {
                throw new HttpRequestException($"Error al recuperar informacion del clima. Status code: {response.StatusCode}");
            }
        }

    }
}
