import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Route } from "react-router-dom";
import Form from "../pages/Form";
import Navbars from "./NavbarBottom";
import { Link } from "react-router-dom";
import Classs from "./Drawer2.module.css";
import Form2 from "../pages/Form2";
import { useLocation } from "react-router-dom";
import { FormContext } from "./FormContext";
import Form3 from "../pages/Form3";
import Form4 from "../pages/Form4";
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
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer__List: {
    background: "#f8f8ff",
  },
}));

export default function MiniDrawer(props) {
  const { headerValue } = useContext(FormContext);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname);
  let headerText = "";
  if (location.pathname === "/form") {
    headerText = "Basic Details";
  } else if (location.pathname === "/form2") {
    headerText = `Opportunity - Registration & Eligibility | ${headerValue}`;
  } else if (location.pathname === "/form3") {
    headerText = `Opportunity - Registration Form Steps | ${headerValue}`;
  } else if (location.pathname === "/form4") {
    headerText = `Opportunity - Payments |  ${headerValue}`;
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: "white" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={`d-lg-none ${clsx(classes.menuButton, {
              [classes.hide]: open,
            })}`}
          >
            <MenuIcon />
          </IconButton>

          <div
            className="d-flex   justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            <div
              onClick={history.goBack}
              className="	 d-sm-block d-md-block d-lg-none"
            >
              <h3 onClick={history.goBack}>
                <i class="fas fa-chevron-left text-info"></i>
              </h3>
            </div>{" "}
            <div className="	 d-sm-block d-md-block d-lg-none">
              <a
                href="/"
                style={{ fontSize: "18px", textDecoration: "none" }}
                // className="nav-link "
              >
                <h3>
                  <i class="fas fa-home text-info"></i>
                </h3>
              </a>
            </div>
            {/* <div class="d-sm-flex  d-lg-none">
              <input type="search" id="form1" className="form-control-sm" />
              <button type="button" class="btn ">
                <i class="fas fa-search text-dark"></i>
              </button>
            </div> */}
            <div className="d-none d-lg-flex">
              {/* <Link to="/">
                <h4>Home</h4>
              </Link> */}
              <a
                href="/"
                style={{ fontSize: "18px", textDecoration: "none" }}
                // className="nav-link "
              >
                Home
              </a>
            </div>
            <div>
              <h4
                className="text-dark d-none d-lg-flex text-capitalize"
                style={{ fontSize: "16px" }}
              >
                {headerText}
              </h4>
            </div>
            <div className="d-flex">
              <h3 className="d-none d-lg-block">
                <i class="far fa-bell text-primary " />
              </h3>
              <h3 className="d-block">
                <i class="fas fa-user-circle ml-2 text-dark" />
              </h3>
            </div>
          </div>
        </Toolbar>
      </AppBar>
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
        <div className={` ${classes.toolbar}`}>
          <IconButton className={"d-lg-none"} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            {
              name: "Opportunity Visibility",
              icons: <i class="far fa-eye"></i>,
            },
            { name: "Basic Details", icons: <i class="fab fa-wpforms"></i> },
            {
              name: "Registration & Eligibility",
              icons: <i class="fas fa-sitemap"></i>,
            },
            {
              name: "Registration Form",
              icons: <i class="fas fa-check"></i>,
            },
            {
              name: "Payments",
              icons: <i class="fas fa-money-check"></i>,
            },
            {
              name: "Rounds",
              icons: <i class="fas fa-route"></i>,
            },
            {
              name: "About Opportunity",
              icons: <i class="fas fa-info"></i>,
            },
            {
              name: "Rewards & Recognition",
              icons: <i class="fas fa-ribbon"></i>,
            },
            {
              name: "Additional Details",
              icons: <i class="fas fa-folder-plus"></i>,
            },
            {
              name: "Custom Branding",
              icons: <i class="fas fa-ring"></i>,
            },
            {
              name: "Gallery",
              icons: <i class="fas fa-image"></i>,
            },
          ].map((text, index) => {
            return (
              <ListItem
                // button
                key={text.name}
                className={Classs.listItem}
              >
                <ListItemIcon className={Classs.lists}>
                  {text.icons}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
              // <Divider />
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {props.children}
      </main>
    </div>
  );
}
