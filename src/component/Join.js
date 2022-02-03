import React from "react";
import Arrow from "../images/arrow.png";
export default function Join({ title, description }) {
  return (
    <div className="join">
      <div className="join-detail">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="join-send">
        <input
          type="text"
          placeholder="YOUR E-MAIL"
          className="join-send-input"
        />
        <div className="arrow-button">
            <img src={Arrow} alt="arrow"/>
        </div>
      </div>
    </div>
  );
}
