import React from "react";
import Loader from "react-loader-spinner";
import "./Loader.css";
const Loading = () => {
  //other logic
  const styles = {
    background: "#b92b27" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #1565C0, #b92b27)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #1565C0, #b92b27)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  };
  return (
    <>
      <div className="loads">
        <Loader
          className="pt-4 d-flex justify-content-center align-items-center"
          style={{ styles }}
          type="Grid"
          color="#ffffff"
          height={"100%"}
          width={400}
          // timeout={4000}
          // timeout={7000} //3 secs
        />
        <h1 className="text-center text-light mt-4">Loading Images</h1>
      </div>{" "}
    </>
  );
};
export default Loading;
