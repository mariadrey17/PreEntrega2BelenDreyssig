import { useEffect, useState } from "react";
import { getProductFilm } from "../async";

import ItemDetail from "./ItemDetail/ItemDetail";
import stockrecomendados  from "../StockDeRecomendados/stockrecomendados";


const ItemDetailContainer =()=>{
const [stockrecomendados,setStockrecomendados]=useState(null)

useEffect(()=>{
    getProductFilm ('4')
    .then((response)=>{
        setStockrecomendados(response)
    })

.catch(error=>{
    console.log (error)
})
}

)

return (
<div className="ItemDetailContainer">
<ItemDetail {...stockrecomendados}/>
</div>
);
}
export default ItemDetailContainer;