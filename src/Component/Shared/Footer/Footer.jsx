import React from 'react';
import { AiFillDribbbleSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='px-14 divide-solid divide-y-2 pt-10 pb-4 mt-4'>
            <hr className='text-xs '/>
            <footer className="footer  bg-[#ffff] pt-16 pb-8 text-black p-10">
                <nav className='space-y-3'>
                    <h6 className="footer-title pb-4">Resources</h6>
                    <a className="link link-hover">Gift Cards</a>
                    <a className="link link-hover">Fine a Store</a>
                    <a className="link link-hover">Nike x NUB</a>
                    <a className="link link-hover">Become a Member</a>
                    <a className="link link-hover">Site Feedback</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title pb-4 ">Help</h6>
                    <a className="link link-hover">Get Help</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">  Order Status </a>
                    <a className="link link-hover"> Shipping and Delivery</a>
                    <a className="link link-hover">  Payment Options</a>
                    <a className="link link-hover"> Gift Card Balance</a>

                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title pb-4  ">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Investores</a>
                    <a className="link link-hover">Purpose</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title pb-4">Promotions & Discounts</h6>
                    <a className="link link-hover">Students</a>
                    <a className="link link-hover">Militiry</a>
                    <a className="link link-hover">Teacher</a>
                    <a className="link link-hover">First Responders & Medical Professionals</a>
                    <a className="link link-hover">Birthday</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title pb-4 flex items-center gap-1"><AiFillDribbbleSquare className='text-3xl'/> United States</h6>
                </nav>
            </footer>
            {/**footer last section */}
            <div className='pt-12 pb-10'>
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