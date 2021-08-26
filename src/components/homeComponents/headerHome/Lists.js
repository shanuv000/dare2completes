import { useState } from "react";
import "./Lists.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListAltIcon from "@material-ui/icons/ListAlt";
const Lists = (props) => {
  const [open, setopen] = useState(0);
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: props.widths }}
      >
        <div
          className="goBack d-flex align-items-center"
          onClick={props.toggling}
          style={{
            cursor: "pointer",
            width: props.widths,
            // width: "100%",
            marginBottom: "20px",
          }}
        >
          <ArrowBackIcon />
          <span class="ml-2">Go Back</span>
        </div>

        <div className="real__lists px-2" style={{ width: props.widths }}>
          <button className="btn  btn-block btn-danger px-4">Close Menu</button>

          <div className="mob__full__menu">
            <div className=" mob__head__menu" onClick={() => setopen(0)}>
              Open {open === 0 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            {open === 0 && (
              <>
                <div className="mob__list__el mt-2 d-flex align-items-center justify-content-between">
                  <ListAltIcon className="mob__icons" />
                  <div className="mob__texts">
                    <div className="mob__font__head">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                    <div className="mob__font__bottom">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                  </div>
                </div>{" "}
                <div className="mob__list__el mt-2 d-flex align-items-center justify-content-between">
                  <ListAltIcon className="mob__icons" />
                  <div className="mob__texts">
                    <div className="mob__font__head">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                    <div className="mob__font__bottom">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                  </div>
                </div>{" "}
                <div className="mob__list__el mt-2 d-flex align-items-center justify-content-between">
                  <ListAltIcon className="mob__icons" />
                  <div className="mob__texts">
                    <div className="mob__font__head">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                    <div className="mob__font__bottom">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mob__full__menu">
            <div className=" mob__head__menu" onClick={() => setopen(1)}>
              Open2 {open === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            {open === 1 && (
              <>
                <div className="mob__list__el mt-2 d-flex align-items-center justify-content-between">
                  <ListAltIcon className="mob__icons" />
                  <div className="mob__texts">
                    <div className="mob__font__head">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                    <div className="mob__font__bottom">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                  </div>
                </div>{" "}
                <div className="mob__list__el mt-2 d-flex align-items-center justify-content-between">
                  <ListAltIcon className="mob__icons" />
                  <div className="mob__texts">
                    <div className="mob__font__head">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                    <div className="mob__font__bottom">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                  </div>
                </div>{" "}
                <div className="mob__list__el mt-2 d-flex align-items-center justify-content-between">
                  <ListAltIcon className="mob__icons" />
                  <div className="mob__texts">
                    <div className="mob__font__head">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                    <div className="mob__font__bottom">
                      Lorem ipsum dolor sit amet, consectetur adip
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Lists;
