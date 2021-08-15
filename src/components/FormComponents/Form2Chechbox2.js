import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CollegeStudents from "./Form2Components/Form2CollegeStudents/CollegeStudents";
const Form2Chechbox2 = () => {
  const formsAr = [
    {
      _id: uuidv4(),
      name: "Everyone",
      slug: "javascript",
      condition: true,
      show: 0,
    },
    {
      _id: uuidv4(),
      name: "College Students",
      condition: true,
      show: 1,
    },
    {
      _id: uuidv4(),
      name: "Working Professionals",
      condition: true,
      show: 2,
    },
    {
      _id: uuidv4(),
      name: "Fresher",
      condition: true,
      show: 3,
    },
    {
      _id: uuidv4(),
      name: "School Students",
      condition: true,
      show: 4,
    },
    {
      _id: uuidv4(),
      name: "Others",
      condition: false,
      show: 5,
    },
  ];

  const [arr, setArr] = useState(formsAr);
  let l = "";
  const [collegeStudentValidation, setCollegeStudentValidation] =
    useState(false);
  const hanldeBtn = (i, name, condition, show, _id) => {
    // console.log("index: " + condition);
    // console.log("name", name);
    condition = !condition;
    let newArr = [...formsAr];
    newArr[i] = { name, condition: condition, show, _id };

    if (show === 1) {
      setCollegeStudentValidation(!collegeStudentValidation);
    }

    setArr(newArr);
  };
  // onChange={handleToggle(c._id)}
  const showCategories = () => {
    // <div className="d-flex">
    return arr.map((c, i) => (
      <li
        key={i}
        onChange={() => hanldeBtn(i, c.name, c.condition, c.show, c._d)}
        className="list-unstyled ml-md-3"
      >
        <input type="checkbox" />
        <label className="form-check-label ml-2">{c.name}</label>
      </li>
    ));
  };
  return (
    <>
      <div className="d-md-flex mt-3">{showCategories()}</div>
      {collegeStudentValidation ? <CollegeStudents /> : null}
    </>
  );
};
export default Form2Chechbox2;
