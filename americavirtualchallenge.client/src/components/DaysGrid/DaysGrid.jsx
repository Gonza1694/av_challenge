import React, { useEffect } from "react";
import styles from "./daysgrid.module.scss";
import useGetFiveDaysWeather from "../../hooks/getFiveDaysWeather";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const DaysGrid = () => {
  const { data, loading, error } = useGetFiveDaysWeather();

  useEffect(() => {
    console.log({ data, loading, error });

    return () => {};
  }, [data]);

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
      {data.map((day) => (
        <li key={day.id}>
          <p>{day.dayOfWeek}</p>
          <WeatherIcon iconName={day.main} />
          <b>
            {day.celsius} <span>°C</span>
          </b>
          <b>
            {day.fahrenheit} <span>°F</span>
          </b>
        </li>
      ))}
    </ul>
  );
};

export default DaysGrid;
