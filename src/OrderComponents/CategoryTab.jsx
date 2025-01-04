import FoodCard from './FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import React from 'react';

const CategoryTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 gap-5'>
                        {
                            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>


                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default CategoryTab;