import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
const NavbarsMenu = ({ manualHandleShowDrawer, showDrawer, toggling }) => {
  return (
    <>
      <nav className="navbar  bg-light text-dark" style={{ minHeight: "64px" }}>
        <div className="d-flex justify-content-start" style={{ width: "20%" }}>
          {!showDrawer && (
            <div
              variant="h6"
              className={`mr-4 d-none d-lg-block`}
              noWrap
              style={{ cursor: "pointer " }}
            >
              <MenuIcon
                className="text-dark"
                onClick={manualHandleShowDrawer}
              />
            </div>
          )}
          <div
            variant="h6"
            className={`mr-4 d-block d-lg-none`}
            noWrap
            style={{ cursor: "pointer " }}
          >
            <MenuIcon className="text-dark" onClick={toggling} />
          </div>

          <div className={"img__div__Drawer "}>
            <img
              src="https://d8it4huxumps7.cloudfront.net/images/d2c-logo/d2clogo.svg"
              className="img-fluid d-none d-lg-block image__logo__drawerhome"
              alt=""
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6081574415bfc_d2c.svg"
              className="img-fluid d-block d-lg-none image__logo__drawerhome"
              alt=""
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ width: "40%" }}
        >
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
          <div className="mr-4 d-none d-lg-flex align-items-center">
            <AppsIcon className={"mr-1 grid__icon"} />
            {/* <i class="fas fa-th-large "></i> */}
            <div className="" style={{ fontSize: "14px", fontWeight: "400" }}>
              Our Products
            </div>
          </div>
          <button className="btn btn-primary btn-sm mr-4 d-none d-lg-block">
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
      </nav>
    </>
  );
};
export default NavbarsMenu;
