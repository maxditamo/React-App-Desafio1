import React from "react";
import {useState, useEffect} from "react";
import ProductsList from "./ProductsList";


const ProductsConteiner = () => {
    const [products, setProducts] = useState([]);

    // const getProducts = (data, time)=> 
    // new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         if (data) {
    //             resolve(data);
    //         }else {
    //             reject("Error");
    //         }
    //     },time);
    // });

        useEffect(() => {
            setTimeout(()=>{
                getProducts()
            }, 3000);
            console.log('Mounting...');
        }, [])

    const getProducts = () => {
        const URL = './productsJson.json'
        fetch (URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data)
        })
    }

  return (
    <>
    <div>
        <div>APA Bars List</div>
       <ProductsList products={products}/>
    </div>
    </>
  )
};


export default ProductsConteiner;