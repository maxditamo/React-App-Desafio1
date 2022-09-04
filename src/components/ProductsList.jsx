import React from "react";
import Product from "./Product";

const ProductsList = ({products}) => {
  return (
    <div>
        {products.lenght ? (
        products.map((product) => <Product key={product.id} {...product}/> ) 
        ): (
        <h2>Cargando...</h2>
        )}
    </div>
  )
}
export default ProductsList;