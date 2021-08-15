import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import DomainsForm from "../components/FormComponents/DomainsForm";
import { FormContext } from "../components/FormContext";
import CountryFecth from "../components/FormComponents/CountryFecth";
import { Drawer } from "@material-ui/core";
import Category from "../components/FormComponents/Category";
import Navbars from "../components/NavbarBottom";
import DateAndTimePickers from "../components/FormComponents/DateAndTimePickers";
import Date2 from "../components/Date2";

const Form = () => {
  const [selectCountry, setSelectCountry] = useState("india");

  const { setHeaderValue } = useContext(FormContext);
  const [title, setTitle] = useState("");
  const history = useHistory();
  const [isShowCountry, setIsShowCountry] = useState(false);

  const specificCountriefun2 = (e) => {
    setSelectCountry(e);
    if (e === "specific countries") {
      return setIsShowCountry(true);
    }
    setIsShowCountry(false);
  };

  const [errMsg, setErrMsg] = useState(null);
  const handleButton = () => {
    if (title === "") {
      return setErrMsg(
        <div class="alert alert-danger" role="alert">
          Please Fill Opportunity field
        </div>
      );
    }
    setHeaderValue(title);

    history.push("/form2");
  };

  return (
    <>
      <div className=" " style={{ paddingBottom: "44px", overflow: "hidden" }}>
        <div className="container-fluid ">
          <div className="row mt-2">
            <div className="col-sm-12 col-lg-7 ">
              <div className="form-group">
                <label htmlFor="Category">
                  Category: <span className={"text-danger"}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Category"
                  aria-describedby="Category"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword22">
                  Opportunity Title<span className={"text-danger"}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword22"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="exampleInputPassword21">
                Website Url
                <span className={"text-danger"}>*</span>
              </label>
              <div className="form-group d-flex">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">
                    https://
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-5 mb-3">
              <input type="file" className="form-control-file" />
            </div>

            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputName19">
                  Organisation <span className={"text-danger"}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName19"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="alert alert-primary   " role="alert">
                If you're an organization and not an institute/school, please
                list the event using your official email id (having company
                domain e.g. support@dare2compete.com).
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputName12">
                  Festival <span className={"text-danger"}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName12"
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
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputName">
                  Opportunity End Date & Time{" "}
                  <span className={"text-danger"}>*</span>
                </label>
                {/* <DateAndTimePickers /> */}
                <Date2 />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputName222">
                  Opportunity Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName222"
                />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="exampleInputName">
                Region <span className={"text-danger"}>*</span>
              </label>
              <div className=" d-flex mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios200"
                    id="exampleRadios1"
                    value="india"
                    onChange={(e) => {
                      specificCountriefun2(e.target.value);
                    }}
                    checked={selectCountry === "india"}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    India
                  </label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios200"
                    id="exampleRadios2"
                    value="global"
                    onChange={(e) => {
                      specificCountriefun2(e.target.value);
                    }}
                    checked={selectCountry === "global"}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Global
                  </label>
                </div>
                <div className="form-check  ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={selectCountry === "specific countries"}
                    onChange={(e) => {
                      specificCountriefun2(e.target.value);
                    }}
                    name="exampleRadios200"
                    id="exampleRadios3"
                    value="specific countries"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    Specific Countries
                  </label>
                </div>
              </div>
              {isShowCountry ? (
                <div className="col-12">
                  <div className="form-group">
                    <CountryFecth selectId="formCountry" />
                  </div>
                </div>
              ) : null}
            </div>

            <div className="col-12 align-content-end flex-wrap">
              <label htmlFor="exampleInputName">
                Domains <span className={"text-danger"}>*</span>
              </label>
              <div className="form-group  p-2 ">
                <DomainsForm />
              </div>
            </div>
            <div className="col-12 d-flex align-content-end  flex-wrap">
              <label htmlFor="exampleInputName">
                Category <span className={"text-danger"}>*</span>
              </label>
              <div className="form-group p-1  ml-2">
                <Category />
              </div>
            </div>
            <div className="col-12 text-center ">
              <b>{errMsg}</b>
            </div>
            {/*Row*/}
          </div>
        </div>
      </div>
      <Navbars
        back_color={"dark"}
        // redirect={"/form2"}
        isShow={"flex"}
        name={"Save & Continue"}
        fun={() => handleButton()}
      />
    </>
  );
};
export default Form;
