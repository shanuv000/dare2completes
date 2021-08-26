import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Lists from "./Lists";
import NavBarHome from "./MobNav";
export default function SwipeableTemporaryDrawer() {
  const [widths, setWidths] = useState(0);

  const widthMd = widths > 470 ? widths * (60 / 100) : widths;
  //   const useStyles = makeStyles({
  //     list: {
  //       width: widthMd,
  //     },
  //     fullList: {
  //       width: "auto",
  //     },
  //   });

  useEffect(() => {
    setWidths(window.innerWidth);
  }, [widths]);
  console.log("device pixel ratio", window.devicePixelRatio);
  //   const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      {" "}
      <Lists widths={widthMd} toggling={toggleDrawer("left", false)} />
    </>
  );

  return (
    <div className="d-block d-lg-none">
      <NavBarHome toggling={toggleDrawer("left", true)} />
      {/* {["left", "right", "top", "bottom"].map((anchor) => ( */}
      <React.Fragment>
        <SwipeableDrawer
          //   style={{ width: "100%" }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
      {/* // ))} */}
    </div>
  );
}
