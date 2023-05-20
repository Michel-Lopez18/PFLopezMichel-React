import React, { memo, useContext, useMemo } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import { GeneralContext } from "../context/GeneralContext";
const nameCollection = "categorias"

const NavBarComponent = (props) => {
 const [data] = useFirestore({nameCollection})
 const {cantidad} = useContext(GeneralContext)
 const dataProcesada = useMemo(() => {
  const categoriaObjeto = data.length !== 0 ? data[0]: []
  return "categoria" in categoriaObjeto ? categoriaObjeto.categoria : []
 })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <span className="navbar-brand ">
          <NavLink to="/">
            <img
              width={100}
              height={100}
              src="https://i.pinimg.com/originals/99/b0/e5/99b0e593f9237abf16df5cb1b1a87735.png"
              alt=""
            />
          </NavLink>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ListOptionNavBarComponent
            nameOption={dataProcesada}
          ></ListOptionNavBarComponent>

          <CartWidget cantidad={cantidad}/>
        </div>
      </div>
    </nav>
  );
};
export default memo(NavBarComponent);
