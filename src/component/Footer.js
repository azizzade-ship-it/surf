import React from "react";
import logo from "../images/logo.png";
import twitter from "../images/twiter.png";
import tumblr from "../images/tumblr.png";
import vimeo from "../images/vimeo.png";
export default function Footer({ Item }) {
  return (
    <div class="footer">
      <img src={logo} alt="logo" style={{ width: "15px", height: "30px" }} />
      <ul>
        {Item.map((item, index) => (
          <li key={index} className="mr-10 font-bold">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="social">
        <img src={tumblr} alt="tumblr" />
        <img src={twitter} alt="twitter" />
        <img src={vimeo} alt="vimeo" />
      </div>
    </div>
  );
}
