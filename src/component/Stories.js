import React from "react";

export default function Stories({ clip, picture, story }) {
  return (
    <div className="stories" id="Stories">
      <div className="stories-item-left">
        <img src={picture} alt="coast" />
        <article>
          <p>{story}</p>
          <span>
            Read More
            <br />
            <div className="underline" />
          </span>
        </article>
      </div>
      <div className="stories-item-right">
        <img src={clip} alt="clip" />
      </div>
    </div>
  );
}
