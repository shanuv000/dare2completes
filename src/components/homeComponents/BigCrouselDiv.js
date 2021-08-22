import React, { Component, useEffect, useState } from "react";
import "./BigCrouselDiv.css";
import LoaderSpinner from "./LoaderSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImagesArraysFun = () => {
  const imageArraying = [];
  for (let i = 1050; i <= 1060; i++) {
    imageArraying.push(`https://picsum.photos/${i}`);
  }
  return imageArraying;
};

const BigCrousel = (props) => {
  return (
    <Carousel
      className=""
      style={{ borderRadius: "8px" }}
      autoPlay={true}
      // centerMode
      showIndicators={false}
      transitionTime={800}
      showThumbs={false}
      // centerSlidePercentage={80}
      infiniteLoop={true}
      interval={3000}
      //   centerMode
      //   centerSlidePercentage={80}
    >
      {props.imageArray.map((ims) => {
        return (
          <div className=" big__crousel__img__div">
            <img
              src={ims}
              //   width="100%"
              className="img-fluid"
              loading={"lazy"}
              //   height="100px"
              //   style={{ height: "484px", width: "100%" }}
              alt={"sa"}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

const Scrolls = (props) => {
  return (
    <>
      <div
        className="col-12 col-lg-4 my-4 my-lg-0 scroll__divs__crousel"
        // style={{
        //   overflowX: "scroll",
        //   // whiteSpace: "nowrap",
        //   // height: "calc(100vh - 127px)",
        //   height: "484px",
        // }}
      >
        <ul style={{ width: "100%" }}>
          {props.imageArray.map((ims) => {
            return (
              <li class=" scroll__list d-flex ">
                <div>
                  {" "}
                  <img
                    src={ims}
                    className=" mr-4 "
                    style={{
                      height: "74px",
                      width: "130px",
                      borderRadius: "15px",
                    }}
                    alt="im1"
                  />
                </div>
                <div className="text-wrap text-truncate">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const Shows = (props) => {
  const imageArray = props.imss;

  return (
    <>
      <div className="main__body__bigCrousel d-none  d-block">
        <div className="d-flex">
          <div
          //   style={{ height: "25px", width: "25px" }}
          >
            <i
              style={{
                fontSize: "32px",
                color: "#43b3f8",
                // height: "35px",
                //   lineHeight: "20px",
                fontWeight: "500",
              }}
              class="far fa-list-alt"
            ></i>
          </div>
          <div className="ml-3">
            <div
              style={{
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: "400",
              }}
            >
              Latest Stories & Videos
            </div>
            <div
              className="d-none d-lg-block"
              style={{
                fontSize: "14px",
                lineHeight: "15px",
                fontWeight: "400",
                color: "#6f6f6f",
              }}
            >
              Freshly brewed and curated list of stories, articles, and videos
              from the D2C editorial team.
            </div>
          </div>
        </div>
        <div className="my-4 d-flex flex-column">
          <div className="row">
            <div className="col-12 col-lg-8">
              <BigCrousel imageArray={imageArray} />
            </div>
            <Scrolls imageArray={imageArray} />
            {/* ///// */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Shows;
