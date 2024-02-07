using AmericaVirtualChallenge.Data.Models;
using System.Text.Json;

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

        public async Task<WeatherResponse> GetWeatherByCoordinates(double lat, double lon)
        {
            string apiUrl = $"https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={_apiKey}&units=metric";
            var httpClient = new HttpClient();

            var response = await httpClient.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();

                try
                {
                    Console.WriteLine($"WEATHER JSON: {jsonString}");

                    var weatherData = JsonSerializer.Deserialize<WeatherResponse>(jsonString,
                        new JsonSerializerOptions()
                        {
                            PropertyNameCaseInsensitive = true
                        });

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
