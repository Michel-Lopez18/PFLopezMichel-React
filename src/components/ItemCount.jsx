import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const increment = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const decrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="counter">
      <div className="Controls d-flex justify-content-flex-start p-3">
        <button className="btn btn-outline-success btn-sm" onClick={decrement}>
          -
        </button>
        <h5 className="Number p-2">{qty}</h5>
        <button className="btn btn-outline-success btn-sm" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => onAdd(qty)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;