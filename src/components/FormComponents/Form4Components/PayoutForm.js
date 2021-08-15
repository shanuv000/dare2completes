import styles from "../../../pages/Form4.module.css";
const PayoutForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="in1" className={styles.payout__font}>
              Account Holder Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="in1"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="Phone" className={styles.payout__font}>
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="Phone"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="Email" className={styles.payout__font}>
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="Bank Account *" className={styles.payout__font}>
              Bank Account <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="Bank Account *"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="IFSC Code *" className={styles.payout__font}>
              IFSC Code <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="IFSC Code *"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="PAN Number" className={styles.payout__font}>
              PAN Number
            </label>
            <input
              type="text"
              id="PAN Number"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="GSTIN" className={styles.payout__font}>
              GSTIN
            </label>
            <input
              type="text"
              id="GSTIN"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="Address 1 " className={styles.payout__font}>
              Address 1 <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="Address 1 "
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="Address 2" className={styles.payout__font}>
              Address 2 <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="Address 2"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="City" className={styles.payout__font}>
              City <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="City"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="State" className={styles.payout__font}>
              State <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="State"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="Pincode" className={styles.payout__font}>
              Pincode <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              id="Pincode"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PayoutForm;
