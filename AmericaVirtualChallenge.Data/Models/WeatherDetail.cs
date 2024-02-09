using Newtonsoft.Json;

namespace AmericaVirtualChallenge.Data.Models
{
    public class WeatherDetail
    {
        [JsonProperty("icon")]
        public string Icon { get; set; }

        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
