using Newtonsoft.Json;

namespace AmericaVirtualChallenge.Data.Models
{
    //TODO: Separar las clases de WeatherResponse
    public class WeatherResponse
    {
        public List<ForecastData> List { get; set; }

        public City City { get; set; }
    }

    public class ForecastData
    {
        [JsonProperty("main")]
        public Main MainWeatherData { get; set; }

        public List<Weather> Weather { get; set; }

        [JsonProperty("pop")]
        public double ProbabilityOfPrecipitation { get; set; }

        [JsonProperty("dt_txt")]
        public DateTime DtTxt { get; set; }

        [JsonIgnore]
        public string DayOfWeek
        {
            get
            {
                return DtTxt.ToString("dddd");
            }
        }
    }

    public class Weather
    {
        public int Id { get; set; }

        [JsonProperty("main")]
        public string WeatherParameter { get; set; }

        public string Description { get; set; }

        public string Icon { get; set; }
    }

    public class Main
    {
        [JsonProperty("temp")]
        public double Temp { get; set; }

        [JsonProperty("feels_like")]
        public double FeelsLike { get; set; }

        [JsonProperty("temp_min")]
        public double TempMin { get; set; }

        [JsonProperty("temp_max")]
        public double TempMax { get; set; }

        public int Pressure { get; set; }

        public int Humidity { get; set; }
    }

    public class Coord
    {
        public double Lat { get; set; }

        public double Lon { get; set; }
    }

    public class City
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Coord Coord { get; set; }

        public string Country { get; set; }
    }
}
