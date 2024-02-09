import React, { useState } from "react";
import styles from "./header.module.scss";
import LoginButton from "./LoginButton";
import DropdownLogin from "../DropdownLogin/DropdownLogin";

const Header = ({ handleLogin, loggedIn }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <header className={styles.container}>
            <b>America Virtual</b>
            <LoginButton setOpenDropdown={setOpenDropdown}
                loggedIn={loggedIn}
                handleLogin={handleLogin}
            >
                {openDropdown && (
                    <DropdownLogin
                        handleLogin={handleLogin}
                        setOpenDropdown={setOpenDropdown}
                    />
                )}
            </LoginButton>            
        </header>
    );
};

export default Header;
