import React, { useEffect } from "react";
import styles from "./today.module.scss";
import Title from "../Title/Title";
import useGetFiveDaysWeather from "../../hooks/getFiveDaysWeather";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const Today = ({ zone }) => {

    const { countryValue, cityValue } = zone;
    const { data, loading, error } = useGetFiveDaysWeather(cityValue, countryValue);


    useEffect(() => {

        return () => { };
    }, [data, zone]);

    if (loading) {
        return <div className={styles.loading}><p>Cargando...</p></div>;
    }

    if (error) {
        return <div className={styles.loading}><p>Error: {error}</p></div>;
    }

    const todayWeather = data?.data[0];

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
                    <small>{data.cityName ?? "Sin información"},</small>
                    <small>{data.countryCode ?? "Sin información"}</small>
                    <h2>{todayWeather?.dayOfWeek ?? "Sin información"}</h2>
                    <h3>{todayWeather?.weather?.description ?? "Sin información"}</h3>
                    <h4>
                        {todayWeather?.temperatureCelsius ?? "Sin información"} <span>°C</span>
                    </h4>
                    <h5>
                        {todayWeather?.temperatureFahrenheit ?? "Sin información"} <span>°F</span>
                    </h5>
                </div>

                <div className={styles.weatherIconContainer} id="today status">
                    <div>
                        <WeatherIcon iconName={todayWeather?.weather?.code ?? ""} />
                    </div>
                    <div>
                        <p>Prob. de precipitaciones: {todayWeather?.probabilityOfPrecipitation ?? 0}%</p>
                        <p>Humedad: {todayWeather?.relativeHumidity ?? 0}%</p>
                        <p>Viento a: {todayWeather?.windSpeed ?? 0}km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Today;