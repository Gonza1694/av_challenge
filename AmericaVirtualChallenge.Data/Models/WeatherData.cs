using Newtonsoft.Json;

namespace AmericaVirtualChallenge.Data.Models
{
    public class WeatherData
    {
        [JsonProperty("valid_date")]
        public DateTime ValidDate { get; set; }

        [JsonIgnore]
        public string DayOfWeek
        {
            get
            {
                return ValidDate.ToString("dddd");
            }
        }

        [JsonProperty("wind_spd")]
        public double WindSpeed { get; set; }

        [JsonProperty("temp")]
        public double TemperatureCelsius { get; set; }

        [JsonIgnore]
        public string TemperatureFahrenheit
        {
            get
            {
                return ((TemperatureCelsius * 9 / 5) + 32).ToString("F2");
            }
        }

        [JsonProperty("pop")]
        public int ProbabilityOfPrecipitation { get; set; }

        [JsonProperty("pres")]
        public double Pressure { get; set; }

        [JsonProperty("rh")]
        public double Humidity { get; set; }

        [JsonProperty("weather")]
        public WeatherDetail Weather { get; set; }

    }
}
