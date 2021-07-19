import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css"

const Categories = ({ title }) => {

    return (
        <li><Link to={`/products/${title}`}>{title}</Link></li>
    );
};

export default Categories;