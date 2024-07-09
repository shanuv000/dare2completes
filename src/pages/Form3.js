import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory directly from react-router-dom
import styles from "./Form3.module.css";

const Form3 = () => {
  const history = useHistory(); // Use useHistory hook to manage navigation
  const [formDisabled, setFormDisabled] = useState(true);
  const passOutArray = [2021, 2022, 2023, 2024, 2025, 2026, 2027];
  const CourseDurationArray = [
    "1 Year",
    "2 Year",
    "3 Year",
    "4 Year",
    "5 Year",
    "6 Year",
  ];
  let i = 0;

  return (
    <>
      <div
        className="container"
        style={{ paddingBottom: "44px", overflow: "hidden" }}
      >
        <h4>Your Current Registration Form</h4>
        <p>
          Your registration form is now ready. Have a look at the registration
          form here. You can also add additional fields in the registration form
          (if required).
        </p>
        <div className={`${styles.form__back}`}>
          <div className="row">
            <div className="col col-12">
              <div className="form-group">
                <label htmlFor="teamname1" className={styles.fonts}>
                  Team Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teamname1"
                  aria-describedby="emailHelp"
                  value="Your Team Name"
                  disabled={formDisabled}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="teamemail1" className={`${styles.fonts}`}>
                  Player's Email
                  <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teamemail1"
                  aria-describedby="emailHelp"
                  value="Your Registered Email Id"
                  disabled={formDisabled}
                />
              </div>
            </div>{" "}
            <div className=" col-xs-12 col-md-6">
              <div className="form-group">
                <label htmlFor="phone" className={styles.fonts}>
                  Player's Mobile No
                  <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  aria-describedby="emailHelp"
                  value="Your Mobile Number"
                  disabled={formDisabled}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="playName" className={styles.fonts}>
                  Player's Name
                  <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="playName"
                  aria-describedby="emailHelp"
                  value="Your Name"
                  disabled={formDisabled}
                />
              </div>
            </div>{" "}
            <div className=" col-xs-12 col-md-6">
              <div className="form-group">
                <label htmlFor="organization" className={styles.fonts}>
                  College/Organisation
                  <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="organization"
                  aria-describedby="emailHelp"
                  value="Your College/Organisation"
                  disabled={formDisabled}
                />
              </div>
            </div>
            {/* Gender */}
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Gender</div>
                <div className="form-check   disabled ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    checked={true}
                    disabled
                  />
                  <label
                    className="form-check-label mr-3"
                    htmlFor="exampleRadios3"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check   disabled ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label
                    className="form-check-label mr-3"
                    htmlFor="exampleRadios3"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check   disabled">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Do not Wish to Disclose
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Type</div>
                <div className="form-check   disabled ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    checked={true}
                    disabled
                  />
                  <label
                    className="form-check-label mr-3"
                    htmlFor="exampleRadios3"
                  >
                    College Student
                  </label>
                </div>
                <div className="form-check   disabled ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label
                    className="form-check-label mr-3"
                    htmlFor="exampleRadios3"
                  >
                    Corporate
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Domain</div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    //   checked={true}
                    disabled
                  />
                  <label className="form-check-label " htmlFor="exampleRadios3">
                    Management
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label className="form-check-label " htmlFor="exampleRadios3">
                    Engineering
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Art & Science
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Courses</div>
                <div className="form-check   disabled mr-3 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    checked={true}
                    disabled
                  />
                  <label className="form-check-label " htmlFor="exampleRadios3">
                    Full Time 2-Year Mba
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Full Time 1-Year Mba
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    //   checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    BBA (Graduation)
                  </label>
                </div>
                <div className="form-check   disabled mr-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    // checked={true}
                    disabled
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Course Specialization</div>
                <select className="custom-select" disabled={true}>
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Passout Year</div>
                {passOutArray.map((e) => {
                  return (
                    <div className="form-check   disabled mr-3 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option3"
                        checked={false}
                        disabled
                      />
                      <label
                        className="form-check-label "
                        htmlFor="exampleRadios3"
                      >
                        {e}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 mb-3">
              <div
                className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Course Duration</div>
                {CourseDurationArray.map((e) => {
                  i = i + 1;
                  return (
                    <div className="form-check   disabled mr-3 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option3"
                        checked={
                          i === CourseDurationArray.length ? true : false
                        }
                        disabled
                      />
                      <label
                        className="form-check-label "
                        htmlFor="exampleRadios3"
                      >
                        {e}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 mb-1">
              <div
                className={`d-lg-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
              >
                <div className={"mr-3"}>Country</div>
                <select className="custom-select" disabled={true}>
                  <option selected>India</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-5  border-round d-md-flex  align-items-md-center ${styles.back__col__down}`}
        >
          <div className="text-dark align-self-sm-start mt-sm-2 mt-lg-0">
            Do you want to add additional fields in the registration form?
          </div>
          <div className="d-md-flex ml-md-auto  align-items-center mt-xs-2 ">
            <div className="mr-md-2 text-primary">What's this?</div>
            <button className="btn btn-sm btn-outline-info mr-md-2 ">
              Yes! Extend Form
            </button>
            <button
              onClick={() => {
                history.push("/form4");
              }}
              className="btn btn-sm btn-info mt-sm-4 mt-md-0"
            >
              Continue With This Form
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form3;
