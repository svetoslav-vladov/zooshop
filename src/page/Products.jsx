import React, { useEffect, useState } from "react";
import getProducts from "../network/getController";
import Product from "../components/Product";

const Products = () => {
    const [data, setData] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setData(res);
            });

            // return () => {
            //     // when component clears, unmount
            // }
    }, []);

    if (!data){
        return <div>Loading...</div>
    }

    return (
        <div>
            <button onClick={()=>{setModalOpen(true)}}>Open</button>
            {
                data.map((prod) => (
                    <Product key={`prod-${prod.id}`} {...prod} />
                ))
            }
        </div>
    );
};

export default Products;