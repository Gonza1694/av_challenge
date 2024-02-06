﻿using AmericaVirtualChallenge.Data.Models;
using System.Text.Json;

namespace AmericaVirtualChallenge.Server.Services.Geocoding
{
    public class GeocodingService : IGeocodingService
    {
        private readonly IConfiguration _configuration;
        private readonly string _apiKey;

        public GeocodingService(
            IConfiguration configuration)
        {
            _configuration = configuration;
            _apiKey = _configuration["OpenWeatherMap:ApiKey"];

        }

        public async Task<GeocodingResponse> GetCityCoordinates(string cityName)
        {
            string apiUrl = $"http://api.openweathermap.org/geo/1.0/direct?q={cityName}&limit=5&appid={_apiKey}";

            var httpClient = new HttpClient();

            var response = await httpClient.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                string country = "AR";
                var jsonString = await response.Content.ReadAsStringAsync();

                try
                {
                    Console.WriteLine($"GEOCODING JSON: {jsonString}");

                    var cities = JsonSerializer.Deserialize<List<GeocodingResponse>>(jsonString,
                        new JsonSerializerOptions()
                        {
                            PropertyNameCaseInsensitive = true
                        });

                    var city = cities.FirstOrDefault(c => c.Country == country);

                    if (city != null)
                    {
                        return city;
                    }
                    else
                    {
                        throw new HttpRequestException("No se encontraron coordenadas.");
                    }
                }
                catch (Exception ex)
                {
                    throw new HttpRequestException($"Error en la deserializacion: {ex.Message}");
                }
            }
            else
            {
                throw new HttpRequestException($"Error al recuperar las coordenadas. Status code: {response.StatusCode}");
            }
        }
    }
}