import React from "react";
import styles from "./dropdown.module.scss";

const DropdownLogin = ({ handleLogin, setOpenDropdown }) => {
  return (
    <div className={styles.dropdown}>
      <div>
        <label>Usuario</label>
        <input required placeholder="Usuario" />
      </div>
      <div>
        <label>Contraseña</label>
        <input required type="password" placeholder="Contraseña" />
      </div>
      <div>
        <button onClick={handleLogin}>INICIAR SESIÓN</button>
        <button onClick={() => setOpenDropdown((prev) => !prev)}>CERRAR</button>
      </div>
    </div>
  );
};

export default DropdownLogin;
