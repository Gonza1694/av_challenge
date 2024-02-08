import React from "react";
import styles from "./hero.module.scss";
import DaysGrid from "../DaysGrid/DaysGrid";
import Column from "../Column/Column";
import Title from "../Title/Title";
import NotLogin from "../NotLogin/NotLogin";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Title title="SERVICIO DEL CLIMA" divisorColor="#ff6859"/>
      <div className={styles.columnContainer}>
        <Column />
      </div>
      <div className={styles.gridContainer}>
        <DaysGrid />
      </div>
    </section>
  );
};

export default Hero;
