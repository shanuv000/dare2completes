import "./section2.css";
import TextTransition from "../TextTransition";
const section2 = () => {
  const arr = [
    {
      icon: <i class="fas fa-trophy"></i>,
      number: 27568,
      information: "Competitions",
    },
    {
      icon: <i class="fas fa-feather-alt"></i>,
      number: 7774,
      information: "Quizzes",
    },
    {
      icon: <i class="fas fa-code"></i>,
      number: 2558,
      information: "Hackathons",
    },
    {
      icon: <i class="far fa-file-code"></i>,
      number: 4045780,
      information: "Assessments",
    },
    {
      icon: <i class="far fa-building"></i>,
      number: 20377,
      information: "Companies & Colleges",
    },
    {
      icon: <i class="fas fa-users"></i>,
      number: 1589428,
      information: "Users",
    },
  ];
  return (
    <>
      <div className="row mt-4 ">
        <div className="col-xs-12 col-lg-6  ">
          <p className="text__desc text-center p-2">
            Gamifying Learning, Engagements and Hiring while connecting
            students, professionals, companies, colleges, educators and
            learners.
          </p>
          <h1 className="bold__text text-center">
            Publish & Host Your{" "}
            <span style={{ color: "red" }}>{<TextTransition />}</span>
          </h1>
        </div>
        <div
          className="d-none col-lg-6  d-md-flex align-items-center 
        justify-content-between"
        >
          <div className="row">
            {arr.map((infos) => {
              return (
                <div className="section2__borders">
                  <div className="section2__icons d-flex align-self-center  ">
                    {infos.icon}
                  </div>
                  <div className=" ml-2  ">
                    <h1 className="section2__head d-flex align-self-center">
                      {infos.number}
                    </h1>
                    <p className="section2__p d-flex align-self-center">
                      {infos.information}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default section2;
