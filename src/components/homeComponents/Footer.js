import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer__foot pb-4 d-none d-lg-block">
        <div className=" d-flex justify-content-between">
          <Column />
        </div>
        <Column2 />
        <Column3 />
      </div>
      <Column4 />
      <ResponsiveColumn />
    </>
  );
};

const Column = () => {
  return (
    <>
      <div className="column_1 d-flex flex-column ">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/6081574415bfc_d2c.svg"
          className="img-fluid mb-2"
          alt=""
          style={{ width: "50px", background: "transparent" }}
        />
        <div> About Us</div>
        <div> Contact Us</div>
        <div> Clientele</div>
        <div> Testimonials</div>
        <div> Subscribe Newsletter</div>
      </div>
      <div className="column_1 d-flex flex-column">
        <h2>Our Services</h2>
        <div> For Companies</div>
        <div> For Colleges</div>
        <div> For Event Organisers</div>
        <button>Careers</button>
      </div>{" "}
      <div className="column_1 d-flex flex-column">
        <h2>Browse Opportunities</h2>
        <div> Competitions | Quizzes</div>
        <div> Hackathons | Scholarships</div>
        <div> Internships | Jobs</div>
        <div> Workshops | Conferences</div>
        <div> Cultural Events | Festivals</div>
      </div>{" "}
      <div className="column_1 d-flex flex-column">
        <h2>Our Products</h2>
        <div> Technology Platform</div>
        <div> Online Recruitment Platform</div>
        <div> Quizzing / Assessments</div>
        <div> Online Hackathons / Coding</div>
        <div> Business Simulation Games</div>
      </div>{" "}
      <div className="column_1 d-flex flex-column">
        <h2>Download App</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
          alt=""
          className="google__play"
        />
        <div className="d-flex iCons__div justify-content-between ">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
        </div>
        <div className="googleNews__button d-flex justify-content-between">
          <div>Stay Updated</div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/1200px-Google_News_icon.svg.png"
            className="img-fluid "
            alt=""
          />
        </div>
      </div>
    </>
  );
};
const Column2 = () => {
  return (
    <>
      <div
        className={
          "column2 text-light d-flex align-items-center justify-content-between"
        }
      >
        <div className="d-flex">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Branding GuideLines</div>
          <div>Partners</div>
          <div>FAQS</div>
          <div>Partner With Us</div>
        </div>
        <div
          className="d-flex justify-content-between"
          // style={{ marginLeft: "calc(100%+300px)" }}
        >
          <button className="btn btn-sm btn-primary mr-4">
            Share Your Stoty Now
          </button>
          <button className=" btn btn-sm btn-primary">
            Publish Oppertunity
          </button>
        </div>
      </div>
    </>
  );
};

const Column3 = () => {
  return (
    <>
      <div className="column3 d-flex justify-content-center align-items-center">
        <div>
          Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &
          Safari.
        </div>
        <div>
          Copyright © 2021 FLIVE Consulting Pvt Ltd - All rights reserved.
        </div>
        <div>V: 7.20.1.9.32</div>
      </div>
    </>
  );
};

const Column4 = () => {
  return (
    <>
      <div className="container column4 d-none  d-lg-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center"
          // style={{ width: "52px"}}
        >
          <div className="text">We accept payments using:</div>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png"
            alt=""
            className="column4__logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png"
            alt=""
            className="column4__logo"
          />
          <img
            src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png"
            alt=""
            className="column4__logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png"
            alt=""
            className="column4__logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/1200px-Maestro_logo.svg.png"
            alt=""
            className="column4__logo"
          />
        </div>
        <div className="d-flex">
          <img
            className="column4__logo2"
            src="	https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/safe_payment.png"
            alt=""
          />
          <img
            src="	https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/ssl_secured.svg"
            className="column4__logo2"
            alt=""
          />
          <img
            src="	https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/razorpay.png"
            className="column4__logo2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const ResponsiveColumn = () => {
  return (
    <>
      <div className="responsive__column d-block d-lg-none">
        <div>© 2021 FLIVE Consulting Pvt Ltd -</div>
        <div>All rights reserved. | V: 7.20.1.9.32</div>
      </div>
    </>
  );
};

export default Footer;
