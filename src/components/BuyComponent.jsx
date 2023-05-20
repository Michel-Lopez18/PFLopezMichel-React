import React, { Fragment, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const collectionOrder = "ordenes"


const BuyComponent = (props) => {
  const { data } = props;

  const { borrarCarrito, limpiarCarrito } = useContext(GeneralContext);
  const navegar = useNavigate()

  let total = 0;

  data.forEach((producto) => {
    total = total + producto.precio * producto.cantidad;
  });
  const agregarOrden = (e) => {
    const nombre = e.target.elements.nombre.value;
    const apellido = e.target.elements.apellido.value;
    const celular = e.target.elements.celular.value;
    const email = e.target.elements.email.value;
    const confirmarEmail = e.target.elements.confirmarEmail.value;

    if (email === confirmarEmail) {
      const nuevaOrden = {
        nombre, 
        apellido,
        celular,
        email,
        productos: data,
        fecha: new Date().toLocaleString("es-AR")
      }
      const db = getFirestore();
      const orderCollection = collection(db, collectionOrder);
      addDoc(orderCollection, nuevaOrden).then(({ id }) => {alert("Gracias por su compra!")})
      limpiarCarrito()
      navegar("/")
    }

    else {alert("¡Los correos no coinciden!")}
  }

  const comprar = (e) => {
    e.preventDefault()
    agregarOrden(e)
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-5">
            {data.map((producto, index) => {
              return (
                <div key={index} className="card">
                  <div className="card-body">
                    <img className="img-card" src={producto.img} alt="" />
                    <h5 className="card-title container">{producto.nombre}</h5>
                    <p className="card-text">{producto.cantidad}</p>
                    <p className="card-text">
                      Total {producto.precio * producto.cantidad}
                    </p>
                    <button
                      onClick={() => {
                        borrarCarrito(producto);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-7">
          <form action="" onSubmit={comprar}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      id="nombre"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      placeholder="Apellido"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="celular">Teléfono:</label>
                <input
                  type="text"
                  className="form-control"
                  id="celular"
                  placeholder="Teléfono"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico: </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Correo electrónico:"
                  required
                />
                <label htmlFor="confirmarEmail">
                  Repetir correo electrónico:{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="confirmarEmail"
                  aria-describedby="emailHelp"
                  placeholder="Repetir Correo electrónico"
                  required
                />
              </div>
              <div className="total">
                <h2>
                  {data.length > 0
                    ? "Total a pagar: " + total + "$"
                    : ""}
                </h2>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                >
                  Comprar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyComponent;
