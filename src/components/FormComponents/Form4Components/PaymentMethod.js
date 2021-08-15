import Switch from "../../Switch";
import styles from "../../../pages/Form4.module.css";
const PaymentMethod = (props) => {
  return (
    <>
      <div className="d-md-flex flex-column mb-3 p-0 ">
        <div
          className={`form-control d-flex align-items-center justify-content-between ${styles.paymentMethod__font}`}
        >
          <div>{props.text1}</div>
          <div>Service Charge: {props.text2}</div>
          <div
            className={`d-flex align-items-center ${styles.paymentMethod__font}`}
          >
            <p>No</p> <Switch /> Yes
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentMethod;
