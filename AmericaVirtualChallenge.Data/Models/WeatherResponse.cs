using Newtonsoft.Json;

namespace AmericaVirtualChallenge.Data.Models
{
    public class WeatherResponse
    {
        [JsonProperty("data")]
        public List<WeatherData> Data { get; set; }

        [JsonProperty("city_name")]
        public string CityName { get; set; }

        [JsonProperty("country_code")]
        public string CountryCode { get; set; }
    }
}
