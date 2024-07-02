import React from 'react';

const ShopFirst = () => {
    return (
        <div className='pt-14'>
            {/**first title */}
            <div className='flex justify-center items-center flex-col space-y-4'>
                <h2 className='font-extrabold text-black font-sans text-7xl'>NIKE PEGASUS 41</h2>
                <p className='text-center text-lg'>
                    Experience the responsive energy return od Air Zoom an<br /> ll-new Reactx Foam.
                </p>
                <button className="bg-black rounded-2xl px-6 py-2 font-bold text-lg text-white">Shop</button>
            </div>
            {/**shop category */}
            <div className=' pt-16'>
                <div className='flex'>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (1).jpg" alt="" />
                        <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                            <h4 className='text-xl font-semibold'>Retro Kicks</h4>
                            <h3 className='text-3xl font-semibold'>Vomero 5 & more</h3>
                            <button className="bg-[#ffff] rounded-2xl px-6 py-2 font-bold text-lg text-black">Shop</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (2).jpg" alt="" />
                        <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                            <h4 className='text-xl font-semibold'>FreeDom and stability</h4>
                            <h3 className='text-3xl font-semibold'>Nike Free Metcon 6</h3>
                            <button className="bg-[#ffff] rounded-2xl px-6 py-2 font-bold text-lg text-black">Shop</button>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (3).jpg" alt="" />
                        <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                            <h4 className='text-xl font-semibold'>Tranding</h4>
                            <h3 className='text-3xl font-semibold'>Classis Black & White</h3>
                            <button className="bg-[#ffff] rounded-2xl px-6 py-2 font-bold text-lg text-black">Shop</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (3).jpg" alt="" />
                        <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                            <h4 className='text-xl font-semibold'>New Arriverls</h4>
                            <h3 className='text-3xl font-semibold'>Air Jordan 4 'Oxidized Green</h3>
                            <button className="bg-[#ffff] rounded-2xl px-6 py-2 font-bold text-lg text-black">Shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopFirst;