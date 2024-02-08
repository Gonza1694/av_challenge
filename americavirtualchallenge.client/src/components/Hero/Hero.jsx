import React, { useState } from "react";
import styles from "./hero.module.scss";
import DaysGrid from "../DaysGrid/DaysGrid";
import Column from "../Column/Column";
import Title from "../Title/Title";
import NotLogin from "../NotLogin/NotLogin";

const Hero = () => {
    const [zone, setZone] = useState({ cityValue: '', countryValue: '' })

    return (
        <section className={styles.container}>
            <Title title="SERVICIO DEL CLIMA" divisorColor="#ff6859" />
            <div className={styles.columnContainer}>
                <Column setZone={setZone} zone={zone} />
            </div>
            <div className={styles.gridContainer}>
                <DaysGrid zone={zone} />
            </div>
        </section>
    );
};

export default Hero;
