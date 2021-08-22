import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbars from "./NavbarBottom";

const DemoCarousel = (props) => {
  const imgUrl = props.imss;

  return (
    <>
      <Carousel
        style={{ paddingTop: "50px", paddingBottom: "30px" }}
        // centerSlidePercentage={89}
        stopOnHover={false}
        dynamicHeight={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={800}
        // centerMode={true}
        autoPlay={true}
        // autoFocus={true}
        interval={2000}
        showIndicators={false}
        showArrows
        // thumbWidth={120}
        height={"0%"}
      >
        {imgUrl.map((im) => {
          return (
            <div style={{ height: "790px" }}>
              <img
                src={im}
                loading={"lazy"}
                style={{ minHeight: "500px" }}
                alt={"slider"}
              />
              {/*<p className="legend">Legend 1</p>*/}
            </div>
          );
        })}
      </Carousel>
      <Navbars
        back_color={"transparent"}
        isShow={"none"}
        borders={"border rounded-top"}
        name={"Continue"}
        redirect={"/form"}
      />
    </>
  );
};

export default DemoCarousel;
