import React from "react";
import Product from "./Product";

const ProductsList = ({products}) => {
  return (
    <div>
        {products.length ? (
        products.map((prod) => <Product key={prod.id} {...prod}/> ) 
        ): (
        <h2>Cargando...</h2>
        )};
    </div>
  )
}
export default ProductsList;