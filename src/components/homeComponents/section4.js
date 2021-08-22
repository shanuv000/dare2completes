import React from "react";
import SlidingPanel, { getItems } from "../SlidingPanel";
import "./section4.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import SectionPlayground, { getItemss, LeftArrow } from "./sectionPlayground";

export const Thubarry = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg",
  "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44407/kiger-exterior-right-front-three-quarter-12.jpeg?q=85",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg",
];

export const Thubarry2 = [];

const Section4 = () => {
  return (
    <>
      {" "}
      <SlidingPanel
        Thubarry={Thubarry}
        head={"Challenges and Competitions"}
        title={
          "Show your skills in open innovation challenges and case study & business plan competitions open for students, professionals & startups."
        }
      />
      {/* <h3>Section...</h3> */}
      {/* <div> */}
      {/* <button className="btn btn-primary mr-4">Left</button> */}
      {/* <LeftArrow design="btn btn-primary mr-4" />
        <button className="btn btn-primary">Right</button>
      </div> */}
      {/* <SectionPlayground /> */}
    </>
    // <div
    //   onClick={() => onClick(visibility)}
    //   style={{
    //     width: "16.2em",
    //   }}
    //   tabIndex={0}
    // >
    //   {/* <div className="d-flex All__containers__section4"> */}
    //   <div className="card image__div__section3 mr-2">
    //     <img
    //       src={imagesss}
    //       alt=""
    //       width="auto"
    //       className="img-fluid"
    //       max-height="100%"
    //     />
    //     <div className="mt-4 card-body  text-center">
    //       <h6>Pyweek | Pygame / Web Developer Contest</h6>
    //       <p>National Engineering College, Kovilpatti</p>
    //     </div>
    //   </div>
    // </div>
  );
};
// };
export default Section4;
