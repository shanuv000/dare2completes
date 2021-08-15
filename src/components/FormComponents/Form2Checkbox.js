import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [formData, setFormData] = useState("");
  const [checked, setChecked] = useState([]); // categories
  const [categories, setCategories] = useState([
    { _id: uuidv4(), name: "Everyone", slug: "javascript" },
    {
      _id: uuidv4(),
      name: "College Students",
      slug: "vuejs",
    },
    {
      _id: uuidv4(),
      name: "Working Professionals",
      slug: "firebase",
    },
    {
      _id: uuidv4(),
      name: "Fresher",
      slug: "firebase",
    },
    {
      _id: uuidv4(),
      name: "School Students",
      slug: "firebase",
    },
    {
      _id: uuidv4(),
      name: "Others",
      slug: "firebase",
    },
  ]);

  useEffect(() => {
    setFormData(new FormData());
  }, []);

  const handleToggle = (c) => () => {
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };

  const showCategories = () => {
    // <div className="d-flex">
    return categories.map((c, i) => (
      <li key={c._id} className="list-unstyled ml-md-3">
        <input onChange={handleToggle(c._id)} type="checkbox" className="" />
        <label className="form-check-label ml-2">{c.name}</label>
      </li>
    ));
  };

  return (
    <>
      <div>
        <div className="d-md-flex mb-4">{showCategories()}</div>
        {JSON.stringify(...formData)}
      </div>
    </>
  );
};

export default App;
