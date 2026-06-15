import { NavLink } from "react-router-dom";
import AsideBar from "./AsideBar";
import Footer from "./Footer";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";


const Gallery = () => {
  return (
    <div className='bg-[#f1f0ef] pt-2 '>
      <div className="flex items-start bg-white  m-4 gap-5">
        <AsideBar />

        <div className="w-290 ">
          <nav className="flex items-center  justify-between p-4 ">
            <h1 className="text-3xl font-bold">Gallery:</h1>

            <div className="flex text-2xl text-[#00a8ec] gap-5 font-medium">
              <NavLink className="text-2xl" to="/">
                Home /
              </NavLink>
              <h2 className="text-black">Gallery</h2>
            </div>
          </nav>

          <div className=" flex flex-wrap gap-5 justify-between p-8  m-4">
            <ImgCart src={img1} title={"Title 1"} />
            <ImgCart src={img2} title={"Title 2"} />
            <ImgCart src={img3} title={"Title 3"} />
            <ImgCart src={img4} title={"Title 4"} />
            <ImgCart src={img5} title={"Title 5"} />
            <ImgCart src={img6} title={"Title 6"} />
            <ImgCart src={img7} title={"Title 7"} />
            <ImgCart src={img8} title={"Title 8"} />
            <ImgCart src={img9} title={"Title 9"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default Gallery;

const ImgCart  = ({src, title }) => {
  return (
    <div className="w-70" title={title}>
      <div className="  flex justify-center items-center  ">
        <img className=" aspect-video object-cover  rounded-t-lg " src={src} alt="" />
      </div>
      <div className="bg-[#343130] mt-1 rounded-b-lg text-white text-center text-2xl p-4  ">
       {title}
      </div>
    </div>
  );
};










