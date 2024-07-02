import React from 'react';

const NewWeeksec = () => {
    return (
        <div className='pt-16'>
            {/**New week title  */}
            <div className='flex  justify-center items-center flex-col space-y-6'>
                <h2 className='font-extrabold text-black font-sans text-5xl'>NEW THIS WEEK</h2>
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