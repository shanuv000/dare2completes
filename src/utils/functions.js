import axios from "axios";
export const countriesList = () => {
  axios
    .get("https://countriesnow.space/api/v0.1/countries")
    .then((response) => {
      //  setCountry(response.data.data);

      return response.data.data;
    })
    .catch((error) => {
      return console.log(error);
    });
};
