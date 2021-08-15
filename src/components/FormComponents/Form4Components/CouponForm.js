import Date2 from "../../Date2";
import styles from "../../../pages/Form4.module.css";
const CouponForm = (props) => {
  return (
    <>
      {" "}
      <div className=" d-lg-flex justify-content-between  mt-3">
        <div className="form-group">
          <label htmlFor="" className={styles.couponLabel}>
            Coupon Code <span className={"text-danger"}>*</span>
          </label>
          <input type="text" className="form-control" />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="exampleInputName" className={styles.couponLabel}>
            Start date <span className={"text-danger"}>*</span>
          </label>
          {/* <DateAndTimePickers /> */}
          <Date2 />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="exampleInputName" className={styles.couponLabel}>
            End Date <span className={"text-danger"}>*</span>
          </label>
          {/* <DateAndTimePickers /> */}
          <Date2 />
        </div>
        <div className="form-group">
          <label htmlFor="selecthere" className={styles.couponLabel}>
            Coupon Type <span className={"text-danger"}>*</span>
          </label>
          <select class="custom-select" id="inputGroupSelect01">
            <option value="1" selected={true}>
              Flat
            </option>
            <option value="2">Percentage</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="" className={styles.couponLabel}>
            Coupon Value <span className={"text-danger"}>*</span>
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* <label htmlFor="selecthere"> </label> */}
        <div className={"d-flex align-items-center"}>
          {" "}
          <i
            class="fas fa-minus-circle text-danger"
            style={{ fontSize: "32px", cursor: "pointer" }}
            onClick={() => props.fun()}
          ></i>
        </div>
      </div>
    </>
  );
};
export default CouponForm;
