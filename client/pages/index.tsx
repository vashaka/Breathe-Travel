import ImageSlider from "./../components/ImageSlider";
import { SliderData } from "../data/SliderData";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default HomePage;
