// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'
import s01 from "../assets/home/slide1.jpg";
import s02 from "../assets/home/slide2.jpg";
import s03 from "../assets/home/slide3.jpg";
import s04 from "../assets/home/slide4.jpg";
import s05 from "../assets/home/slide5.jpg";

const OrderOnline = () => {
    return (
        <div>
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div>
                            <img src={s01} alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={s02} alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={s03} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={s04} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={s05} alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;