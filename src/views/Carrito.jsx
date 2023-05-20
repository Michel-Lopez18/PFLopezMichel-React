import React, { Fragment,  useContext,  useMemo } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import CardComponent from "../components/card/CardComponent";
import BuyComponent from "../components/BuyComponent";
import { GeneralContext } from "../context/GeneralContext";




const Carrito = (props) => {
    const {carrito} = useContext(GeneralContext)
 


  return (
      <div className="cards-container">
     <div>
              <BuyComponent showDelete data={carrito}/>
            </div>
      </div>
  
  );
};

export default Carrito;
