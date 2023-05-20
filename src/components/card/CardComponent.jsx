import React from "react";
import { NavLink } from "react-router-dom";

const CardComponent = (props) => {
  const { data } = props;
  
  const { img, nombre, precio, id } = data;
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-card" src={img}  alt="" />
        <h5 className="card-title container">{nombre}</h5>
        <p className="card-text">{precio}</p>
        <NavLink to={`/product/${id}`}>
          <button className="btn btn-primary container">Detalle</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CardComponent;
