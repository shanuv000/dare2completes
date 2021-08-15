import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useState } from "react";
import styles from "../../../pages/Form4.module.css";
import Date2 from "../../Date2";
import CouponForm from "./CouponForm";
const Coupons = () => {
  const [count, setCount] = useState(0);
  const item = [];
  for (let i = 1; i <= count; i++) {
    item.push(
      <CouponForm
        fun={() => {
          setCount(count - 1);
        }}
      />
    );
  }
  console.log(item);

  console.log(count);
  return (
    <>
      <div
        className="container-fluid p-2 border rounded"
        style={{ background: "#F5F5F5" }}
      >
        <div classname="mb-3">
          <InfoOutlinedIcon
            fontSize={"inherit"}
            style={{ marginRight: "1%" }}
          />{" "}
          Add Coupons
        </div>

        {count <= 0 ? (
          <div class="alert alert-warning mt-3 " role="alert">
            <InfoOutlinedIcon
              fontSize={"inherit"}
              style={{ marginRight: "1%" }}
            />
            No Coupon added.
          </div>
        ) : (
          item.map((el) => {
            return el;
          })
        )}

        {/* Button */}
        {count !== 5 ? (
          <button
            className={`btn text-light ${styles.coupon_btn}`}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {count === 0 ? "Add" : "Add More"}
          </button>
        ) : null}
      </div>
    </>
  );
};
export default Coupons;
