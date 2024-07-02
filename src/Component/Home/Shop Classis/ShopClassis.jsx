import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const ShopClassis = () => {
    return (
        <div className='pt-16 pb-4'>
            <h2 className='text-5xl font-extrabold font-sans px-14 pt-4 pb-8'>SHOP BY CLASSICS</h2>
            {/**shop card classies */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper pt-16"
            >
                <SwiperSlide className='relative'>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (6).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>1/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (7).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>2/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (8).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>3/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (9).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>4/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='realtive'>
                        <img src="../../../../public/img/nike-just-do-it (10).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>5/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (11).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>6/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (6).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>7/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (7).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>9/9</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="../../../../public/img/nike-just-do-it (10).jpg" alt="" />
                        <div className='absolute top-4 right-8'>
                            <h4 className='bg-[#b3aeae] py-1 rounded-2xl text-white px-3'>9/9</h4>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ShopClassis;