// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'
import b01 from "../assets/home/01.jpg";
import b02 from "../assets/home/02.jpg";
import b03 from "../assets/home/03.png";
import b04 from "../assets/home/04.jpg";
import b05 from "../assets/home/05.png";

export default function Carousel() {
  return (
    <div className='container px-6  mx-auto'>
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
          <Slide
            image={b01}
            
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={b02}
            
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={b03}
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={b04}
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={b05}
            
          />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
