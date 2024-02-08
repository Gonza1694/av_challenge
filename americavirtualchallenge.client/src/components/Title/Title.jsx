import React from "react";
import styles from "./title.module.scss";

const Title = ({
  title = "Coloca un texto",
  isBold = true,
  size = "1.2rem",
  color = "black",
  divisorColor = "#F49D37",
  divisorSize = "0.15rem",
}) => {
  return (
    <div className={styles.title}>
      <h2 style={{ fontSize: size, color, fontWeight: isBold ? 'bold' : 'normal' }}>{title}</h2>
      <hr style={{ backgroundColor: divisorColor, height: divisorSize }} />
    </div>
  );
};

export default Title;
