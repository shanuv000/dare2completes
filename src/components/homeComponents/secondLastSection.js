import "./SecondLast.css";
import BookIcon from "@material-ui/icons/Book";
const SecondLastSection = () => {
  return (
    <>
      <div className=" head__back__sec">
        <div className="row ">
          <div className="col-12 px-2 col-lg d-flex align-items-center head__main__text  justify-content-center mb-2 mb-lg-0">
            Inspire Aspire Lead
          </div>
          <div className="col-6 col-lg p-2">
            <Card />
          </div>
          <div className="col-6 col-lg p-2">
            <Card />
          </div>
          <div className="col-6 col-lg p-2">
            <Card />
          </div>{" "}
          <div className="col-6 col-lg p-2">
            <Card />
          </div>
        </div>
      </div>{" "}
    </>
  );
};
const Card = () => {
  return (
    <>
      <div class="carding d-flex flex-column p-2 align-items-center">
        <div className="d-flex p-2">
          <div className="icon__img__sec">
            <BookIcon style={{ fontSize: "50px", color: "#5296f0" }} />
          </div>
          <div className="text1__text ml-1 ml-lg-3">Competition Stories</div>
        </div>
        <div className="text2__text  px-3 pb-2">
          Winning mantras from participants
        </div>
      </div>
    </>
  );
};
export default SecondLastSection;
