import React from "react";
import styles from "./Header.module.css";
import Nav from "../Nav";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="#" alt="logo" srcset="logo" />
            </div>
            <Nav />
        </div>
    );
};

export default Header;