import React from 'react';
import { GrYoga } from "react-icons/gr";
import { PiStarAndCrescentFill } from "react-icons/pi";
import { GrFavorite,GrAid } from "react-icons/gr";

const Navber = () => {
    return (
        <div>
            {/**Top navber section*/}
            <div className='flex justify-between items-center bg-slate-200 px-14'>
                <div className='flex items-center gap-6'>
                    <GrYoga className='text-2xl' />
                    <PiStarAndCrescentFill className='text-2xl' />
                </div>
                <div className='flex items-center'>
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Find a Store</a></li>
                        {/**help link */}
                        <li>
                            <details>
                                <summary>Help</summary>
                                <ul className="bg-base-100 rounded-t-none w-48 p-3">
                                    <h4 className='font-semibold'>Help</h4>
                                    <li><a>Order Status</a></li>
                                    <li><a>Shipping & Delivery</a></li>
                                    <li><a>Returns</a></li>
                                    <li><a>Contact us</a></li>
                                    <li><a>Membership</a></li>
                                    <li><a>About us</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Join us</a></li>
                        <li><a>Sign In</a></li>
                    </ul>
                </div>
            </div>
            {/**main link navber section */}
            <div className='flex justify-between items-center px-14 py-2 bg-[#ffff]'>
                {/**nike logo */}
                <img src="../../../../public/img/_1512076803_93_Nike-mobile.jpg" alt=""  className='w-16'/>
                {/**nike middle link */}
                <div >
                    <ul className='flex items-center gap-8 text-lg  font-bold'>
                        <li>New & Featured </li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Jordan</li>
                    </ul>
                </div>
                {/**navber last link */}
                <div className='flex items-center gap-5'>
                    <label className=" flex border-2 rounded p-1 bg-[#faf7f7] items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="text" className=" border-none " placeholder="Search ..." />
                    </label>
                    <li className='list-none'><GrFavorite className='text-xl'/></li>
                    <li className='list-none'><GrAid className='text-xl'/></li>
                </div>
            </div>
        </div>
    );
};

export default Navber;