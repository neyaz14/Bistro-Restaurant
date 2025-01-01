import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import b01 from "../assets/home/slide1.jpg";
import b02 from "../assets/home/slide2.jpg";
import b03 from "../assets/home/slide3.jpg";
import b04 from "../assets/home/slide4.jpg";
import b05 from "../assets/home/slide5.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <div className=' text-center'>
                    <p className='text-yellow-400  text-center'>---From 11:00am to 10:00pm---</p>
                </div>
                <div className='border-y-2 w-80 py-4 text-center my-4'>
                    <h1 className='text-4xl'>Orders Online</h1>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide><img className='mx-auto' src={b01} alt="" /></SwiperSlide>
                <SwiperSlide><img className='mx-auto' src={b02} alt="" /></SwiperSlide>
                <SwiperSlide><img className='mx-auto' src={b03} alt="" /></SwiperSlide>
                <SwiperSlide><img className='mx-auto' src={b04} alt="" /></SwiperSlide>
                <SwiperSlide><img className='mx-auto' src={b05} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderOnline;