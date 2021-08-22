import React, { Component } from "react";
import "./ImageCrouselCenter.css";
import ReactDOM from "react-dom";
// import "./ImageCrousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, renderArrowNext } from "react-responsive-carousel";
const imgArry = [
  "https://cdn.dribbble.com/users/2147772/screenshots/4279007/cover-regenschirm.gif",
  "https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/5orfKJqG0N9UopDnOVn2BW/1a2e92f5474911a4631722a6e70e7c5f/ezgif-5-44fa6284e5f3.gif",
  "https://www.position2.com/sites/default/files/blog/featured-image/gif-cover.gif",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
];
const DemoCarousel = (props) => {
  return (
    <>
      <Carousel
        autoPlay={true}
        transitionTime={800}
        // centerMode
        showIndicators={false}
        showThumbs={props.thumbs}
        // centerSlidePercentage={80}
        infiniteLoop={true}
        interval={6000}
        className=" my-2  d-flex flex-column align-items-center"
        // style={{ width: "100%" }}
      >
        <div className={"d-flex align-items-center"}>
          <Cards
            Imagess={imgArry[3]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
          />
          <Cards
            Imagess={imgArry[2]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
            design={"d-none d-md-block"}
          />
          <Cards
            Imagess={imgArry[4]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
            design={"d-none d-md-block"}
          />
        </div>
        <div className={"d-flex align-items-center "}>
          <Cards
            Imagess={imgArry[1]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
          />
          <Cards
            Imagess={imgArry[2]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
            design={"d-none d-md-block"}
          />
          <Cards
            Imagess={imgArry[0]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
            design={"d-none d-md-block"}
          />
        </div>
        <div className={"d-flex align-items-center"}>
          <Cards
            Imagess={imgArry[1]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
          />
          <Cards
            Imagess={imgArry[2]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
            design={"d-none d-md-block"}
          />
          <Cards
            Imagess={imgArry[0]}
            text1={"33,070 Registered"}
            text2={"17 hours left"}
            design={"d-none d-md-block"}
          />
        </div>
      </Carousel>
    </>
  );
};
const Cards = (props) => {
  return (
    <>
      <div className={`div__image__center ${props.design}`}>
        <img
          src={props.Imagess}
          className={`img-fluid images__crousel__center `}
          alt="Responsive"
        ></img>
        <p
          className="text-white mt-2 mt-md-3"
          style={{ fontSize: "14px", lineHeight: "100%", opacity: "0.9" }}
        >
          <i class="fas fa-user-plus"></i> {props.text1}
          {"    |    "}
          <i class="fas fa-trophy"></i> {props.text2}
        </p>
      </div>
    </>
  );
};
const ViewCrousel = () => {
  return (
    <>
      <div className="crousel__Back d-block align-items-center ">
        <div className="texts__back pt-2">Featured Opportunities</div>
        {/* <button className="btn" onClick={renderArrowNext}>
          'Left'
        </button> */}
        <DemoCarousel thumbs={false} />
      </div>
    </>
  );
};
export default ViewCrousel;
