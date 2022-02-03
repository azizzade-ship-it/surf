import React from "react";
import logo from "../images/logo.png";
export default function Header({ Item }) {
  return (
    <div className="header">
      <div>
        <img src={logo} style={{ width: "15px", height: "30px" }} />
      </div>

      <ul >
        {Item.map((item, index) => (
          <li key={index} className="mr-10 font-bold">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

