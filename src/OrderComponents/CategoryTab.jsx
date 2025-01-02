// import FoodCard from './FoodCard';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";

// const CategoryTab = ({ items }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//     };
//     return (
//         <div >

//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className='grid md:grid-cols-3 gap-10'>
//                         {
//                             items.map(item => <FoodCard
//                                 key={item._id}
//                                 item={item}
//                             ></FoodCard>)
//                         }
//                     </div>

//                 </SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// // export default OrderTab;
// export default CategoryTab;

import React from 'react';

const CategoryTab = () => {
    return (
        <div>
            
        </div>
    );
};

export default CategoryTab;