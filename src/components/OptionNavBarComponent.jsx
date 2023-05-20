import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavBarComponent = (props) => {
  const { titleOption } = props;

  return (
    <NavLink to={`/categorias/${titleOption}`}>
      <span className="nav-link">{titleOption}</span>
    </NavLink>
  );
};

export default OptionNavBarComponent;
