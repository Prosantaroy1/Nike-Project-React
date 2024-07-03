import React from 'react';

const NewWeeksec = () => {
    return (
        <div className='pt-16'>
            {/**New week title  */}
            <div className='flex  justify-center items-center flex-col space-y-6'>
                <h2 className='font-extrabold text-black font-sans sm:text-6xl text-4xl'>NEW THIS WEEK</h2>
                <p className='text-center text-lg '>
                    Experience the responsive energy return od Air Zoom an<br /> ll-new Reactx Foam.
                </p>
                <button className="bg-black rounded-2xl px-6 py-2 font-bold text-lg text-white">Shop New Arrivals</button>
            </div>
            {/**new wwek banner section */}
            <div className='pt-12'>
                <img src="../../../../public/img/nike-just-do-it (5).jpg" alt="" />
            </div>
        </div>
    );
};

export default NewWeeksec;