import MenuIcon from "@material-ui/icons/Menu";
import "./MobNav.css";
import SearchIcon from "@material-ui/icons/Search";
const Navbars = (props) => {
  return (
    <>
      <div class="d-flex text-light bg-dark align-items-center py-2 justify-content-between">
        <a className="text-light" href="/">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/6081574415bfc_d2c.svg"
            alt=""
            className="mob__header__img"
          />
        </a>

        <button
          onClick={props.toggling}
          className="btn btn-transparent bg-transparent text-light"
        >
          <MenuIcon />
        </button>
        <div className="d-flex align-items-center input__mob__div">
          {" "}
          <label htmlFor="" className="mob__header__search">
            <SearchIcon />
          </label>
          <input type="text" className="mob__navBar__input" />
        </div>
      </div>
    </>
  );
};
export default Navbars;
