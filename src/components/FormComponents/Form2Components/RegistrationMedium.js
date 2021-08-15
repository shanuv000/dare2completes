import { useState } from "react";
const RegistrationMedium = () => {
  const [isUrl, setIsUrl] = useState("yes");

  return (
    <>
      {" "}
      <div className="col-12">
        <div className=" d-flex align-items-sm-center   form-control p-3 form-group">
          <p>Registration Medium: </p>
          <div class="form-check ml-3">
            <input
              type="radio"
              class="form-check-input"
              id="materialUnchecked0981"
              name="materialExampleRadios3212"
              value="yes"
              onChange={() => {
                setIsUrl("yes");
              }}
              checked={isUrl === "yes"}
            />
            <label class="form-check-label" for="materialUnchecked0981">
              Website Url
            </label>
          </div>
          <div class="form-check ml-3">
            <input
              type="radio"
              class="form-check-input "
              id="materialUnchecked20992"
              name="materialExampleRadios3212"
              value="no"
              onChange={() => {
                setIsUrl("no");
              }}
              checked={isUrl === "no"}
            />
            <label class="form-check-label" for="materialUnchecked20992">
              By Email
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrationMedium;
