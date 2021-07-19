import React from "react";

const ProductCategory = (props) => {
    const { category, brand } = props.match.params;
    const order = new URLSearchParams(props.location.search).get("order");
    console.log(props.location.search)
    return (
        <div>
           Category: {category} <br/>
           Brand: {brand} <br/>
           Order: {order}
        </div>
    );
};

export default ProductCategory;