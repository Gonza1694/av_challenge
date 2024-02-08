import React, { useEffect } from "react";
import styles from "./today.module.scss";
import Title from "../Title/Title";
import useGetWeather from "../../hooks/getWeather";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const Today = () => {
  const { data, loading, error } = useGetWeather("today");

  useEffect(() => {
    console.log({ data, loading, error });

    return () => {};
  }, [data]);

  if (loading) {
    return <div className={styles.loading}><p>Cargando...</p></div>;
  }

  if (error) {
    return <div className={styles.loading}><p>Error: {error}</p></div>;;
  }

  const nombreDia = "Lunes";

  return (
    <div className={styles.container}>
      <Title
        title="Reporte de hoy"
        color="#3F88C5"
        divisorColor="#3F88C5"
        size="1rem"
        divisorSize=".05rem"
      />
      <div className={styles.weatherTodayContainer}>
        <div id="today weather">
          <small>{data.country ?? "Sin información"}</small>
          <small>{data.city ?? "Sin información"}</small>
          <h2>{nombreDia}</h2>
          <h3>{data.weather.description ?? "Sin información"}</h3>
          <h4>
            {data.weather.temperatureCelsius} <span>°C</span>
          </h4>
          <h5>
            {" "}
            {data.weather.temperatureFahrenheit} <span>°F</span>
          </h5>
        </div>

        <div className={styles.weatherIconContainer} id="today status">
          <div>
            <WeatherIcon iconName={data.weather.main} />
          </div>
          <div>
            <p>Prob. de precipitaciones: {data.weather.chance_of_rain ?? 0}%</p>
            <p>Humedad: {data.weather.humidity ?? 0}%</p>
            <p>Viento a: {data.weather.wind.speed ?? 0}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
