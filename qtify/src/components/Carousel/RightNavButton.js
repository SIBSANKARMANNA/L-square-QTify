// RightNavButton.jsx
import React from "react";
import { ReactComponent as RightIcon } from "../../assets/right_nav.svg";

const RightNavButton = ({ onClick }) => {
  return (
    <button className="nav-btn right-btn" onClick={onClick}>
      <RightIcon />
    </button>
  );
};

export default RightNavButton;