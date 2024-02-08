import React from "react";
import styles from "./column.module.scss";
import ZoneSelector from "../ZoneSelector/ZoneSelector";
import Today from "../Today/Today";
const Column = () => {
  return (
    <div className={styles.container}>
      <div>
        <ZoneSelector />
      </div>
      <div>
        <Today />
      </div>
    </div>
  );
};

export default Column;
