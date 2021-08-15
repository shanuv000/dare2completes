import { indexOf } from "lodash";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import chalk from "chalk";
import EngineeringCollege from "./EngineeringCollege";
const Tabss = () => {
  const error = chalk.bold.red;
  const warning = chalk.keyword("orange");
  const ar1 = [
    { name: "All Courses", condition: false, show: 0 },
    { name: "B.Tech", condition: false, show: 1 },
    { name: "M.Tech", condition: false, show: 2 },
    { name: "Integrated/Dual Degree", condition: false, show: 3 },
    { name: "Others", condition: false, show: 4 },
  ];
  //   console.log(ar1.indexOf({ name: "All Courses", condition: false, show: 0 }));

  const [arr, setArr] = useState(ar1);

  const handleSel = (i, name, condition, show) => {
    console.log("name", name);
    condition = !condition;
    let newArr = [...arr];

    // const p=newArr.filter((c)=>{indexOf(c)!===i})
    newArr[i] = { name, condition: condition, show };
    console.log("Condition", condition);
    console.log("Condition", show);
    setArr(newArr);
  };

  const ar__ar = arr.map((c, i) => {
    return (
      <Tab
        style={{ padding: "0.6rem", marginRight: "0.8rem" }}
        key={i}
        onClick={() => handleSel(i, c.name, c.condition, c.show)}
      >
        {c.name}
      </Tab>
    );
  });

  return (
    <>
      <Tabs class="mt-4">
        <TabList class="p-1 text-info">{ar__ar}</TabList>
        <TabPanel>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={true}
            />
            <label class="form-check-label" for="flexCheckDefault">
              All Courses
            </label>
          </div>
        </TabPanel>
        <TabPanel>
          <EngineeringCollege
            head={"B.Tech"}
            text="Pass Out Years"
            // text1={"Programme"}
            text2="Specializations"
          />
        </TabPanel>
        <TabPanel>
          <EngineeringCollege
            text="Pass Out Years"
            head={"M.Tech"}
            // text1={"Programme"}
            text2="Specializations"
          />
        </TabPanel>{" "}
        <TabPanel>
          <EngineeringCollege
            text="Pass Out Years"
            head="Integrated Dual degree"
            // text1={"Programme"}
            text2="Specializations"
          />
        </TabPanel>{" "}
        <TabPanel>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={true}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Others
            </label>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};
export default Tabss;
