import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./ImageCrousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImagesArraysFun = () => {
  const imageArraying = [];
  let secStyle = "";
  for (let i = 1020; i <= 1030; i++) {
    imageArraying.push({
      images: `https://picsum.photos/${i}`,
      secStyle: secStyle,
    });
  }
  return imageArraying;
};

const DemoCarousel = (props) => {
  // const [imageArr, setImgArr] = useState([]);
  const imageArr = props.imss;

  return (
    <>
      <Carousel
        autoPlay={true}
        centerMode
        stopOnHover={true}
        transitionTime={800}
        showThumbs={false}
        showIndicators={false}
        centerSlidePercentage={80}
        infiniteLoop={true}
        interval={2000}
        className=" my-2 d-block   d-md-block  align-items-center"
        // style={{ height: "360px" }}
      >
        {imageArr.map((i, ind) => {
          return (
            <div className={"d-flex align-items-center"}>
              <Cards Imagess={i} />
              <Cards Imagess={i} design={"d-none d-md-block"} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
const Cards = (props) => {
  return (
    <>
      <div className={`div__image ${props.design}`}>
        <img
          src={props.Imagess}
          loading={"lazy"}
          className={`img-fluid   images__crousel `}
          alt="Responsive"
        ></img>
      </div>
    </>
  );
};
export default DemoCarousel;
