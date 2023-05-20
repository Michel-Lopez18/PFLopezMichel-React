import { NavLink } from "react-router-dom";

const CartWidget = (props) => {
  const {cantidad} = props
  return (
    <div>
      <NavLink to="/carrito">
         <i className="bi bi-cart4">{cantidad}</i>
      </NavLink>
    </div>
  );
};

export default CartWidget;
