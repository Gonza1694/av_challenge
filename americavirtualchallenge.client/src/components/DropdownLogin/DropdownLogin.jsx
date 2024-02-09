import React, { useState, useEffect } from "react";
import styles from "./dropdown.module.scss";

const DropdownLogin = ({ handleLogin, setOpenDropdown }) => {
    const [loginData, setLoginData] = useState({
        username: localStorage.getItem("username") || "",
        password: localStorage.getItem("password") || ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (storedUsername && storedPassword) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLoginClick = () => {
        if (isLoggedIn) {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            setIsLoggedIn(false);
        } else {
            localStorage.setItem("username", loginData.username);
            localStorage.setItem("password", loginData.password);
            setIsLoggedIn(true);
        }
        handleLogin(loginData);
        setOpenDropdown(false);
    };

    return (
        <div className={styles.dropdown}>
            <div>
                <label>Usuario</label>
                <input
                    required
                    placeholder="Usuario"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Contraseña</label>
                <input
                    required
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={handleLoginClick}>{isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}</button>
                <button onClick={() => setOpenDropdown((prev) => !prev)}>CERRAR</button>
            </div>
        </div>
    );
};

export default DropdownLogin;
