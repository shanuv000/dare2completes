import { useState } from "react";
import { Domainarrs } from "../../utils/ArrayCollection";
const DomainsForm = () => {
  const [DomainArray, setDomainArray] = useState(Domainarrs);

  const updateFieldChanged = (index, text, con) => (e) => {
    con = !con;
    console.log("index: " + con);
    let newArr = [...DomainArray];
    newArr[index] = { text, condition: con };
    setDomainArray(newArr);
  };

  const Domainbuttons = DomainArray.map((btText, index) => {
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
        className={`btn border-${borderColour} ml-1 bg-${BorderColours} px-1 text-${textColours}`}
        onClick={updateFieldChanged(index, btText.text, btText.condition)}
      >
        {iconBt} {btText.text}
      </button>
    );
  });

  return <>{Domainbuttons}</>;
};
export default DomainsForm;
