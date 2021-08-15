import Buttons from "./buttons";
const EngineeringCollege = (props) => {
  const ar = [
    { name: "All", condition: false },
    { name: 2021, condition: false },
    { name: 2022, condition: false },
    { name: 2023, condition: false },
    { name: 2024, condition: false },
    { name: 2025, condition: false },
    { name: 2026, condition: false },
    { name: 2027, condition: false },
  ];

  const ar1 = [
    { name: "All", condition: false },
    { name: "Full Time", condition: false },
    { name: "Part Time", condition: false },
    { name: "Distance Learning", condition: false },
  ];

  const ar2 = [
    { name: "All", condition: false },
    { name: "Aerospace", condition: false },
    { name: "Automobile", condition: false },
    { name: "Biotechnology", condition: false },
    { name: "Chemical", condition: false },
    { name: "Civil", condition: false },
    { name: "Computer Science", condition: false },
    { name: "Electrical", condition: false },
    { name: "Electronics", condition: false },
    { name: "Information Technology", condition: false },
    { name: "Instrumentation", condition: false },
    { name: "µechanical", condition: false },
    { name: "Petroleum", condition: false },
    { name: "Textile", condition: false },
  ];

  return (
    <>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={true}
        />
        <label class="form-check-label" for="flexCheckDefault">
          <b>{props.head}</b>
        </label>
      </div>

      {/* <Buttons ar={ar1} text={props.text1} /> */}
      <Buttons ar={ar} text={props.text} />
      <Buttons ar={ar2} text={props.text2} />
    </>
  );
};
export default EngineeringCollege;
