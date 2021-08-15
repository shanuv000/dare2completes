export const buttonss = () => {
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

  const updatebtn = (props) => {};

  const btns = ar.map((val, i) => {
    return (
      <>
        <p>{props.text}</p>
        <button key={i} onClick={updatebtn} className="btn btn-outline-info">
          {val.name}
        </button>
      </>
    );
  });
  return <>{btns}</>;
};
