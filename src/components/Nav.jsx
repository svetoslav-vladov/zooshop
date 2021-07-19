import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";


const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const handleOnChange = ({ target: { checked } }) => {
        setDarkMode(checked);
    };

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                Dark Mode: <input type="checkbox" name="darkmode" onClick={handleOnChange}/>
            </li>
        </ul>
    );
};

export default Nav;