import { useState } from "react";
import "./homeComponents/section4.css";
const SlidingPanel = ({ Thubarry, head, title }) => {
  const [handlebutton, setHandleButton] = useState(true);

  const newArr1 = [];
  if (handlebutton) {
    for (let i = 0; i < 4; i++) {
      newArr1.push(Thubarry[i]);
    }
  } else {
    for (let i = 4; i < Thubarry.length; i++) {
      newArr1.push(Thubarry[i]);
    }
  }

  return (
    <>
      <div className="d-flex head__row flex-column my-4">
        <div className="d-flex  justify-content-between mb-sm-1 mb-lg-3  align-items-center">
          <div className="mr-2" style={{ weight: "32px", height: "32px" }}>
            <i
              class="fas fa-trophy"
              style={{
                fontSize: "32px",
                color: "#43b3f8",
              }}
            ></i>
          </div>
          <div className=" texts__top">
            <div className="sec4__head ">{head}</div>
            <div className="sec4__title text-justify d-none d-lg-block">
              {title}
            </div>
          </div>
          <div className="d-none d-lg-block ml-3 mr-2">
            <button className="btn button__explore">Explore all</button>
          </div>

          <div className="d-block d-lg-none">
            <button className="btn button__sm_explore">Explore all</button>
          </div>

          <div className=" d-none d-lg-flex">
            <button
              disabled={handlebutton}
              onClick={() => {
                setHandleButton(true);
              }}
              className=" border btn rounded-circle border-dark mr-3 text-center"
            >
              <i
                className=" fas fa-angle-left sec4__Icons "
                style={{ fontSize: "20px" }}
              ></i>
            </button>
            <button
              disabled={!handlebutton}
              onClick={() => {
                setHandleButton(false);
              }}
              className="border btn rounded-circle border-dark  "
            >
              <i
                className="fas fa-angle-right sec4__Icons"
                style={{ fontSize: "20px" }}
              ></i>
            </button>
          </div>
        </div>
        <div className="d-none d-lg-flex">
          {newArr1.map((im) => {
            return (
              <div className="card image__div__section3 mr-2">
                <img
                  src={im}
                  alt="imges"
                  width="auto"
                  className="img-fluid"
                  max-height="100%"
                />
                <div className="mt-2  text-center">
                  <h6>Pyweek | Pygame / Web Developer Contest</h6>
                  <p>National Engineering College, Kovilpatti</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Screen */}
      </div>{" "}
      <div className="small_screen d-flex  d-lg-none">
        {Thubarry.map((im) => {
          return (
            <div className="card card__card mr-2">
              <img
                src={im}
                alt="imagesss"
                // width="auto"
                className="img-fluid"
                max-height="100%"
              />
              <div className="mt-2  text-center">
                <h6>Pyweek | Pygame / Web Developer Contest</h6>
                <p>National Engineering College, Kovilpatti</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SlidingPanel;
