import Date2 from "../../Date2";
import styles from "../../../pages/Form4.module.css";
const CouponForm = (props) => {
  return (
    <>
      {" "}
      {/* <div className=" d-lg-flex justify-content-between mt-3"> */}
      <div className="">
        <div className="row mt-3 d-flex flex-xs-column flex-lg-row  justify-content-around">
          <div className="form-group col-sm-12 col-md-6  col-lg-2">
            <label htmlFor="" className={styles.couponLabel}>
              Coupon Code <span className={"text-danger"}>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>{" "}
          <div className="form-group col-sm-12 col-md-6 col-lg-2">
            <label htmlFor="exampleInputName" className={styles.couponLabel}>
              Start date <span className={"text-danger"}>*</span>
            </label>
            {/* <DateAndTimePickers /> */}
            <Date2 />
          </div>{" "}
          <div className="form-group col-sm-12 col-md-6 col-lg-2">
            <label htmlFor="exampleInputName" className={styles.couponLabel}>
              End Date <span className={"text-danger"}>*</span>
            </label>
            {/* <DateAndTimePickers /> */}
            <Date2 />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-2">
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
          <div className="form-group col-sm-12 col-md-6 col-lg-2">
            <label htmlFor="" className={styles.couponLabel}>
              Coupon Value <span className={"text-danger"}>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          {/* <label htmlFor="selecthere"> </label> */}
          <div
            className={
              "d-flex justify-content-xs-start justify-content-md-end align-items-center col-sm-12 col-md-6 col-lg-2 mt-xs-2 mb-xs-2"
            }
          >
            {" "}
            <i
              class="fas fa-minus-circle text-danger"
              style={{ fontSize: "32px", cursor: "pointer" }}
              onClick={() => props.fun()}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default CouponForm;
