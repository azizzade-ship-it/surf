import React from 'react';
import "./board.scss"
import Card from "./Card"
import Left from "../../images/left.png"
import Right from "../../images/right.png"

export default function Boards({list}) {
  return( 
  <div className="boards" id="Boards">
    <div className="grid-board">
    <div className="title-boards">
      <span>SHOP</span>
      <h2>Surfboards</h2>
    </div>
    <div className="boards-list">
    <img src={Left} alt="left" style={{ width: "15px", height: "30px" }}/>
    {
      
      list.map(function(item,index) {
        return (
          <Card board={item} key={index}/>
        )
      })
    }
    <img src={Right} alt="right" style={{ width: "15px", height: "30px" }}/>
    </div>
    <div className="show-all">
      <span>Show All</span>
      <div className="underline" />
    </div>
    </div>
  </div>
  )
}
