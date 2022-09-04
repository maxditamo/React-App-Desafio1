import React from "react";
import {useState, useEffect} from "react";
// import productsJson from "../productsJson.json";
// import ProductsList from "./ProductsList";


const ProductsConteiner = () => {
    const [chars, setChars] = useState([]);

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
                getChars()
            }, 3000);
            console.log('Mounting...');
        }, [])

    const getChars = () => {
        const URL = 'https://swapi.dev/api/people/'
        fetch (URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setChars(data.results)
        })
    }

  return (
    <>
    <div>
        <div>Star Warrs API</div>
        { chars.map (char => <li key={char.url}>{char.name}</li> )}
    </div>
    </>
  )
};


export default ProductsConteiner;