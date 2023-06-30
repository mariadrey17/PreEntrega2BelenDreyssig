import { useParams } from "react-router-dom";


import ItemCount from "../../ItemCount";
import { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";

const ItemDetail = ({image,nombre,precio,id, genero,categoryId}) => {
 /* const { filmId } = useParams();
  const film = stockrecomendados.find((film) => film.id === filmId);

const [item,setItem]=useState(undefined);*/

    
  return (
    <div className="SectionFilm">
      <p> Este es el detalle del film </p>

      <ul>
        <li>{id}</li>
        <li>{nombre}</li>
        <li>{genero}</li>
        <li>{precio}</li>
        <li>{image}</li>
        <li>{categoryId}</li>
      <button variant="primary"
              onClick={() => Navigate(`/cart`)}> add to cart</button>
      </ul>
        
         
          
        
      <div>
        <ItemCount initial ={0} films={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>


        </div>
        
    
      {/*<div className="CardBody">
        <ul>
          {id}
          {nombre} {genero}
          {precio} {categoryId}
  </ul>
        <div className="CardDiv">
          <h2 className="CardTitle"> {nombre}</h2>
        </div>

        <div>
          <p>{genero}</p>
        </div>

        <div>
          <p>{price}</p>
  </div>
      </div>*/}


      {/*<div className="contieneDetalle">
        <image src={image} alt=""/>
        <h1>{nombre}</h1>
        <p>{precio}</p>
        <p>{id}</p>
    </div>*/}


    </div>
  );
};
export default ItemDetail;


