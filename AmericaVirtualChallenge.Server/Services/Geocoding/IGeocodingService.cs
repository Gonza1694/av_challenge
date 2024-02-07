using AmericaVirtualChallenge.Data.Models;

namespace AmericaVirtualChallenge.Server.Services.Geocoding
{
    public interface IGeocodingService
    {
        Task<GeocodingResponse> GetCityCoordinates(string city, string country);
    }
}
