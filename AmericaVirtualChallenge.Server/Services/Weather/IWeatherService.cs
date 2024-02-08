using AmericaVirtualChallenge.Data.Models;

namespace AmericaVirtualChallenge.Server.Services.Weather
{
    public interface IWeatherService
    {
        Task<WeatherResponse> GetWeatherByCoordinates(string city, string country);
    }
}
