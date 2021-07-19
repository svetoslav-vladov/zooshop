import React from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import useDarkMode from "../../hooks/useDarkMode";
import logo from "../../logo.png";

const Header = () => {

    const [darkMode, setDarkMode] = useDarkMode();

    const handleOnChange = ({ target: { checked } }) => {
        setDarkMode(checked);
    };

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" title="logo" />
                <div>
                    Dark Mode: <input type="checkbox" name="darkmode" onClick={handleOnChange}/>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default Header;