import React from "react";
import {useState, useEffect} from "react";
import ProductsList from "./ProductsList";


const ProductsContainer = () => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
            setTimeout(()=>{
                getProducts()
            }, 3000);
            // console.log('Mounting...');
        }, [])

    const getProducts = () => {
        const URL = './productsJson.json'
        fetch (URL)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setProducts(data)
        })
    }

  return (
        <ProductsList products={products}/>
  )
};


export default ProductsContainer;