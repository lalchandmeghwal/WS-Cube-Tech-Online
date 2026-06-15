import React from 'react'
import { LuBox } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa6";

const About = () => {

  console.log('object')
  return (
    <div >


      <div className='  max-w-317  mx-auto  ' >

        <div className=' my-20  gap-5  grid md:grid-cols-2 ' >

          <div className='  sm:p-10 p-5 ' >
            <h2 className=' lg:text-6xl sm:text-4xl text-4xl font-bold ' >Useful Tools to<br className=' lg:hidden' /><span className='  text-[#4f39f6] ' >Help You Build Faster.</span> </h2>
            <p className=' my-5 text-[#6a7282] text-[21px] ' >It's never been easier to build beautiful websites that convey your message and tell your story.</p>

            <div className=' flex sm:flex-row flex-col  gap-5 ' >
              <button className=' bg-[#4f39f6]  text-start rounded-[7px] text-white  text-lg px-4 py-2 ' >Try It Free</button>
              <button className=' bg-[#f3f4f6] text-start rounded text-black  text-lg px-4 py-2 ' >Learn More</button>
            </div>
          </div>

          <div className='   sm:p-10 p-5 ' >
            <img className=' rounded-2xl' src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
          </div>

        </div>

        <div className='   max-w-250 mx-auto  my-20 items-center  gap-5 md:p-0 p-5 flex justify-between sm:flex-row  flex-col-reverse    '  >

          <div>
            <img className=' max-w-100 ' src="https://cdn.devdojo.com/images/december2020/productivity.png" alt="" />
          </div>
          <div>

            <h4 className=' text-2xl font-semibold my-4 ' >Boost Productivity</h4>
            <p className=' text-lg ' >Build an atmosphere that creates productivity in your organization and your company culture.</p>
            <ul className=' my-3  '  >
              <li className=' my-2' ><span className="text-sm p-1 px-2 rounded-full text-white bg-[#fece2f] font-bold mr-2 ">✓</span>  Maximize productivity and growth </li>
              <li className=' my-2' ><span className="text-sm p-1 px-2 rounded-full text-white bg-[#fece2f] font-bold mr-2 ">✓</span>     Speed past your competition </li>
              <li className=' my-2' ><span className="text-sm p-1 px-2 rounded-full text-white bg-[#fece2f] font-bold mr-2 ">✓</span>   Learn the top techniques </li>

            </ul>
          </div>

        </div>

        <div className='   max-w-250 mx-auto  my-20 items-center  gap-5 md:p-0 p-5 flex justify-betwee sm:flex-row  flex-col   '  >


          <div>
            <h4 className=' text-2xl font-semibold my-4 ' >Boost Productivity</h4>
            <p className=' text-lg ' >Build an atmosphere that creates productivity in your organization and your company culture.</p>
            <ul className=' my-3  '  >
              <li className=' my-2' ><span className="text-sm p-1 px-2 rounded-full text-white bg-[#fece2f] font-bold mr-2 ">✓</span>  Maximize productivity and growth </li>
              <li className=' my-2' ><span className="text-sm p-1 px-2 rounded-full text-white bg-[#fece2f] font-bold mr-2 ">✓</span>     Speed past your competition </li>
              <li className=' my-2' ><span className="text-sm p-1 px-2 rounded-full text-white bg-[#fece2f] font-bold mr-2 ">✓</span>   Learn the top techniques </li>

            </ul>
          </div>
          <div>
            <img className=' max-w-100 ' src="https://cdn.devdojo.com/images/december2020/settings.png" alt="" />
          </div>
        </div>

      </div>


      <div className=' bg-[#f9fafb] sm:p-10 ' >

        <div className='   max-w-250 mx-auto   my-20 items-center  gap-5 md:p-0 p-5 flex justify-betwee lg:flex-row  flex-col-reverse   '  >


          <div>
            <h4 className=' text-2xl font-semibold my-4 ' >Jam-packed with all the tools you need to succeed!</h4>
            <p className=' text-lg font-semibold text-[#99a1af] my-3 ' >It's never been easier to build a business of your own. Our tools will help you with the following:</p>
            <ul className=' my-3  '  >
              <li className=' my-2  flex items-center gap-2    ' > <span className=' text-2xl text-[#f6339a]  ' > < FaVectorSquare />  </span> Faster Processing and Delivery  </li>
              <li className=' my-2 flex items-center gap-2  ' > <span className=' text-2xl text-[#f0b100]  ' > <LuBox /> </span> Out of the Box Tracking and Monitoring  </li>
              <li className=' my-2 flex items-center gap-2  ' > <span className=' text-2xl text-[#00c950]  ' > <IoShieldCheckmarkOutline /> </span>  100% Protection and Security for Your App </li>

            </ul>
          </div>
          <div>
            <img className=' max-w-100 ' src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="" />
          </div>
        </div>
      </div>


      <div className=' text-center  lg:my-20 sm:my-10 my-5  ' >
        <h3 className='  sm:text-2xl text-lg uppercase font-semibold text-[#ad46ff] ' >Don't just take our word for it</h3>
        <h2 className=' mb-5  sm:text-5xl text-3xl font-bold ' >See what others are saying</h2>

        <div className=' mx-auto h-0.5 w-full max-w-150 bg-[#f3e8ff] ' ></div>


      </div>


      <div className=' ' >
        <div>

        </div>

      </div>

      <div className='  max-w-317 mx-auto gap-y-5 gap-5 grid md:grid-cols-3 md:p-0 p-5    ' >
        <div className=' md:shadow-none shadow-[0_0_10px] shadow-olive-100  p-5 ' >
          <div className=' flex items-center gap-4  ' >
            <img className=' w-17 rounded-full  ' src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" alt="" />

            <div>
              <h3 className=' text-xl font-semibold  ' >John Doe</h3>
              <p className=' text-[#4a5565] ' >CEO of Something</p>


            </div>
          </div>
          <p className='text-[#6a7282] text-lg my-4' >"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</p>

        </div>

        <div className=' md:shadow-none shadow-[0_0_10px] shadow-olive-100  p-5  md:border-l border-r border-[#f3e8ff]   ' >
          <div className=' flex items-center gap-4  ' >
            <img className=' h-17 object-cover w-17 rounded-full  ' src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80" alt="" />

            <div>
              <h3 className=' text-xl font-semibold  ' > Jane Doe</h3>
              <p className=' text-[#4a5565] ' >CTO of Business</p>



            </div>
          </div>
          <p className=' text-[#6a7282] text-lg my-4' >"Thanks for creating this service. My life is so much easier. Thanks for making such a great product."</p>

        </div>

        <div className='  md:shadow-none shadow-[0_0_10px] shadow-olive-100  p-5 ' >
          <div className=' flex items-center gap-4  ' >
            <img className=' h-17 object-cover w-17 rounded-full  ' src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80" alt="" />

            <div>
              <h3 className=' text-xl font-semibold  ' > John Smith</h3>
              <p className=' text-[#4a5565] ' >Creator of Stuff</p>
            </div>
          </div>
          <p className=' text-[#6a7282] text-lg my-4' >"Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."</p>

        </div>


      </div>

      <div className=' text-center lg:my-20 md:my-10 my-5 ' >
        <h2 className=' md:text-5xl text-3xl font-semibold ' >Pricing Options</h2>
        <p className=' my-5 md:text-[20px] text-lg   tracking-[2px] ' >We've got a plan for companies of any size</p>
      </div>

      <div className='  lg:max-w-280 max-w-100 gap-5 rounded-xl border-b-4 border-gray-300 border  sm:mx-auto  grid lg:grid-cols-3 mx-4 ' >

        <div className=' flex  flex-col justify-center items-center p-10 text-center ' >
          <h2 className=' text-3xl font-bold my-2 ' >Basic</h2>
          <p>The basic plan is a good fit for smaller teams and startups</p>
          <div className=' flex items-center text-start text-sm justify-center gap-3 my-10 ' >
            <h2 className=' text-5xl font-semibold ' >$19</h2>
            <p>per user <br />per month</p>
          </div>


          <button className=' rounded-lg cursor-pointer hover:bg-[#155dfc] hover:text-white text-[#155dfc] border border-[#155dfc] w-full py-2 text-lg ' >Select Plan</button>
        </div>

        <div className=' bg-[#f3f4f6] border border-gray-300 flex  flex-col justify-center items-center p-10 text-center ' >
          <h2 className=' text-3xl font-bold my-2 ' >Plus</h2>
          <p>The plus plan is a good fit for medium-size to larger companies</p>
          <div className=' flex items-center text-start text-sm justify-center gap-3 my-10 ' >
            <h2 className=' text-5xl font-semibold ' >$39</h2>
            <p>per user <br />per month</p>
          </div>



          <button className=' rounded  cursor-pointer bg-[#155dfc] text-white  border-b-4 border-[#1447e6] w-full py-2 text-lg ' >Select Plan</button>
        </div>

        <div className=' flex  flex-col justify-center items-center p-10 text-center ' >
          <h2 className=' text-3xl font-bold my-2 ' >Pro</h2>
          <p>The pro plan is a good fit for larger and enterprise companies.</p>
          <div className=' flex items-center text-start text-sm justify-center gap-3 my-10 ' >
            <h2 className=' text-5xl font-semibold ' >$59</h2>
            <p>per user <br />per month</p>
          </div>


          <button className=' rounded-lg cursor-pointer hover:bg-[#155dfc] hover:text-white text-[#155dfc] border border-[#155dfc] w-full py-2 text-lg ' >Select Plan</button>
        </div>

      </div>




    </div>
  )
}

export default About
