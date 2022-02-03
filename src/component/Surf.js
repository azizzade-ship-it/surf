import React from "react";

export default function Surf({
  titleOne,
  imgOne,
  titleTwo,
  imgTwo,
  descriptionOne,
  descriptionTwo,
}) {
  return (
    <div className="surf">
      <div className="surf-part-one">
        <div>
          <h3>{titleOne}</h3>
          <p>{descriptionOne}</p>
          <span>
            Read More
            <br />
            <div className="underline" />
          </span>
        </div>
        <img src={imgOne} alt={titleOne} />
      </div>
      <div className="surf-part-tow">
          <img src={imgTwo} alt={titleTwo} />
          <div>
          <h3>{titleOne}</h3>
          <p>{descriptionOne}</p>
          <span>
            Read More
            <br />
            <div className="underline" />
          </span>
        </div>
      </div>
    </div>
  );
}
