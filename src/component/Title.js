import React from "react";

export default function Title({ title, description, picture, text, writer }) {
  return (
    <div className="title" id="title">
      <div className="title-text">
        <span>Your</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={picture} alt="surfing" />
      <div className="experienc">
        <p>{text}</p>
        <span>{writer}</span>
      </div>
    </div>
  );
}
