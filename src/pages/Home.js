import { useContext } from "react";
import Section2 from "../components/homeComponents/section2";
import Section3 from "../components/homeComponents/section3";
import Section4 from "../components/homeComponents/section4";
import SectionPlayground from "../components/homeComponents/sectionPlayground";
import ImageCrousel from "../components/homeComponents/ImageCrouselTop";
import ImageCrouselCenter from "../components/homeComponents/ImageCrouselCenter";
import SlidingPanel from "../components/SlidingPanel";
import BigCrousel from "../components/homeComponents/BigCrouselDiv";
import SeconLastSection from "../components/homeComponents/secondLastSection";
import Footer from "../components/homeComponents/Footer";
import { FormContext } from "../components/FormContext";
const Home = (props) => {
  const { imagesContext } = useContext(FormContext);
  return (
    <>
      <ImageCrousel imss={props.imss} />
      <div className="container">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section4 />
        {/* <SlidingPanel /> */}
        <ImageCrouselCenter />
        <BigCrousel imss={props.imss} />
        <SeconLastSection />
        {/* <SectionPlayground /> */}
      </div>
      <Footer />
      {/* <div className="container-fluid mb-2"></div> */}
    </>
  );
};
export default Home;
