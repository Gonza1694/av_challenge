import React, { useEffect } from "react";
import styles from "./daysgrid.module.scss";
import useGetFiveDaysWeather from "../../hooks/getFiveDaysWeather";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const DaysGrid = ({ zone }) => {

    const { countryValue, cityValue } = zone;
    const { data, loading, error } = useGetFiveDaysWeather(cityValue, countryValue);

    useEffect(() => {

        return () => { };
    }, [data, zone]);

    if (loading) {
        return (
            <div className={styles.loading}>
                <p>Cargando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.loading}>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <ul className={styles.grid}>
            {data.data && data.data.length > 0 ? (
                data.data.slice(1).map((day, index) => (
                    <li key={`day-${index + 1}`}>
                        <p>{day.dayOfWeek ?? "Sin información"}</p>
                        <WeatherIcon iconName={day.weather?.code ?? ""} />
                        <b>{day.temperatureCelsius ?? "Sin información"} <span>°C</span></b>
                        <b>{day.temperatureFahrenheit ?? "Sin información"} <span>°F</span></b>
                    </li>
                ))
            ) : (
                <li key="no-data">Sin información</li>
            )}
        </ul>


    );
};

export default DaysGrid;