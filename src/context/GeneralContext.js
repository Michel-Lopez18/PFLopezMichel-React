import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext({
  carrito: [],
});

export const GeneralProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [update, setUpdate] = useState(false);

  const estaEnCarrito = (id) => {
    return carrito.some((producto) => producto.id === id);
  };

  const cantidadCarrito = () => {
    const nuevaCantidad = carrito.reduce((a, b) => a + b.cantidad, 0);
    setCantidad(nuevaCantidad);
  };

  const agregarAlCarrito = (producto, cantidad) => {
    console.log(producto, cantidad);
    if (!estaEnCarrito(producto.id)) {
      setCarrito((item) => [...item, { ...producto, cantidad }]);
    } else {
      carrito.forEach((_producto) => {
        if (producto.id === _producto.id) {
          _producto.cantidad = _producto.cantidad + cantidad;
        }
      });
    }
    update ? setUpdate(false) : setUpdate(true);
  };

  const borrarCarrito = (producto) => {
    const nuevoCarrito = carrito.filter(
      (_producto) => _producto.id !== producto.id
    );

    setCarrito(nuevoCarrito);
    update ? setUpdate(false) : setUpdate(true);
  };

  useEffect(() => {
    cantidadCarrito();
  }, [update]);

  const limpiarCarrito = () => {
    setCarrito([])
    update ? setUpdate(false) : setUpdate(true);
  }

  return (
    <GeneralContext.Provider
      value={{ carrito, agregarAlCarrito, borrarCarrito, cantidad, limpiarCarrito }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
