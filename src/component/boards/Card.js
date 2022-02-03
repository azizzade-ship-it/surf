import React from "react";

export default function Card({ board }) {
  const { img, title, type, price } = board;
  return (
    <div className="base">
      <img src={img} alt={type} className="board-image" />
      <div className="board-details">
        <span className="board-type">{type}</span>
        <h4 className="board-title">{title}</h4>
        <span className="board-price">{`$${price}`}</span>
        <p>BUY</p>
      </div>
    </div>
  );
}
