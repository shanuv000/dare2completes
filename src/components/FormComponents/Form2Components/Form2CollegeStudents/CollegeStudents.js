import { useState } from "react";
import Tabs from "./tabs";

const CollegeStudents = () => {
  const ar1 = [
    { name: "All Courses", condition: false, show: 0 },
    { name: "B.Tech", condition: false, show: 1 },
    { name: "M.Tech", condition: false, show: 2 },
    { name: "Integrated/Dual Degree", condition: false, show: 3 },
    { name: "Others", condition: false, show: 4 },
  ];
  const [arrs, setarrs] = useState(ar1);
  const handleButton = (index, name, condition, show) => {
    // console.log("index: " + condition);
    console.log("name", name);
    condition = !condition;
    let newArr = [...arrs];
    newArr[index] = { name, condition: condition, show };
    console.log("index: " + condition);
    setarrs(newArr);
  };
  //   const showarrays = arrs.map((c, i) => {
  //     return (
  //       <button
  //         key={i}
  //         className={`btn btn-${
  //           arrs.condition ? "outline-primary" : "primary"
  //         } mt-1  mr-sm-2 mr-md-3`}
  //         onClick={() => handleButton(i, c.name, c.condition, c.show)}
  //       >
  //         {c.name}
  //       </button>
  //     );
  //   });

  return (
    <>
      <div className="d-flex mt-3">
        {/* {showarrays} */}
        <Tabs />
      </div>
    </>
  );
};
export default CollegeStudents;
