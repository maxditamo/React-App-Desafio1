import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductsList = ({products}) => {
  return (
    <div className="divCard">
        {products.length ? (
        products.map((prod) => <Link to={`/shop/item/${prod.slug}`} key={prod.id}> <Product {...prod}/> </Link>  
         || <Link to={`/shop/category/${prod.category}`} key={prod.id}> <Product {...prod}/> </Link> ) 
        )
        : (
        <h2>Cargando...</h2>
        )}
    </div>
  )
}
export default ProductsList;