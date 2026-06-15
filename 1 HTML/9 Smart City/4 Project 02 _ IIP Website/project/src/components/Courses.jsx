import { NavLink } from "react-router-dom";
import AsideBar from "./AsideBar";
import Footer from "./Footer";

import pht from "./images/php.png";
import marketing from "./images/digi-mkting.png";
import adv from "./images/adv-php.png";
import graphic from "./images/graphic-design.png";
import python from "./images/python.png";
import seo from "./images/seo.png";
import abdroid from "./images/abdroid.png";
import wordpress from "./images/wordpress.png";
import java from "./images/java.png";

const Courses = () => {
  return (
    <div className='bg-[#f1f0ef] pt-2 '>
      <div className="flex items-start bg-white  m-4 gap-5">
        <AsideBar /> 

        <div className="w-290 ">
          <nav className="flex items-center  justify-between p-4 ">
            <h1 className="text-3xl font-bold">About Us:</h1>

            <div className="flex text-2xl text-[#00a8ec] gap-5 font-medium">
              <NavLink className="text-2xl" to="/">
                Home /
              </NavLink>
              <h2 className="text-black">About Us</h2>
            </div>
          </nav>
          <div className=" flex flex-wrap gap-5 justify-between p-8  m-4"> 
            <Cart
              color={"#e6611c"}
              src={pht}
              title={"PHP (Website Development)"}
            />
            <Cart color={"#7bb1e0"} src={python} title={"Python"} />
            <Cart color={"#5e5da4"} src={adv} title={"Advance PHP"} />
            <Cart
              color={"#308a7c"}
              src={seo}
              title={"Search Engine Optimization"}
            />
            <Cart
              color={"#89c222"}
              src={abdroid}
              title={"Android App Development"}
            />
            <Cart color={"#d60726"} src={graphic} title={"Graphic Designing"} />
            <Cart
              color={"#5e5da4"}
              src={marketing}
              title={"Digital Marketing"}
            />

            <Cart color={"#e6611c"} src={wordpress} title={"Wordpress"} />
            <Cart color={"#e6611c"} src={java} title={"Java"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;

const Cart = ({ color, src, title }) => {
  return (
    <div className="w-70">
      <div
        style={{ background: color }}
        className="bg-[#e6611c] rounded-t-2xl flex justify-center items-center  p-4"
      >
        <div className=" border-white border-5 flex justify-center items-center rounded-full w-30 h-30  ">
          <img className=" p-4 object-cover  " src={src} alt="" />
        </div>
      </div>
      <div style={{border: `1px solid ${color}`}} className="border text-center h-24 text-2xl p-4  ">
        {title}
      </div>
    </div>
  );
};
