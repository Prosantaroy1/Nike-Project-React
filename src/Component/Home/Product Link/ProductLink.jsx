import React from 'react';

const ProductLink = () => {
    return (
        <div className='px-32 pt-12 pb-4 '> 
            <footer className="footer  p-10">
                <nav className='space-y-3'>
                    <h6 className="footer-title lowercase text-2xl">Featured</h6>
                    <a className="link no-underline text-lg">Air Force 1</a>
                    <a className="link no-underline  text-lg">Jordan 1</a>
                    <a className="link no-underline  text-lg">Metcon</a>
                    <a className="link no-underline  text-lg">Air Max 270</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title lowercase text-2xl">Shoes</h6>
                    <a className="link no-underline  text-lg">All Shoes</a>
                    <a className="link no-underline  text-lg">Jordan Shoes</a>
                    <a className="link no-underline  text-lg">Basketball Shoes</a>
                    <a className="link no-underline  text-lg"> Tennis Shoes</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title lowercase text-2xl">Clothing</h6>
                    <a className="link no-underline  text-lg">All Clothing</a>
                    <a className="link no-underline  text-lg">Tops & T-Shirts</a>
                    <a className="link no-underline  text-lg">Shorts</a>
                    <a className="link no-underline  text-lg">Tops Hoodies & Pullovers</a>
                </nav>
                <nav className='space-y-3'>
                    <h6 className="footer-title lowercase text-2xl">Kids</h6>
                    <a className="link no-underline  text-lg">Infant & Toddler Shoes</a>
                    <a className="link no-underline  text-lg">Kids Shoes</a>
                    <a className="link no-underline  text-lg">Kids Basketball Shoes</a>
                    <a className="link no-underline  text-lg">Kids Running Shoes</a>
                </nav>
            </footer>
        </div>
    );
};

export default ProductLink;