import React, { useState } from "react";
import styles from "./header.module.scss";
import LoginButton from "./LoginButton";
import DropdownLogin from "../DropdownLogin/DropdownLogin";

const Header = ({ handleLogin }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className={styles.container}>
      <b>America Virtual</b>
      <LoginButton setOpenDropdown={setOpenDropdown}>
        {openDropdown && <DropdownLogin handleLogin={handleLogin} setOpenDropdown={setOpenDropdown} />}
      </LoginButton>
    </header>
  );
};

export default Header;
