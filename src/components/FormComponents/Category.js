import { useState } from "react";
import { CategoryItems } from "../../utils/ArrayCollection";
const Category = () => {
  const [CategoryArray, setCategoryArray] = useState(CategoryItems);
  const [count, setCount] = useState(1);
  const [msg, setMsg] = useState(null);

  const updateFieldChanged = (index, text, con) => (e) => {
    const m = (
      <p className={"text-danger p-2"}>You Can Select Only 5 Category</p>
    );

    if (con === true) {
      setCount(count - 1);
      con = !con;
      setMsg(null);
    } else {
      if (count > 5) {
        return setMsg(m);
      }
      setCount(count + 1);
      con = !con;
    }
    // console.log("index: " + con);
    let newArr = [...CategoryArray];
    newArr[index] = { text, condition: con };

    setCategoryArray(newArr);
  };

  const Domainbuttons = CategoryArray.map((btText, index) => {
    const BorderColours = btText.condition ? "success" : null;
    const textColours = btText.condition ? "light" : "dark";
    const borderColour = btText.condition ? null : "dark";
    const iconBt = btText.condition ? (
      <i className="fas fa-check" />
    ) : (
      <i className="far fa-dot-circle" />
    );

    return (
      <button
        key={index}
        id={index}
        className={`ml-2 mt-2 btn border-${borderColour} bg-${BorderColours} px-1 text-${textColours}`}
        onClick={updateFieldChanged(index, btText.text, btText.condition)}
      >
        {iconBt} {btText.text}
      </button>
    );
  });

  // console.log(CategoryArray);
  // console.log(count);
  return (
    <>
      {Domainbuttons}
      {msg}
    </>
  );
};
export default Category;
