import { NavLink } from "react-router-dom";
import AsideBar from "./AsideBar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
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

          <div className="flex flex-col gap-3 mt-5 text-[20px]  px-4">
            <p>
              At IIP Academy, students always had the access to Major & Minor
              Projects in Website Development (PHP / MySQL)
            </p>
            <p>
              IIP Academy Provide best training in .NET & PHP. So that students
              themselves can be able to develop projects and launch them LIVE on
              IIP Academy Online Servers. Our Students had developed several
              projects like wscubetech.com. Many students get easy job
              placements due to their online Projects on the IIP Academy. We are
              only institute in Jodhpur which provides free Web Hosting to our
              students on our servers.
            </p>
            <p>
              Engineering & MCA students can develop any small minor projects in
              .NET or PHP and could extend as their Major Projects in further
              years.
            </p>
            <p>
              Minor Projects are really not hard to develop, as also the
              colleges generally are not strict in accepting the minor
              projects.Minor Projects can be small but it must be remarkable.
              Because details of Minor Projects are required to put in your
              Resume. And students with good minor projects can be easily placed
              in good companies during Campus Placements.
            </p>
            <p>
              IIP Academy Provides 45 Days Industrial Training for Engineering
              (B.E. / B.TECH.) Students
            </p>
          </div>
          <h2 className="text-2xl px-4 font-bold mt-5">Why IIP Adacemy</h2>

          <ol className="px-4 list-decimal list-inside mb-15 text-[20px] ">
            <li>Live industrial projects</li>
            <li>Expert Developers</li>
            <li>Placement assistance.</li>
            <li>100% Practical</li>
            <li>Interview preparation sessions.</li>
          </ol>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

