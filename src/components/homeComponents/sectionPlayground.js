import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { v4 as uuidv4 } from "uuid";
import "../homeComponents/section4.css";
import { Thubarry } from "./section4";
export const getItemss = (props) => {
  return Thubarry.map((c) => ({ id: uuidv4(), imgages: c }));
};
function App() {
  const [items, setItems] = React.useState(getItemss);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu>
      <LeftArrow design="btn btn-dark" />
      {items.map(({ id, imgages }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          imgages={imgages}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
      <LeftArrow design="btn btn-dark" />
    </ScrollMenu>
  );
}

export function LeftArrow(props) {
  const { isFirstItemVisible, scrollToItem } =
    React.useContext(VisibilityContext);

  return (
    <button
      className={props.design}
      disabled={isFirstItemVisible}
      onClick={() => scrollToItem()}
    >
      Left
    </button>
  );
}

export function RightArrow(props) {
  const { isLastItemVisible, scrollToItem } =
    React.useContext(VisibilityContext);

  return (
    <button
      className={props.design}
      disabled={isLastItemVisible}
      onClick={() => scrollToItem()}
    >
      Right
    </button>
  );
}

function Card({ onClick, imgages }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <>
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: "16.2em",
        }}
        tabIndex={0}
      >
        {/* <div className="d-flex All__containers__section4"> */}

        <div className="card image__div__section3 mr-2">
          <img
            src={imgages}
            alt=""
            width="auto"
            className="img-fluid"
            max-height="100%"
          />
          <div className=" text-center">
            <h6>Pyweek | Pygame / Web Developer Contest</h6>
            <p>National Engineering College, Kovilpatti</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
