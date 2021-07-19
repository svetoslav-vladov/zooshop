import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="copyright"> &copy; Copyright 2021 <br/> All Rights Reserved. </div>
        </div>
    );
};

export default Footer;