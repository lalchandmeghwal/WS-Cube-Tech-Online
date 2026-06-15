
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from './Footer';

import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {


    const [mobileMenu, setMobileMenu] = useState(false)
    const [search, setSearch] = useState(true)



    return (
        <>

            <header className=' flex justify-between max-w-full gap-15 px-5 bg-[#FFFFFF] z-50 sticky top-0 shadow  py-5 pb-0 '>

                <div className='flex justify-between items-center  max-[850px]:gap-3 gap-15  ' >
                    <span onClick={() => setMobileMenu(true)} className='max-[850px]:block hidden text-3xl cursor-pointer' ><AiOutlineMenu /> </span>

                    <NavLink to={'/'}>
                        <figure className='w-10  '>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-icon-svg-download-png-2249158.png" alt="" />
                        </figure>
                    </NavLink>

                    <nav>
                        <ul className='flex max-[850px]:hidden items-center     justify-between    font-bold '>



                            <li className='group   p-5 px-2 border-transparent  border-b-3 hover:border-red-500  ' >
                                <NavLink to={'/man'}> Man</NavLink>

                                <div className=' hidden  group-hover:block left-[5%] top-full absolute  w-[80%]  bg-white shadow-lg p-10  ' >

                                    <div className=' flex justify-between ' >
                                        <ul className=' font-normal   p-4 w-full  ' >
                                            <li className=' font-semibold text-red-500 mb-1 ' >Topwear</li>
                                            <li><a className='hover:font-semibold ' href="#">T-Shirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Casual Shirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Formal Shirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sweatshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sweaters</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Jackets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Blazers & Coats</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Suits</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Rain Jackets</a></li>

                                            <li className=' font-semibold text-red-500 mt-2 ' >Indian & Festive Wear</li>

                                            <li><a className='hover:font-semibold ' href="#">Kurtas & Kurta Sets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sherwanis</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Nehru Jackets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Dhotis</a></li>
                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfce6]  w-full p-4  ' >
                                            <li className=' font-semibold text-red-500 mb-1 ' >Bottomwear</li>
                                            <li><a className='hover:font-semibold ' href="#">Jeans</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Casual Trousers</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Formal Trousers</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shorts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Track Pants & Joggers</a></li>




                                            <li className=' font-semibold text-red-500 mt-2 ' >  Innerwear & Sleepwear</li>


                                            <li><a className='hover:font-semibold ' href="#"> Briefs & Trunks</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Boxers</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Vests</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sleepwear & Loungewear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Thermals</a></li>
                                            <li className=' font-semibold text-red-500 mt-2 ' > Plus Size</li>

                                        </ul>

                                        <ul className=' font-normal  w-full  p-4 ' >
                                            <li className=' font-semibold text-red-500 mb-1 ' > Footwear</li>

                                            <li><a className='hover:font-semibold ' href="#">Casual Shoes</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports Shoes</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Formal Shoes</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sneakers</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sandals & Floaters</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Flip Flops</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Socks</a></li>
                                            <li className=' font-semibold text-red-500 mb-1 ' >Personal Care & Grooming</li>
                                            <li className=' font-semibold text-red-500 mb-1 ' >Sunglasses & Frames</li>
                                            <li className=' font-semibold text-red-500 mb-1 ' > Watches</li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfc]  w-full p-4 ' >

                                            <li className=' font-semibold text-red-500 mb-1 ' >Sports & Active Wear </li>
                                            <li><a className='hover:font-semibold ' href="#"> Sports Shoes</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports Sandals</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Active T-Shirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Track Pants & Shorts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tracksuits</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jackets & Sweatshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports Accessories</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Swimwear</a></li>
                                            <li className=' font-semibold text-red-500 mb-1 ' >Gadgets </li>
                                            <li><a className='hover:font-semibold ' href="#">Smart Wearables</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Fitness Gadgets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Headphones</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Speakers</a></li>
                                        </ul>

                                        <ul className=' font-normal w-full p-4   ' >

                                            <li className=' font-semibold text-red-500 mb-1 ' >Fashion Accessories </li>
                                            <li><a className='hover:font-semibold ' href="#"> Wallets  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Belts  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Perfumes & Body Mists  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Trimmers  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Deodorants  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Ties, Cufflinks & Pocket Squares  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Accessory Gift Sets  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Caps & Hats  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Mufflers, Scarves & Gloves  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Phone Cases  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Rings & Wristwear </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Helmets  </a></li>
                                            <li className=' font-semibold text-red-500 mb-1 ' > Bags & Backpacks </li>
                                            <li className=' font-semibold text-red-500 mb-1 ' >Luggages & Trolleys </li>

                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className='group   p-5 px-2 border-transparent  border-b-3 hover:border-[#f41cb2]  ' >
                                <NavLink to={'/women'}>Women</NavLink>

                                <div className=' hidden  group-hover:block left-[5%] top-full absolute  w-[80%]  bg-white shadow-lg p-10  ' >

                                    <div className=' flex justify-between ' >

                                        <ul className=' font-normal   p-4 w-full  ' >
                                            <li className=' font-semibold text-[#f207ac] mb-1 ' >Indian & Fusion Wear</li>

                                            <li><a className='hover:font-semibold ' href="#">Kurtas & Suits</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Kurtis, Tunics & Tops</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sarees</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Ethnic Wear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Leggings, Salwars & Churidars</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Skirts & Palazzos</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Dress Materials</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Lehenga Cholis</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Dupattas & Shawls</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jackets</a></li>

                                            <li className=' font-semibold text-[#f207ac]  my-4 ' >Belts, Scarves & More</li>
                                            <li className=' font-semibold text-[#f207ac]   my-2 ' >Watches & Wearables</li>
                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfce6]  w-full p-4  ' >
                                            <li className=' font-semibold text-[#f207ac] mb-1 ' >Western Wear</li>
                                            <li><a className='hover:font-semibold ' href="#">Dresses</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tops</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Tshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Jeans</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Trousers & Capris</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shorts & Skirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Co-ords</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Playsuits</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jumpsuits</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shrugs</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sweaters & Sweatshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jackets & Coats</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Blazers & Waistcoats</a></li>

                                            <li className=' font-semibold text-[#f207ac] mt-2 ' >Plus Size  </li>
                                        </ul>

                                        <ul className=' font-normal  w-full  p-4 ' >
                                            <li className=' font-semibold text-[#f207ac] mb-3 ' >Maternity </li>
                                            <li className=' font-semibold text-[#f207ac] mb-3 ' >Sunglasses & Frames </li>
                                            <li className=' font-semibold text-[#f207ac] mb-1 ' >Footwear </li>

                                            <li><a className='hover:font-semibold ' href="#"> Flats</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Casual Shoes</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Heels</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Boots</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sports Shoes & Floaters</a></li>


                                            <li className=' font-semibold text-[#f207ac] mb-1 mt-4 ' >Sports & Active Wear </li>
                                            <li><a className='hover:font-semibold ' href="#">Clothing</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Footwear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports Accessories</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sports Equipment</a></li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfc]  w-full p-4 ' >

                                            <li className=' font-semibold text-[#f207ac] mb-1 ' >Lingerie & Sleepwear </li>

                                            <li><a className='hover:font-semibold ' href="#"> Bra  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Briefs  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shapewear  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sleepwear & Loungewear  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Swimwear  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Camisoles & Thermals  </a></li>

                                            <li className=' font-semibold text-[#f207ac] mb-1 mt-3 ' >Beauty & Personal Care </li>
                                            <li><a className='hover:font-semibold ' href="#">Makeup  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Skincare  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Premium Beauty  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Lipsticks  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Fragrances  </a></li>

                                        </ul>

                                        <ul className=' font-normal w-full p-4   ' >

                                            <li className=' font-semibold text-[#f207ac] mb-1 ' >Gadgets </li>
                                            <li><a className='hover:font-semibold ' href="#">Smart Wearables </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Fitness Gadgets </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Headphones </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Speakers </a></li>

                                            <li className=' font-semibold text-[#f207ac] mb-1 ' >Jewellery </li>
                                            <li><a className='hover:font-semibold ' href="#"> Fashion Jewellery </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Fine Jewellery </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Earrings </a></li>

                                            <li className=' font-semibold text-[#f207ac]  my-3 ' > Backpacks </li>
                                            <li className=' font-semibold text-[#f207ac]  my-3 ' >Handbags, Bags & Wallets </li>
                                            <li className=' font-semibold text-[#f207ac]  my-3 ' >Luggages & Trolleys </li>




                                        </ul>

                                    </div>
                                </div>
                            </li>

                            <li className='group   p-5 px-2 border-transparent  border-b-3 hover:border-orange-400  ' >
                                <NavLink to={'/kids'}>Kids</NavLink>

                                <div className=' hidden  group-hover:block left-[5%] top-full absolute  w-[80%]  bg-white shadow-lg p-10  ' >

                                    <div className=' flex justify-between ' >

                                        <ul className=' font-normal   p-4 w-full  ' >
                                            <li className=' font-semibold text-orange-400 mb-1 ' >Boys Clothing</li>

                                            <li><a className='hover:font-semibold ' href="#">T-Shirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shorts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jeans</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Trousers</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Clothing Sets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Ethnic Wear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Track Pants & Pyjamas</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jacket, Sweater & Sweatshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Party Wear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Innerwear & Thermals</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Nightwear & Loungewear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Value Packs</a></li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfce6]  w-full p-4  ' >
                                            <li className=' font-semibold text-orange-400 mb-1 ' >Girls Clothing</li>
                                            <li><a className='hover:font-semibold ' href="#">Dresses</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tops</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Clothing Sets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Lehenga choli</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Kurta Sets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Party wear</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Dungarees & Jumpsuits</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Skirts & shorts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tights & Leggings</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Jeans, Trousers & Capris</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jacket, Sweater & Sweatshirts</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Innerwear & Thermals</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Nightwear & Loungewear</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Value Packs</a></li>

                                        </ul>

                                        <ul className=' font-normal  w-full  p-4 ' >
                                            <li className=' font-semibold text-orange-400 mb-3 ' >Footwear</li>
                                            <li><a className='hover:font-semibold ' href="#">Casual Shoes </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Flipflops </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports Shoes </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Flats </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sandals </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Heels </a></li>
                                            <li><a className='hover:font-semibold ' href="#">School Shoes </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Socks </a></li>

                                            <li className=' font-semibold text-orange-400 mb-1 mt-4 ' >Toys & Games</li>
                                            <li><a className='hover:font-semibold ' href="#">Learning & Development </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Activity Toys </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Soft Toys </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Action Figure / Play set </a></li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfc]  w-full p-4 ' >

                                            <li className=' font-semibold text-orange-400 mb-1 ' >Infants  </li>

                                            <li><a className='hover:font-semibold ' href="#">Bodysuits   </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Rompers & Sleepsuits   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Clothing Sets   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tshirts & Tops   </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Dresses   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">   Bottom wear   </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Winter Wear   </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Innerwear & Sleepwear   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Infant Care   </a></li>

                                            <li className=' font-semibold text-orange-400 my-4 mt-7 ' >Home & Bath </li>
                                            <li className=' font-semibold text-orange-400  ' > Personal Care </li>
                                        </ul>

                                        <ul className=' font-normal w-full p-4   ' >

                                            <li className=' font-semibold text-orange-400 mb-1 ' >  Kids Accessories</li>
                                            <li><a className='hover:font-semibold ' href="#">Bags & Backpacks </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Watches </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jewellery & Hair accessory </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sunglasses </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Masks & Protective Gears </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Caps & Hats </a></li>

                                            <li className=' font-semibold text-orange-400 mb-1 ' > Brands</li>
                                            <li><a className='hover:font-semibold ' href="#">H&M </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Max Kids </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Pantaloons </a></li>
                                            <li><a className='hover:font-semibold ' href="#">United Colors Of Benetton Kids </a></li>
                                            <li><a className='hover:font-semibold ' href="#">YK </a></li>
                                            <li><a className='hover:font-semibold ' href="#">   U.S. Polo Assn. Kids </a></li>
                                            <li><a className='hover:font-semibold ' href="#">   Mothercare </a></li>
                                            <li><a className='hover:font-semibold ' href="#">HRX </a></li>

                                        </ul>

                                    </div>

                                </div>
                            </li>

                            <li className='group   p-5 px-2 border-transparent  border-b-3 hover:border-[#f2c210]  ' >
                                <NavLink to={'/home-menu'}>Home</NavLink>

                                <div className=' hidden  group-hover:block left-[5%] top-full absolute  w-[80%]  bg-white shadow-lg p-10  ' >

                                    <div className=' flex justify-between ' >

                                        <ul className=' font-normal   p-4 w-full  ' >
                                            <li className=' font-semibold text-[#f2c210] mb-1 ' >Bed Linen & Furnishing</li>

                                            <li><a className='hover:font-semibold ' href="#">   Bed Runners</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Mattress Protectors</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Bedsheets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Bedding Sets</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Blankets, Quilts & Dohars</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Pillows & Pillow Covers</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Bed Covers</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Diwan Sets</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Chair Pads & Covers</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sofa Covers</a></li>

                                            <li className=' font-semibold text-[#f2c210] mt-3 mb-1 ' >Flooring</li>
                                            <li><a className='hover:font-semibold ' href="#">Floor Runners</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Carpets</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Floor Mats & Dhurries</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Door Mats</a></li>
                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfce6]  w-full p-4  ' >
                                            <li className=' font-semibold text-[#f2c210] mb-1 ' >  Bath</li>
                                            <li><a className='hover:font-semibold ' href="#"> Bath Towels</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Hand & Face Towels</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Beach Towels</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Towels Set</a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Bath Rugs</a></li>
                                            <li><a className='hover:font-semibold ' href="#">   Bath Robes</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Bathroom Accessories</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Shower Curtains</a></li>

                                            <li className=' font-semibold text-[#f2c210] mb-1 mt-2 ' >Lamps & Lighting</li>
                                            <li><a className='hover:font-semibold ' href="#">Floor Lamps</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Ceiling Lamps</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Table Lamps</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Wall Lamps</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Outdoor Lamps</a></li>
                                            <li><a className='hover:font-semibold ' href="#">String Lights</a></li>

                                        </ul>


                                        <ul className=' font-normal  w-full  p-4 ' >
                                            <li className=' font-semibold text-[#f2c210] mb-3 ' >Home Décor </li>
                                            <li><a className='hover:font-semibold ' href="#"> Plants & Planters  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Aromas & Candles </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Clocks  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">    Mirrors  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Wall Décor  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Festive Decor  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Pooja Essentials  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Wall Shelves  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Fountains  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Showpieces & Vases  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Ottoman  </a></li>

                                            <li className=' font-semibold text-[#f2c210] mb-1 mt-4 ' >Cushions & Cushion Covers</li>
                                            <li className=' font-semibold text-[#f2c210] mb-1 mt-4 ' >Curtains</li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfc]  w-full p-4 ' >

                                            <li className=' font-semibold text-[#f2c210] mb-3 ' >Furniture  </li>
                                            <li className=' font-semibold text-[#f2c210] mb-3 ' > Home Gift Sets  </li>
                                            <li className=' font-semibold text-[#f2c210] mb-3 ' >Kitchen & Table  </li>

                                            <li><a className='hover:font-semibold ' href="#">Table Runners   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Dinnerware & Serveware   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Cups and Mugs  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Bakeware & Cookware   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Kitchen Storage & Tools   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Bar & Drinkware   </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Table Covers & Furnishings   </a></li>
                                        </ul>

                                        <ul className=' font-normal w-full p-4   ' >

                                            <li className=' font-semibold text-[#f2c210] mb-1 ' > Storage  </li>
                                            <li><a className='hover:font-semibold ' href="#"> Bins </a></li>
                                            <li><a className='hover:font-semibold ' href="#">   Hangers </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Organisers </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Hooks & Holders </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Laundry Bags </a></li>

                                        </ul>

                                    </div>

                                </div>
                            </li>

                            <li className='group   p-5 px-2 border-transparent  border-b-3 hover:border-[#0db7af]  ' >
                                <a href="">Beauty</a>

                                <div className=' hidden   group-hover:block left-[5%] top-full absolute  w-[80%]  bg-white shadow-lg p-10  ' >

                                    <div className=' flex justify-between ' >

                                        <ul className=' font-normal   p-4 w-full  ' >
                                            <li className=' font-semibold text-[#0db7af] mb-1 ' >  Makeup</li>

                                            <li><a className='hover:font-semibold ' href="#"> Lipstick</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Lip Gloss</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Lip Liner</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Mascara</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Eyeliner</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Kajal</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Eyeshadow</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Foundation</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Primer</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Concealer</a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Compact</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Nail Polish</a></li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfce6]  w-full p-4  ' >
                                            <li className=' font-semibold text-[#0db7af] mb-1 ' > Skincare, Bath & Body  </li>
                                            <li><a className='hover:font-semibold ' href="#">Face Moisturiser  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Cleanser  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Masks & Peel  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sunscreen  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Serum  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Face Wash  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Eye Cream  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Lip Balm  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Body Lotion  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Body Wash  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Body Scrub  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Hand Cream  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-1 mt-2 ' > Baby Care</li>
                                            <li className=' font-semibold text-[#0db7af] mb-1 mt-2 ' >Masks</li>

                                        </ul>


                                        <ul className=' font-normal  w-full  p-4 ' >
                                            <li className=' font-semibold text-[#0db7af] mb-3 ' >  Haircare </li>
                                            <li><a className='hover:font-semibold ' href="#">Shampoo</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Conditioner</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Hair Cream</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Hair Oil</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Hair Gel</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Hair Color</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Hair Serum</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Hair Accessory</a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-1 mt-4 ' >Fragrances</li>
                                            <li><a className='hover:font-semibold ' href="#">Perfume</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Deodorant</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Body Mist</a></li>

                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfc]  w-full p-4 ' >

                                            <li className=' font-semibold text-[#0db7af] mb-3 ' >Appliances  </li>
                                            <li><a className='hover:font-semibold ' href="#"> Hair Straightener  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Hair Dryer  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Epilator  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-3 ' > Men's Grooming  </li>
                                            <li><a className='hover:font-semibold ' href="#">Trimmers  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Beard Oil  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">  Hair Wax  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-3 ' >Beauty Gift & Makeup Set  </li>
                                            <li><a className='hover:font-semibold ' href="#">Beauty Gift  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Makeup Kit  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-3 mt-4 ' >Premium Beauty  </li>
                                            <li className=' font-semibold text-[#0db7af] mb-3 ' >Wellness & Hygiene  </li>

                                        </ul>

                                        <ul className=' font-normal w-full p-4   ' >

                                            <li className=' font-semibold text-[#0db7af] mb-1 ' >Top Brands  </li>
                                            <li><a className='hover:font-semibold ' href="#">Lakme  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Maybelline  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">LOreal  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Philips  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Bath & Body Works  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">THE BODY SHOP  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Biotique  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Mamaearth  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">MCaffeine  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Nivea  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Lotus Herbals  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">LOreal Professionnel  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">KAMA AYURVEDA  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">M.A.C  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Forest Essentials  </a></li>

                                        </ul>

                                    </div>

                                </div>
                            </li>

                            <li className='group   p-5 px-2 border-transparent  border-b-3 hover:border-[#0db7af]  ' >
                                <NavLink to={'/genz'}>Genz</NavLink>
                                <div className=' hidden   group-hover:block left-[5%] top-full absolute  w-[80%]  bg-white shadow-lg p-10  ' >

                                    <div className=' flex justify-between ' >

                                        <ul className=' font-normal   p-4 w-full  ' >
                                            <li className=' font-semibold text-[#0db7af] mb-1 ' >Women's Western Wear  </li>

                                            <li><a className='hover:font-semibold ' href="#">Dresses Under ₹599 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Tops Under ₹399 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jeans Under ₹599 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Trousers Under ₹699 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">T-shirts Under ₹299 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shirts Under ₹499 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Skirts Under ₹499 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shorts Under ₹699 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Co-ords Under ₹799 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jumpsuits Under ₹899 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Track pants Under ₹699 </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jackets Under ₹899 </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sweatshirts Under ₹699 </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sweaters Under ₹899 </a></li>











                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfce6]  w-full p-4  ' >

                                            <li className=' font-semibold text-[#0db7af] mb-1 ' >Women's Ethnic Wear   </li>
                                            <li><a className='hover:font-semibold ' href="#">Kurtas Under ₹399  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Kurtis Under ₹499  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Kurta sets Under ₹499  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Ethnic Dresses Under ₹999  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Palazzos Under ₹799  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-1 ' >Lingerie & Loungewear   </li>
                                            <li><a className='hover:font-semibold ' href="#">Bras Under ₹399  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Night suits Under ₹799  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Nightdresses Under ₹999  </a></li>

                                            <li><a className='hover:font-semibold ' href="#">Lounge pants Under ₹999  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Briefs Under ₹599  </a></li>

                                        </ul>


                                        <ul className=' font-normal  w-full  p-4 ' >

                                            <li className=' font-semibold text-[#0db7af] mb-2 ' >  Men's Casual Wear </li>
                                            <li><a className='hover:font-semibold ' href="#">T-shirts Under ₹299</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shirts Under ₹499</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jeans Under ₹599</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Trousers Under ₹699</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Shorts Under ₹599</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Track pants Under ₹699</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Jackets Under ₹899</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Sweatshirts Under ₹699</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sweaters Under ₹999</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Co-ords Under ₹999</a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-1 mt-3 ' >Men's Occassion Wear </li>
                                            <li><a className='hover:font-semibold ' href="#">Kurtas Under ₹799</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Kurta Sets Under ₹999</a></li>


                                        </ul>

                                        <ul className=' font-normal bg-[#fafbfc]  w-full p-4 ' >

                                            <li className=' font-semibold text-[#0db7af] mb-2 ' > Women's Footwear  </li>
                                            <li><a className='hover:font-semibold ' href="#">Heels Under ₹599</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Flats Under ₹499</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Casual shoes Under ₹699</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports shoes Under ₹999</a></li>
                                            <li><a className='hover:font-semibold ' href="#">Flip flops Under ₹799</a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Boots Under ₹999  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Ballerinas Under ₹799  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-3 ' >  Men's Footwear </li>
                                            <li><a className='hover:font-semibold ' href="#">Casual shoes Under ₹799  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sports shoes Under ₹999  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Formal shoes Under ₹999  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sandals Under ₹799  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Flip flops Under ₹499  </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Boots Under ₹999  </a></li>


                                        </ul>

                                        <ul className=' font-normal w-full p-4   ' >

                                            <li className=' font-semibold text-[#0db7af] mb-2 ' > Beauty & Grooming  </li>
                                            <li><a className='hover:font-semibold ' href="#"> Skincare Under ₹299 </a></li>
                                            <li><a className='hover:font-semibold ' href="#"> Haircare Under ₹399  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Bath & Body Under ₹399  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">MakeUp Under ₹299  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Fragrances Under ₹399  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Appliances Under ₹999  </a></li>

                                            <li className=' font-semibold text-[#0db7af] mb-2 mt-3 ' >Accessories  </li>
                                            <li><a className='hover:font-semibold ' href="#">Jewellery Under ₹299  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Handbags Under ₹499  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Clutches Under ₹999  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Backpacks Under ₹699  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Wallets Under ₹499  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Sunglasses Under ₹699  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Belts Under ₹799  </a></li>
                                            <li><a className='hover:font-semibold ' href="#">Caps Under ₹899  </a></li>



                                        </ul>

                                    </div>

                                </div>
                            </li>

                            <li className='group    p-5 px-2 border-transparent  border-b-3 hover:border-red-500 ' >
                                <a className='  relative   ' href="">Studio  <span className='absolute -top-2 -right-8 text-sm  text-red-500   ' >NEW</span> </a>

                                <div className=' hidden   group-hover:block left-0 h-screen top-full absolute  w-full  bg-[rgb(237,229,229,0.5)] shadow-lg   ' >
                                    <div className=' text-center w-150 ml-50  bg-white p-5 ' >
                                        <h3 className=' text-3xl font-medium ' >Studio</h3>
                                        <p className=' font-normal text-xl my-5 ' >Your daily inspiration for everything fashion</p>
                                        <img src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" alt="" />
                                        <div className=' text-center ' >
                                            <button className=' my-5 font-semibold cursor-pointer text-gray-700 px-4 py-2 rounded-sm border-gray-400  border ' >EXPLORE STUDIO</button>
                                        </div>
                                    </div>


                                </div>
                            </li>

                        </ul>
                    </nav>

                    {/* mobile Menu */}

                    <nav className={` ${mobileMenu ? "left-0 " : "-left-50"}  flex  flex-col top-0  transition-all duration-700  w-30 pt-10  bg-white shadow-lg min-[850px]:hidden    items-center h-screen   absolute gap-5  font-bold `}>
                        <span onClick={() => setMobileMenu(!mobileMenu)} className=' text-4xl cursor-pointer  ml-15 '> <IoClose /> </span>
                        <NavLink to={'/man'}> Man</NavLink>
                        <NavLink to={'/women'}>Women</NavLink>
                        <NavLink to={'/kids'}>Kids</NavLink>
                        <NavLink to={'/home-menu'}>Home</NavLink>

                        <a href="">Beauty</a>
                        <NavLink to={'/genz'}>Genz</NavLink>
                        <a className='group    ' href="">Studio </a>

                    </nav>


                </div>


                <div className='flex flex-1  max-[1050px]:justify-end gap-4  justify-between    items-center  ' >


                    <div className='items-center text-lg max-[1050px]:w-10 max-[1050px]:cursor-pointer   gap-2 p-2 rounded-md max-[1090px]:w-70 max-[1150px]:w-80  max-[1280px]:w-100 w-150 border border-gray-200 flex'>
                        <IoSearch onClick={() => setSearch(!search)} className='text-xl' />
                        <input className='w-full focus:outline-0 max-[1050px]:hidden  ' type="search" placeholder="Search for products, brands and more" />
                    </div>

                    <div className={` ${search ? " hidden " : 'max-[1050px]:flex'} min-[1050px]:hidden  items-center w-full text-lg  left-0    bg-white  absolute     gap-2 p-2 rounded-md border border-gray-200 `}>

                        <input className='w-full focus:outline-0  p-2  ' type="search" placeholder="Search for products, brands and more" />
                        <IoClose onClick={() => setSearch(!search)} className='text-4xl cursor-pointer  ' />
                    </div>





                    <div className='flex gap-3   justify-between  '>

                        <div className='flex flex-col items-center cursor-pointer '>
                            <FaRegUser className='text-lg font-semibold ' />
                            <h2 className='font-semibold max-[820px]:hidden text-[15px] '>Profile</h2>

                        </div>
                        <div className='flex flex-col cursor-pointer items-center '>
                            <FaRegHeart className='text-lg font-semibold ' />
                            <h2 className='font-semibold max-[820px]:hidden  text-[15px] '>Wishlist </h2>

                        </div>
                        <div className='flex flex-col items-center cursor-pointer '>
                            <SlHandbag className='text-lg font-semibold ' />
                            <h2 className='font-semibold  max-[820px]:hidden  text-[15px] '>Bag  </h2>

                        </div>
                    </div>

                </div>



            </header>

            <Outlet />

            <Footer />



        </>
    )
}

export default Header







