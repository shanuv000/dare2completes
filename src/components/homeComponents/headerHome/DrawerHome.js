// import Radium, { StyleRoot } from "radium";

import React, { useState } from "react";

import clsx from "clsx";
import "./DrawerHome.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "flex-start",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));

export default function MiniDrawer(props) {
  const [showDrawer, setShowDrawer] = useState(true);

  const classes = useStyles();
  // console.log("Drawer width", classes.drawerOpen);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const manualHandleCloseDrawer = () => {
    setShowDrawer(false);
    handleDrawerClose();
  };
  const manualHandleShowDrawer = () => {
    // handleDrawerOpen();
    setShowDrawer(true);
  };
  return (
    <div
      className={`${classes.root} d-none d-lg-block`}
      style={{ paddingBottom: "67px" }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`${clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}`}
      >
        <Toolbar className=" Navbaar__style d-flex justify-content-between">
          <NavbarsMenu
            manualHandleShowDrawer={manualHandleShowDrawer}
            showDrawer={showDrawer}
          />
          {/* <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      {showDrawer && (
        <Drawer
          onMouseOver={handleDrawerOpen}
          onMouseOut={handleDrawerClose}
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={`${classes.toolbar} d-flex  align-items-center `}>
            <div
              className="btn btn-transparent mr-2"
              onClick={manualHandleCloseDrawer}
            >
              <i class="fas fa-times " style={{ fontSize: "24px" }}></i>
            </div>
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6081574415bfc_d2c.svg"
              className="img-fluid"
              style={{ width: "32px", height: "32px" }}
              alt=""
            />
            {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
          </div>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </div>
  );
}

const NavbarsMenu = ({ manualHandleShowDrawer, showDrawer }) => {
  return (
    <>
      {" "}
      <div className="d-flex justify-content-start" style={{ width: "20%" }}>
        {!showDrawer && (
          <div
            variant="h6"
            className={`mr-4`}
            noWrap
            style={{ cursor: "pointer" }}
          >
            <MenuIcon className="text-dark" onClick={manualHandleShowDrawer} />
          </div>
        )}

        <div className={"img__div__Drawer "}>
          <img
            src="https://d8it4huxumps7.cloudfront.net/images/d2c-logo/d2clogo.svg"
            className="img-fluid image__logo__drawerhome"
            alt=""
          />
        </div>
      </div>
      <div className="d-flex justify-content-center " style={{ width: "40%" }}>
        <input
          type="text"
          placeholder="Search"
          className="search__homeDrawer"
        />
      </div>
      <div
        className="d-flex justify-content-end text-dark align-items-center"
        style={{ width: "40%" }}
      >
        <div className="mr-4 d-flex align-items-center">
          <AppsIcon className={"mr-1 grid__icon"} />
          {/* <i class="fas fa-th-large "></i> */}
          <div className="" style={{ fontSize: "14px", fontWeight: "400" }}>
            Our Products
          </div>
        </div>
        <button className="btn btn-primary btn-sm mr-4">
          Host <span className="text-danger ml-2"> Events</span>
        </button>
        <div className="mr-4">
          <NotificationsActiveIcon className="home__avatar" />
        </div>
        <div className="mr-4">
          <AccountCircleIcon class=" home__avatar" />

          {/* <i class="fas fa-user-tie home__avatar"></i> */}
        </div>
      </div>
    </>
  );
};
