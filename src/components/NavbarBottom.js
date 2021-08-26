import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../style.css";
import React from "react";
import { useHistory } from "react-router-dom";

const Navbars = (props) => {
  const history = useHistory();
  const location = useLocation();

  const handleHistory = () => {
    if (location.pathname === "/form") {
      props.fun();
    }

    history.push(props.redirect);
  };

  return (
    <>
      <nav
        className={`mt-md-3 navbar navbar-${props.back_color} bg-${props.back_color} fixed-bottom  `}
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
      </nav>
    </>
  );
};
export default Navbars;
