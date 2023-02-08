import ImageSlider from "./../components/ImageSlider";
import { SliderData } from "../data/SliderData";
import GeoMap from "./../components/GeoMap";
import PlanContainer from "./../components/Plans/PlanContainer";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2">
      {/* <h1 className="text-center">
        We'll travel you Everywhere in this stunning country
      </h1> */}
      {/* <ImageSlider slides={SliderData} /> */}
      <GeoMap />
      <PlanContainer />
    </div>
  );
};

export default HomePage;
