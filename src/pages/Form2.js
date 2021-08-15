import { useState } from "react";
import styles from "./Form4.module.css";
import { FormContext } from "../components/FormContext";
import { useLocation } from "react-router-dom";
import Date2 from "../components/Date2";
import CountryFecth from "../components/FormComponents/CountryFecth";
import Navbars from "../components/NavbarBottom";
import Form2Checkbox2 from "../components/FormComponents/Form2Chechbox2";
import RegistrationMedium from "../components/FormComponents/Form2Components/RegistrationMedium";
const Form2 = () => {
  const [test, setTest] = useState(0);
  const [showCountries, setShowCountries] = useState(false);
  const [openRegistration, setOpenRegistration] = useState("yes");
  const [openRegistrationBool, setOpenRegistrationBool] = useState(false);
  const [isUrl, setIsUrl] = useState("yes");

  const handleOpenRegistration = (e) => {
    setOpenRegistration(e);

    if (e === "yes") {
      return setOpenRegistrationBool(false);
    }
    setOpenRegistrationBool(true);
  };

  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div
        className="container"
        style={{ paddingBottom: "44px", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col-12">
            <div
              className={` d-flex align-items-sm-center ${styles.top__alert}`}
              role="alert"
            >
              <i class="fas fa-info-circle" style={{ fontSize: "22px" }} />{" "}
              <span className="ml-2">
                When you accept registrations directly on D2C, you get to
                leverage our extended reach and one-click process advantage that
                our users use to register in many competitions in one go. This
                pumps up participation by up to 500%.
              </span>
            </div>
          </div>
          {/* Open Registration on D2C */}
          <div className="col-12">
            <div className=" d-flex align-items-sm-center   form-control p-3 form-group">
              <p>Open Registration on D2C:</p>
              <div class="form-check ml-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="materialUnchecked"
                  name="materialExampleRadios"
                  onChange={(e) => handleOpenRegistration(e.target.value)}
                  value="yes"
                  checked={openRegistration === "yes"}
                />
                <label class="form-check-label" for="materialUnchecked">
                  Yes
                </label>
              </div>
              <div class="form-check ml-3">
                <input
                  type="radio"
                  class="form-check-input "
                  id="materialUnchecked2"
                  value="no"
                  name="materialExampleRadios"
                  onChange={(e) => handleOpenRegistration(e.target.value)}
                  checked={openRegistration === "no"}
                />
                <label class="form-check-label" for="materialUnchecked2">
                  No
                </label>
              </div>
            </div>
          </div>
          {/* Registration Medium */}
          {openRegistrationBool && (
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
          )}
          <div className="col-12 ">
            <div className=" form-group">
              <label htmlFor={"exampleInputPassword2211"}>
                Registration {isUrl === "yes" ? "URL" : "Email"}{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword2211"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputName">
                Opportunity Start Date & Time{" "}
                <span className={"text-danger"}>*</span>
              </label>
              {/* <DateAndTimePickers /> */}
              <Date2 />
            </div>
          </div>{" "}
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputName">
                Opportunity Start Date & Time{" "}
                <span className={"text-danger"}>*</span>
              </label>
              {/* <DateAndTimePickers /> */}
              <Date2 />
            </div>
          </div>
          {/* Participation */}
          <div className="col col-sm-12 col-lg-12 ">
            <div className="form-control">
              <p className="mb-2 ">
                Participation <span style={{ color: "red" }}>*</span>
              </p>
              <div className="d-md-flex p-2">
                {/* <div className="col col-sm-12 col-lg-5"> */}
                <div class="form-check ">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="materialUnchecked3"
                    name="materialExampleRadios1"
                    checked
                  />
                  <label class="form-check-label" for="materialUnchecked3">
                    Individual
                  </label>
                  {/* </div> */}
                </div>
                {/* <div className="col col-sm-12 col-lg-5"> */}
                <div class="form-check ml-md-5">
                  <input
                    type="radio"
                    class="form-check-input "
                    id="materialUnchecked4"
                    name="materialExampleRadios1"
                  />
                  <label class="form-check-label" for="materialUnchecked4">
                    Partcipation as a team
                  </label>
                </div>
                {/* </div> */}
              </div>
              <div className=" "></div>
            </div>
          </div>
          {/* gender */}
          <div className="col col-sm-12  mt-md-3 ">
            <div className="form-control form-group ">
              <p>
                Gender <span style={{ color: "red" }}>*</span>
              </p>
              <div className="d-md-flex p-2">
                <div class="form-check ">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="gender1"
                    name="genders"
                    checked
                  />
                  <label class="form-check-label" for="gender1">
                    All
                  </label>
                  {/* </div> */}
                </div>
                <div class="form-check ml-md-5">
                  <input
                    type="radio"
                    class="form-check-input "
                    id="gender2"
                    name="genders"
                    checked
                  />
                  <label class="form-check-label" for="gender2">
                    Only Men
                  </label>
                  {/* </div> */}
                </div>
                <div class="form-check ml-md-5">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="gender3"
                    name="genders"
                    checked
                  />
                  <label class="form-check-label" for="gender3">
                    Only Women
                  </label>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Team Composition  */}
          <div className="col-12">
            <div className="form-control form-group ">
              <p>Team Composition</p>
              <div className="d-md-flex mt-3">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input "
                    id="materialUnchecked44"
                    name="Composition"
                    checked
                  />
                  <label class="form-check-label" for="materialUnchecked44">
                    Members of a team should be from same organization
                  </label>
                </div>
                <div class="form-check ml-md-5">
                  <input
                    type="radio"
                    class="form-check-input "
                    id="materialUnchecked45"
                    name="Composition"
                  />
                  <label class="form-check-label" for="materialUnchecked45">
                    Members of a team should be from different organization
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-control form-group">
              <p>
                Opportunity open for{" "}
                <span className="text-danger">
                  <b>*</b>
                </span>
              </p>

              <Form2Checkbox2 />
            </div>
          </div>
          {/* Countries */}
          <div className="col col-sm-12">
            <div className="form-control form-group">
              <p>Countries</p>
              <div className="d-md-flex mt-3">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input "
                    id="countries1"
                    name="Countries"
                    onChange={() => setShowCountries(false)}
                    checked
                  />
                  <label class="form-check-label" for="countries1">
                    All
                  </label>
                </div>
                <div class="form-check ml-md-5">
                  <input
                    type="radio"
                    class="form-check-input "
                    id="countries2"
                    name="Countries"
                    onChange={() => setShowCountries(!showCountries)}
                  />
                  <label class="form-check-label" for="countries2">
                    Select List Of Countries
                  </label>
                </div>
              </div>
              {showCountries ? (
                <div className="input-group mt-3 mb-3">
                  <CountryFecth selectId="form2Country" />
                </div>
              ) : null}
            </div>
          </div>
          {/* ////row//// */}
        </div>
      </div>
      <Navbars
        back_color={"dark"}
        redirect={"/form3"}
        isShow={"flex"}
        name={"Save & Continue"}
      />
    </>
  );
};
export default Form2;
