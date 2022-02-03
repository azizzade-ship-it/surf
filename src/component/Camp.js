import React from "react";

export default function Camp({ picture, title, description }) {
  return (
    <div className="camp">
      <img src={picture} alt={title} className="camp-picture" />
      <div className="camp-detail">
        <p>{title}</p>
        <h3>{description}</h3>
        <span>
          GET IN TOUCH
          <br />
          <div className="underline" />
        </span>
      </div>
    </div>
  );
}
