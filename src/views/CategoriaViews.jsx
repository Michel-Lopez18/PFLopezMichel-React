import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/card/CardComponent";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products/category/";

export const CategoriaViews = () => {
  const { categoria } = useParams();
  const [data, loading] = useFetch(`${BASE_URL}${categoria}`);
  
  return (
    <Fragment>
      <div>
        {loading ? (
          <h1>Cargando</h1>
        ) : (
          data.map((producto, index) => {
            return (
              <div key={index}>
                <CardComponent data={producto} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default CategoriaViews;
