
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import product from "./items";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { slug , category } = useParams()

    useEffect(() => {
        getItem().then( data => {
            // console.log(product);
            if(data) {
            setItem(data)
            }
        });
    }, );


const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find ( p => p.slug === slug || p.category === category)  )
        }, 2000);

    })
}

return (
    <ItemDetail item={item}/>
)
}

export default ItemDetailContainer;
