using AmericaVirtualChallenge.Server.Services.Geocoding;
using AmericaVirtualChallenge.Server.Services.Weather;
using Microsoft.AspNetCore.Mvc;

namespace AmericaVirtualChallenge.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly IGeocodingService _geocodingService;
        private readonly IWeatherService _weatherService;

        public WeatherController(IGeocodingService geocodingService, IWeatherService weatherService)
        {
            _geocodingService = geocodingService;
            _weatherService = weatherService;
        }

        [HttpGet("getWeatherByCity")]
        public async Task<IActionResult> GetWeatherByCity(string city)
        {
            try
            {
                var cityCoordinates = await _geocodingService.GetCityCoordinates(city);

                var weatherData = await _weatherService.GetWeatherByCoordinates(cityCoordinates.Lat, cityCoordinates.Lon);

                return Ok(weatherData);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}
