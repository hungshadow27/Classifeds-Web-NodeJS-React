import Banner1 from "./banner1.png";
import Banner2 from "./banner2.jpg";
import Banner3 from "./banner3.jpg";
import Banner4 from "./banner4.png";
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <Carousel className="rounded-xl" autoplay>
      <img src={Banner1} className="h-full w-full object-cover" />
      <img src={Banner2} className="h-full w-full object-cover" />
      <img src={Banner3} className="h-full w-full object-cover" />
      <img src={Banner4} className="h-full w-full object-cover" />
    </Carousel>
  );
};

export default Slider;
