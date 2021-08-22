import "./section3.css";
const Section3 = () => {
  const arraySection3 = [
    {
      icons: <i class="fas fa-trophy"></i>,
      text: "Competitions",
      colors: "#F6B543",
    },
    {
      icons: <i class="fas fa-sticky-note"></i>,
      text: "Quizzes",
      colors: "#C58BF9",
    },
    {
      icons: <i class="fas fa-code"></i>,
      text: "Hackathons",
      colors: "#65E4CB",
    },
    {
      icons: <i class="fas fa-graduation-cap"></i>,
      text: "Scholarship",
      colors: "#EF7573",
      hidding: "d-none d-md-block",
    },
    {
      icons: <i class="fas fa-briefcase"></i>,
      text: "Internships",
      colors: "#43B3F8",
    },
    { icons: <i class="fas fa-user-md"></i>, text: "Jobs", colors: "#EF7573" },
    {
      icons: <i class="fas fa-file-word"></i>,
      text: "Workshops",
      colors: "#65E4CB",
    },
    {
      icons: <i class="fas fa-handshake"></i>,
      text: "Conferences",
      colors: "#65E4CB",
    },
    {
      icons: <i class="fas fa-glass-cheers"></i>,
      text: "Festivals",
      colors: "#F6B543",
    },
    {
      icons: <i class="fab fa-discourse"></i>,
      text: "Courses",
      colors: "#43B3F8",
    },
  ];
  return (
    <>
      <div className="container-fluid mt-4 mb-2 mb-lg-4 ">
        <h1
          style={{ fontSize: "20px", lineHeight: "22px" }}
          className="mb-sm-2 mb-md-3 text-sm-center text-md-left "
        >
          Browse Opportunities
        </h1>
        <div className="row ">
          {arraySection3.map((l) => (
            <div
              className={`  col-4 col-md-2 col-lg section3__card mt-1 mt-sm-2 mr-md-1 mt-md-2 text-center  d-lg-flex justify-content-lg-between ${l.hidding}`}
            >
              <div style={{ width: "100%" }}>
                <span
                  className=" section__icon d-flex flex-column align-self-center "
                  style={{ color: `${l.colors} ` }}
                >
                  {l.icons}
                </span>
                <p className={`section3__text  `}>{l.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Section3;
