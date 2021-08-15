import Coupons from "../components/FormComponents/Form4Components/Coupons";
import styles from "./Form4.module.css";
import PaymentMethod from "../components/FormComponents/Form4Components/PaymentMethod";
import PayoutForm from "../components/FormComponents/Form4Components/PayoutForm";
import { useState } from "react";
import Navbars from "../components/NavbarBottom";

const Form4 = () => {
  const [enableOppertunity, setEnableOppertunity] = useState("yes");
  const [viewEnableOppertunity, setviewEnableOppertunity] = useState(true);

  const enableOppertunity1 = () => {
    setEnableOppertunity("yes");
    setviewEnableOppertunity(true);
  };
  const enableOppertunity2 = () => {
    setEnableOppertunity("no");
    setviewEnableOppertunity(false);
  };

  const [paidOppertunity, setPaidOppertunity] = useState("no");

  const [viewPaidOppertunityData, setviewPaidOppertunityData] = useState(false);

  const paidOppertunityFun = () => {
    setPaidOppertunity("yes");
    setviewPaidOppertunityData(true);
    enableOppertunity1();
  };
  const paidOppertunityFun2 = () => {
    setPaidOppertunity("no");
    setviewPaidOppertunityData(false);
  };

  const [paymentmode1, setPaymentmode1] = useState(true);
  const [paymentmode2, setPaymentmode2] = useState(false);
  const SwitchPaymentmode1 = () => {
    setPaymentmode1(true);
    setPaymentmode2(false);
  };
  const SwitchPaymentmode2 = () => {
    setPaymentmode2(true);
    setPaymentmode1(false);
  };
  let color1 = paymentmode1 ? "primary" : "light";
  let color2 = paymentmode2 ? "primary" : "light";
  return (
    <>
      <div className="container">
        <div
          class={`d-flex align-items-sm-center  ${styles.top__alert}`}
          role="alert"
        >
          <i class="fas fa-info-circle" style={{ fontSize: "22px" }} />{" "}
          <span className="ml-2">
            This section is to enable payment for your opportunity. No
            transaction fee will be charged (0% Transaction Fee). You will
            receive the credit within 7 working days of registration closure.
          </span>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <div
              className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
            >
              <div className={"mr-3"}>Is this a paid opportunity? </div>
              <div class="form-check   disabled ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="yes"
                  onChange={paidOppertunityFun}
                  checked={paidOppertunity === "yes"}
                />
                <label class="form-check-label mr-3" for="exampleRadios3">
                  Yes
                </label>
              </div>
              <div class="form-check   disabled ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios32"
                  value="no"
                  onChange={paidOppertunityFun2}
                  checked={paidOppertunity === "no"}
                />
                <label class="form-check-label mr-3" for="exampleRadios32">
                  No
                </label>
              </div>
            </div>
          </div>
          {viewPaidOppertunityData ? (
            <>
              {" "}
              <div className="col-12 mb-3">
                <div
                  className={`d-md-flex align-items-center   form-control p-3  ${styles.form__backColor}`}
                >
                  <div className={"mr-3"}>Enable Payment on D2C </div>
                  <div class="form-check   disabled ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios1"
                      id="exampleRadios12"
                      value="yes"
                      onChange={enableOppertunity1}
                      checked={enableOppertunity === "yes"}
                    />
                    <label class="form-check-label mr-3" for="exampleRadios12">
                      Yes
                    </label>
                  </div>
                  <div class="form-check   disabled ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios1"
                      id="exampleRadios44"
                      value="no"
                      onChange={enableOppertunity2}
                      checked={enableOppertunity === "no"}
                    />
                    <label class="form-check-label mr-3" for="exampleRadios44">
                      No
                    </label>
                  </div>
                </div>
              </div>
              {viewEnableOppertunity ? (
                <>
                  <div className="col-12 mb-3">
                    <div className="form-control">
                      <div className={`d-flex align-self-center p-2`}>
                        <div>Payment Mode</div>
                        <div className="ml-auto d-flex">
                          <button
                            onClick={SwitchPaymentmode1}
                            className={`btn btn-sm  btn-${color1}  `}
                          >
                            Team
                          </button>
                          <button
                            onClick={SwitchPaymentmode2}
                            className={`btn btn-sm btn-${color2}`}
                          >
                            Per Team Member
                          </button>
                        </div>
                      </div>

                      <div className="d-flex align-self-center p-2">
                        <div>Fee/ Amount (in INR) *</div>
                        <div className="ml-auto d-flex form-group">
                          <label htmlFor="shanuForm" className="mr-3">
                            {" "}
                            INR:{" "}
                          </label>
                          <input
                            type="text"
                            id="shanuForm"
                            className="form-control-sm"
                          />
                        </div>
                      </div>
                      <Coupons />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-control p-3">
                      <label htmlFor="" className={"mb-3"}>
                        Payment Method <span className="text-danger">*</span>
                      </label>

                      <PaymentMethod
                        text1={"UPI (Google Pay, BHIM, PhonePe, Paytm, etc.)"}
                        text2={"2%"}
                      />
                      <PaymentMethod
                        text1={"Internet Banking (All Major Banks)"}
                        text2={"3%"}
                      />
                      <PaymentMethod
                        text1={
                          "Credit/Debit Card (Visa, MasterCard, RuPay, Maestro)"
                        }
                        text2={"3%"}
                      />
                      <PaymentMethod
                        text1={"Wallet (Mobikwik, Freecharge, etc.)"}
                        text2={"3%"}
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-control p-3">
                      <label htmlFor="" className={"mb-3"}>
                        Payout Form <span className="text-danger">*</span>
                      </label>
                      <PayoutForm />
                    </div>
                  </div>
                </>
              ) : (
                <div className="col-12 mb-3">
                  <div className="form-control p-3">
                    <div className="form-group">
                      <label htmlFor="hiippi" className={"mb-3"}>
                        Payment applicable (in INR){" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : null}

          {/* row */}
        </div>
      </div>
      <Navbars
        back_color={"light"}
        // redirect={"/form2"}
        isShow={"flex"}
        name={"Save & Continue"}
      />
    </>
  );
};
export default Form4;
