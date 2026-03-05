import React, { useState } from 'react'
import butterfly from '../images/butterfly.png'
import foliage from '../images/foliage.png'
import treeFaq from '../images/treeFaq.png';
import Track from '../images/Track.png';
import Amphitheatre from '../images/Amphitheatre.png';
import Lawns from '../images/Lawns.png';



const Map = () => {
  const [showFaq, setShowFaq] = useState(0);
  const [FAQItm, setFAQsItm] = useState(0);

  const FAQsItms1 = [
    {
      id: 1,
      titile: 'KEY LOCATIONS',
      dis: ['Infosys Mohali', 'IT City Mohali', 'Aero City Mohali', 'Chandigarh Internatiol Airport', 'Amity University', 'Chitkara University', 'Plaksha University', 'CGC Landran', 'Manav Rachna International School']
    },
    {
      id: 2,
      titile: 'SCHOOLS',
      dis: ['Manav Rachna International School', 'Delhi Public School', 'Jain International School']
    },
    {
      id: 3,
      titile: 'HOSPITALS',
      dis: ['Neelam Hospital', 'Fortis Hospital Mohali', 'Civil Hospital Banur']
    },
  ];

  const FAQsItms2 = [
    {
      id: 1,
      title: 'Where is it located?',
      dis:'SMART CITY Plotted Development is located Off Main Road - South Mohali.'
    },
    {
      id: 2,
      title: 'How far is SMART CITY from Aero City ?',
      dis:'The project is just a 5 Mins Drive Away from the Aero City & IT City Mohali.'
    },
    {
      id: 3,
      title: 'How many Plot units are there?',
      dis:'SMART CITY offers 446 premium plots Near Aero City.'
    },
    {
      id: 4,
      title: 'What is the total land area?',
      dis:'The unique plotted development spans across 22 acres.'
    },
    {
      id: 5,
      title: 'What is the area of the plots?',
      dis:'The area of plots ranges from 80 Gaz To 150 Gaz'
    },
    {
      id: 6,
      title: 'Are the plots ready to register?',
      dis:'Yes, the plots are ready to register.'
    },
  ]

  return (
    <div>
      <iframe className='w-full mt-10 sm:mt-20 ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3435.200390542789!2d76.714807!3d30.571888000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc33f33088f15%3A0xf22939ccde55bb20!2sSmart%20city%20mohali!5e0!3m2!1sen!2sin!4v1771869748631!5m2!1sen!2sin" height="450" allowFullScreen="" loading="lazy" referreroplicy="no-referrer-when-downgrade"></iframe>

      <div className=' max-w-240 my-10 sm:my-20 m-auto ' >

        <h3 className=' text-center text-[#306598] tracking-widest    sm:text-3xl font-bold uppercase ' id='location'>IMPORTANT LANDMARKS</h3>

        {/* FAQs Items 1 */}
        <div className='p-5' >
        {
          FAQsItms1.map((items, i) => {
            return (
              <div key={i}>
                <h3
                  onClick={() => setShowFaq(items.id)}
                  className='py-5 px-3 text-lg cursor-pointer flex justify-between ' >{items.titile}
                  <span className='font-semibold '> {showFaq === items.id ? '➕' : '➖'} </span>
                </h3>
                <hr className='border' />
                <ul className={showFaq === items.id ? 'block my-5  ' : 'hidden'} >
                  {items.dis.map(dis => (
                    <li key={dis} className='mt-1' > {dis}</li>
                  )

                  )}

                </ul>


              </div>
            )
          })
        }
        </div>

        <h3 className=' text-center text-[#306598] tracking-widest  mt-10 sm:mt-20 mb-5 text-3xl font-bold uppercase ' >Amenities</h3>
        <p className=' text-center text-lg '>Your Dream Home Awaits you to Own Exquisite Site in the Smart City Mohali Project.</p>

        <div className='flex text-lg justify-center flex-wrap my-10 gap-9  '>

          <div className=' flex flex-col justify-center items-center' >
            <img src={foliage} alt="" />
            <p>Foliage Garden</p>

          </div>
          <div className=' flex flex-col justify-center items-center' >
            <img src={butterfly} alt="" />
            <p>Butterfly Garden</p>

          </div>
          <div className=' flex flex-col justify-center items-center' >
            <img src={treeFaq} alt="" />
            <p>Herb Garden</p>

          </div>
          <div className=' flex flex-col justify-center items-center' >
            <img src={Track} alt="" />
            <p>Walking Track</p>

          </div>

          <div className=' flex flex-col justify-center items-center' >
            <img src={Amphitheatre} alt="" />
            <p>Amphitheatre Style Seating</p>

          </div>
          <div className=' flex flex-col justify-center items-center' >
            <img src={Lawns} alt="" />
            <p>Lawns</p>

          </div>

        </div>




        <h3 className=' text-center text-[#306598] tracking-widest my-10 mt-10 sm:mt-20 mb-5 text-3xl font-bold uppercase ' >FAQs</h3>
        <p className=' p-5 text-center text-lg '>Your Dream Home Awaits you to Own Exquisite Site in the Smart City Mohali Project.</p>

        {/* FAQs Items 2 */}
        <div className=' p-5 '>

          {
            FAQsItms2.map((items, i) => {
              return (
                <div key={i}>
                  <h3
                    onClick={() => setFAQsItm(items.id)}
                    className='py-5 px-3 text-lg cursor-pointer flex justify-between ' >{items.title}
                    <span className='font-semibold '> {FAQItm === items.id ? '➕' : '➖'} </span>
                  </h3>
                  <hr className='border' />
                  <ul className={FAQItm === items.id ? 'block my-5  ' : 'hidden'} >
                    <li className='mt-1' > { items.dis} </li>

                  </ul>


                </div>
              )
            })
          }
        </div>



      </div>



    </div>
  )
}

export default Map
