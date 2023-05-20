import React from "react";
import OptionNavBarComponent from "./OptionNavBarComponent";

const ListOptionNavBarComponent = (props) => {
  const { nameOption } = props;

  return (
    <div className="navbar-nav">
      {nameOption.map((nameItem, index) => {
        return <OptionNavBarComponent key={index} titleOption={nameItem} />;
      })}
    </div>
  );
};

export default ListOptionNavBarComponent;
