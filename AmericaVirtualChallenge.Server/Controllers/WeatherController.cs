using AmericaVirtualChallenge.Server.Services.Weather;
using Microsoft.AspNetCore.Mvc;

namespace AmericaVirtualChallenge.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet("getWeather")]
        public async Task<IActionResult> GetWeather(string city, string country)
        {
            try
            {
                var weatherData = await _weatherService.GetWeatherByCoordinates(city, country);

                return Ok(weatherData);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}
