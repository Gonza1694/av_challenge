import React, { useEffect, useRef, useState } from "react";
import styles from "./zoneselector.module.scss";
import Title from "../Title/Title";
import { useForm } from "react-hook-form";
import useGetZoneSelector from "../../hooks/getZoneSelector";
import { v4 as uuid } from "uuid";

const ZoneSelector = ({ setZone }) => {
    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { data, loading, error } = useGetZoneSelector();
    const [countryValue, setCountryValue] = useState('')
    const [cityValue, setCityValue] = useState('')
    const [whichCitiesToShow, setWhichCitiesToShow] = useState([]);

    const onSubmit = (data) => {
        console.log({ countryValue, cityValue });
        setZone({ countryValue, cityValue })
    };

    useEffect(() => {

        return () => { };
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


    const handleCountryZelector = (e) => {
        const countryValue = e.target.value;
        setCountryValue(countryValue)

        const citiesToShow = data.countries.find(country => country.code === countryValue)
        setWhichCitiesToShow(citiesToShow.cities)
    }

    return (
        <div className={styles.container}>
            <Title
                title="Seleccioná la zona"
                color="#3F88C5"
                divisorColor="#3F88C5"
                size="1rem"
                divisorSize=".05rem"
            />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
                <div>
                    <label>País</label>
                    <select
                        value={countryValue}
                        required
                        onChange={handleCountryZelector}
                    >
                        <option value="" disabled>
                            Seleccioná un país
                        </option>
                        {data?.countries?.map((country) => (
                            <option key={uuid()} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    {errors.country && <span>Por favor seleccioná un país</span>}
                </div>
                <div>
                    <label>Ciudad</label>
                    <select required value={cityValue} onChange={e => setCityValue(e.target.value)}>
                        <option value="" disabled>
                            Seleccioná una ciudad
                        </option>
                        {whichCitiesToShow.map((city) => (
                            <option key={uuid()} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                    {errors.city && <span>Por favor seleccioná una ciudad</span>}
                </div>
                <input type="submit" value="Buscar" title="Buscar" />
            </form>
        </div>
    );
};

export default ZoneSelector;
