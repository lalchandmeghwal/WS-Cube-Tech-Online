import { NavLink } from "react-router-dom";
import AsideBar from "./AsideBar";
import Footer from "./Footer";

const Enquiry = () => {
  return (
    <>
      <div className="flex items-start bg-white  m-4 gap-5">
        <AsideBar />

        <div className="w-290 ">
          <nav className="flex items-center  justify-between p-4 ">
            <h1 className="text-3xl font-bold">Enquiry:</h1>

            <div className="flex text-2xl text-[#00a8ec] gap-5 font-medium">
              <NavLink className="text-2xl" to="/">
                Home /
              </NavLink>
              <h2 className="text-black">Enquiry</h2>
            </div>
          </nav>

          <form className="bg-[#00a8ec] px-50 py-10 flex flex-col text-2xl  text-white ">
            <label htmlFor="name">Name:</label>
            <input
              className="bg-white rounded-md mb-3 p-2 text-black outline-0 "
              type="text"
              id="name"
              name="name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className="bg-white rounded-md  mb-3 p-2 text-black outline-0 "
              type="email"
              id="email"
              name="email"
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              className="bg-white rounded-md  mb-3 p-2 text-black outline-0 "
              type="tel"
              id="phone"
              name="phone"
              required
            />

            <div className="flex items-center mb-3 ">
              <label>Gender:</label>

              <div className="ml-1 flex gap-2 items-center ">
                <input
                  type="radio"
                  name="sex"
                  id="male"
                  className="mr-2 p-2 h-6 w-6 "
                  required
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="sex"
                  id="female"
                  className="mr-2 p-2 h-6 w-6  "
                  required
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <label htmlFor="country">Country:</label>
       
          <select
            className="bg-white rounded-md  mb-3 p-2 text-black outline-0 "
            id="country"
            name="country"
            required
          >
            <option value=""  disabled>Select Country</option>
            <option value="USA" >USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>

            <label htmlFor="message">Message:</label>
            <textarea
              className="bg-white rounded-md p-2 text-black outline-0 "
              id="message"
              name="message"
              required
            ></textarea>

            <button
              className="bg-white hover:bg-gray-200 rounded-md cursor-pointer mt-4 p-2 text-black outline-0 "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Enquiry;
