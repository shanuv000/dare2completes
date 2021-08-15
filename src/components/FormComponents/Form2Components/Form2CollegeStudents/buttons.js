import { useState } from "react";
const Buttons = (props) => {
  const [arrr, setArr] = useState(props.ar);
  const updatebtn = (props) => {};
  const btns = arrr.map((val, i) => {
    return (
      <>
        <button
          key={i}
          onClick={updatebtn}
          className="btn btn-outline-info mr-3 mb-3"
        >
          {val.name}
        </button>
      </>
    );
  });

  return (
    <>
      <p className="mb-2">{props.text}</p>
      {btns}
    </>
  );
};
export default Buttons;
