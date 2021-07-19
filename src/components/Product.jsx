import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title }) => {

    return (
        <div>
             <Link to={`/products/${title}`}>{title}</Link>
        </div>
    );
};

export default Product;