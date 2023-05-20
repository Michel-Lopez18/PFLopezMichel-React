import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import { GeneralContext } from "../context/GeneralContext";
import ItemCount from "../components/ItemCount";
const nameCollection = "productos"

export const DetalleViews = () => {
  const { id: documentId } = useParams();
  const {agregarAlCarrito} = useContext(GeneralContext)
  const [data] = useFirestore({nameCollection, documentId})
  const { nombre, img, precio } = data;

  const agregar = (cantidad) => {
    agregarAlCarrito(data, cantidad)
  }

  return (
    <div className="card">
      <div className="card-body">
        <img className="img-card" src={img} alt="" />
        <h5 className="card-title container">{nombre}</h5>
        <p className="card-text">{precio}</p>
      </div>
      <ItemCount initial={1} stock={10} onAdd={agregar}></ItemCount>
    </div>
  );
};

export default DetalleViews;
