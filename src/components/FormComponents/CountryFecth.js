import axios from "axios";
import React, { useEffect, useState } from "react";
import { countriesList } from "../../utils/functions";

const CountryFecth = (props) => {
  const [countrys, setCountry] = useState([]);

  // setItems(countriesList());
  const countryList = () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then(function (response) {
        setCountry(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    countryList();
  }, []);

  return (
    <>
      <select className="custom-select" id={props.selectId}>
        <option selected>Choose Country</option>
        {countrys.map((e) => {
          return <option value={e.country}>{e.country}</option>;
        })}
      </select>
    </>
  );
};
export default CountryFecth;
