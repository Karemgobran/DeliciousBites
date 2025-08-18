import React from "react";
import "./Title.scss";
function Title({ title, description }) {
  return (
    <div className="page-title">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Title;
