import React from "react";
import "./App.scss";
import Header from "./component/Header.js";
import Title from "./component/Title.js";
import Boards from "./component/boards/Boards";
import Surf from "./component/Surf";
import Join from "./component/Join.js";
import Camp from "./component/Camp.js";
import Footer from "./component/Footer";

import BreakPointImg from "./images/breakpoint.png";
import SurfImg from "./images/surf.png";
import sea from "./images/sea.png";
import Coast from "./images/coast.png";
import Clip from "./images/clipmode.png";
import Stories from "./component/Stories.js";
import Chilli from "./images/chilli.png";
import Emery from "./images/emery.png";
import Agency from "./images/agency.png";
import Frindly from "./images/frindly.png";

const board = [
  { title: "Chilli Rare Bird", img: Chilli, type: "Funboards", price: 890 },
  { title: " Emery NEM XF", img: Emery, type: "Surfboards", price: 950 },
  { title: "Agency GROM", img: Agency, type: "Funboards", price: 670 },
];

function App() {
  return (
    <div className="grid-container">
      <div className="space"></div>

      <div className="body">
        <Header Item={["Stories", "Events", "Places", "Boards"]} />

        <Title
          title="Beautiful Escape"
          description="One of the greatest things about the sport of surfing is that you need only three things:your body, a surfboard , and a wave"
          picture={sea}
          text="Surfing is the most blissful experience you can have on this planet a
        taste of heaven."
          writer="John McCarthy"
        />

        <Stories
          picture={Coast}
          clip={Clip}
          story="By better understanding the various aspects of surfing, you will improve foster and have more fun in the water."
        />

        <Boards list={board} />

        <Surf
          imgOne={SurfImg}
          titleOne="Surf Training"
          descriptionOne="By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
          titleTwo="Point Break"
          descriptionTwo="By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
          imgTwo={BreakPointImg}
        />
        <Join
          title="Join the Club"
          description="By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
        />
        <Camp
          title="OUR CAMP"
          description="CA 91932, USA
Imperial Beach
560 Silver Strand Blvd"
          picture={Frindly}
        />
        <Footer Item={["Stories", "Events", "Places", "Boards"]} />
      </div>

      <div className="megazine">
        <p>First Surfing Magazine</p>
      </div>
    </div>
  );
}

export default App;
