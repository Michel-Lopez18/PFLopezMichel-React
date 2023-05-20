import React, { Fragment,  useMemo } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import CardComponent from "../components/card/CardComponent";


const nameCollection = "productos"

const ProductsViews = (props) => {
  const { categoria } = useParams();
  console.log(categoria)
  const options = useMemo(() => {
    const _optionwithFilters = {
      nameCollection,
      filters: { where: ["categoria", "==", categoria] },
    };
    const _optionWithOutFilters = { nameCollection };
    return categoria ? _optionwithFilters : _optionWithOutFilters;
  }, [categoria]);

  const [data, loading] = useFirestore(options);
  return (
    <Fragment>
      <div className="cards-container">
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

export default ProductsViews;
