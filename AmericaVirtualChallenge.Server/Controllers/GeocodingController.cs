using AmericaVirtualChallenge.Server.Services.Geocoding;
using Microsoft.AspNetCore.Mvc;

namespace AmericaVirtualChallenge.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeocodingController : ControllerBase
    {
        private readonly IGeocodingService _geocodingService;

        public GeocodingController(IGeocodingService geocodingService)
        {
            _geocodingService = geocodingService;
        }

        [HttpGet("getCityCoordinates")]
        public async Task<ActionResult<object>> GetCityCoordinates(string city)
        {
            try
            {
                var cityCoordinates = await _geocodingService.GetCityCoordinates(city);
                return Ok(cityCoordinates);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
