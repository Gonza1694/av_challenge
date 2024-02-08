import React from "react";
import styles from "./column.module.scss";
import ZoneSelector from "../ZoneSelector/ZoneSelector";
import Today from "../Today/Today";
const Column = ({ setZone, zone }) => {
    return (
        <div className={styles.container}>
            <div>
                <ZoneSelector setZone={setZone} />
            </div>
            <div>
                <Today zone={zone} />
            </div>
        </div>
    );
};

export default Column;
