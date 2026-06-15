import { NavLink } from "react-router-dom";
import AsideBar from "./AsideBar";
import Footer from "./Footer";
import phone from "./images/phone.png";
import address from "./images/address-pin.png";
import map from "./images/map.png";

const Contact = () => {
  return (
    <div className='bg-[#f1f0ef] pt-2 '>
      <div className="flex items-start bg-white  m-4 gap-5">
        <AsideBar />

        <div className="w-290 ">
          <nav className="flex items-center  justify-between p-4 ">
            <h1 className="text-3xl font-bold">Contact:</h1>

            <div className="flex text-2xl text-[#00a8ec] gap-5 font-medium">
              <NavLink className="text-2xl" to="/">
                Home /
              </NavLink>
              <h2 className="text-black">Contact</h2>
            </div>
          </nav>

          {/* Contact Information */}
          <div className=" flex flex-wrap gap-5 items-start justify-between p-5  ">
            <div className=" flex flex-col justify-center items-center text-center p-4">
              <img
                className="aspect-square h-40 w-30 object-contain"
                src={phone}
                alt="Contact Image"
              />
              <div className="mt-4">
                <ul className="text-lg font-medium">
                  <li>
                    <span className="font-bold">Phone: </span> 0291-2468122,
                    +91-9269698122
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a href="#" className="text-[#00a8ec]">
                      contact@example.com
                    </a>
                  </li>

                  <li>
                    <span className="font-bold">Website: </span>
                    <a href="#" className="text-[#00a8ec]">
                      www.example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center text-center p-4">
              <img
                className="aspect-square  h-40 w-30 object-contain"
                src={address}
                alt="Contact Image"
              />
              <div className="mt-4">
                <p className="w-50  text-lg font-medium">
                  Ground Floor, Laxmi Tower, Bhaskar Circle, Ratanada, Jodhpur
                  (Raj.)
                </p>
              </div>

            </div>
          </div>

		  <h1 className="text-3xl mx-4  font-bold">Find Us On Map</h1>
		  <img className="p-4 w-full" src={map} alt="Map" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
