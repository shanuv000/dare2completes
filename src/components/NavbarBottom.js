import React from "react";
import { useHistory, useLocation } from "react-router-dom"; // Import useHistory and useLocation directly
import { Navbar } from "react-bootstrap";
import "../style.css";

const Navbars = (props) => {
  const history = useHistory(); // Use useHistory directly
  const location = useLocation(); // Use useLocation directly

  const handleHistory = () => {
    if (location.pathname === "/form") {
      props.fun();
    }

    history.push(props.redirect);
  };

  return (
    <>
      <Navbar
        className={`mt-md-3 navbar navbar-${props.back_color} bg-${props.back_color} fixed-bottom`}
        style={{ zIndex: "2000" }}
      >
        <div className="container-fluid d-flex">
          <div className={` d-${props.isShow}`}>
            <button className={"btn btn-sm  btn__help text-light"}>
              <i className="far fa-lightbulb" /> Help
            </button>
            <button className={"btn btn-sm ml-2  btn__complete  text-light"}>
              Complete Later
            </button>
          </div>
          <div className={"ml-auto"}>
            <button
              className={`btn btn-sm btn-primary btn-block  ${props.borders}`}
              onClick={handleHistory}
            >
              {props.name}
            </button>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Navbars;
