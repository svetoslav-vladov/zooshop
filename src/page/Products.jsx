import React, { useEffect, useState } from "react";
import getProducts from "../network/getController";
import Categories from "../components/Categories/Categories";
import CategoriesStyles from "../components/Categories/Categories.module.css"

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
            <ul className={CategoriesStyles.category}>
            {
                
                data.map((prod) => (
                    
                    <Categories key={`prod-${prod.id}`} {...prod} />

                ))
            }
            </ul>
        </div>
    );
};

export default Products;