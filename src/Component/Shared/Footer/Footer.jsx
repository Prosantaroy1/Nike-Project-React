import React from 'react';
import { AiFillDribbbleSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='lg:px-14 px-2 divide-solid divide-y-2 pt-10 pb-4 mt-4'>
            <hr className='text-xs '/>
            <footer className="grid sm:grid-cols-5 grid-cols-2 gap-4  bg-[#ffff] pt-16 pb-8 text-black p-10">
                <nav className='space-y-3 flex flex-col'>
                    <h6 className="footer-title pb-4">Resources</h6>
                    <a className="link no-underline ">Gift Cards</a>
                    <a className="link no-underline ">Fine a Store</a>
                    <a className="link no-underline ">Nike x NUB</a>
                    <a className="link no-underline ">Become a Member</a>
                    <a className="link no-underline ">Site Feedback</a>
                </nav>
                <nav className='space-y-3 flex flex-col'>
                    <h6 className="footer-title pb-4 ">Help</h6>
                    <a className="link no-underline ">Get Help</a>
                    <a className="link no-underline ">Contact</a>
                    <a className="link no-underline ">  Order Status </a>
                    <a className="link no-underline "> Shipping and Delivery</a>
                    <a className="link no-underline ">  Payment Options</a>
                    <a className="link no-underline "> Gift Card Balance</a>

                </nav>
                <nav className='space-y-3 flex flex-col'>
                    <h6 className="footer-title pb-4  ">Company</h6>
                    <a className="link no-underline ">About us</a>
                    <a className="link no-underline ">News</a>
                    <a className="link no-underline ">Careers</a>
                    <a className="link no-underline ">Investores</a>
                    <a className="link no-underline ">Purpose</a>
                </nav>
                <nav className='space-y-3 flex flex-col'>
                    <h6 className="footer-title pb-4">Promotions & Discounts</h6>
                    <a className="link no-underline ">Students</a>
                    <a className="link no-underline ">Militiry</a>
                    <a className="link no-underline ">Teacher</a>
                    <a className="link no-underline ">First Responders & Medical Professionals</a>
                    <a className="link no-underline ">Birthday</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title pb-4 flex items-center gap-1"><AiFillDribbbleSquare className='text-3xl'/> United States</h6>
                </nav>
            </footer>

            {/**footer last section */}
            <div className='pt-12 px-4 pb-10'>
                <ul className='flex flex-wrap gap-8'>
                    <li>© 2024 Nike, Inc. All Rights Reserved</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li><a href='#'>Nike Privacy Policy</a></li>
                    <li><a href='#'>Your Privacy Choices</a></li>
                    <li><a href='#' >CA Supply Chains Act</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;