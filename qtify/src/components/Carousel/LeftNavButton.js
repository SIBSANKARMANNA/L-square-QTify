// LeftNavButton.jsx
import React from "react";
import { ReactComponent as LeftIcon } from "../../assets/left_nav.svg";

const LeftNavButton = ({ onClick }) => {
  return (
    <button className="nav-btn left-btn" onClick={onClick}>
      <LeftIcon />
    </button>
  );
};

export default LeftNavButton;