import React from 'react';

const MemberShipSec = () => {
    return (
        <div className='lg:px-14 px-2 pt-14'>
            {/**Nike Membership titile */}
            <h2 className='lg:text-5xl text-4xl  font-sans font-extrabold'>NIKE MEMBERSHIP</h2>
            {/**nike membership card*/}
            <div className='flex flex-wrap justify-center gap-3 pt-8'>
                <div className='relative'>
                    <img src="../../../../public/img/nike-just-do-it (13).jpg" alt="" className='lg:w-96 w-full '/>
                    <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                        <h4 className='text-xl font-semibold'>Sports and Wellens</h4>
                        <h3 className='text-2xl font-semibold'>Movement Where its Your's</h3>
                        <button className="bg-[#ffff] rounded-2xl px-4 py-2 font-bold text-lg text-black">Move</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="../../../../public/img/nike-just-do-it (12).jpg" alt="" className='lg:w-96 '/>
                    <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                        <h4 className='text-xl font-semibold'>Members product</h4>
                        <h3 className='text-2xl font-semibold'>Your Excluseve Access</h3>
                        <button className="bg-[#ffff] rounded-2xl px-4 py-2 font-bold text-lg text-black">Shop</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="../../../../public/img/nike-just-do-it (14).jpg" alt="" className='lg:w-96'/>
                    <div className='absolute left-14 bottom-10 space-y-2 text-white'>
                        <h4 className='text-xl font-semibold'>Nike With You</h4>
                        <h3 className='text-2xl font-semibold'>Customize Your Product</h3>
                        <button className="bg-[#ffff] rounded-2xl px-4 py-2 font-bold text-lg text-black">Customize</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberShipSec;