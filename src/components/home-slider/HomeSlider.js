import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonImg } from '@ionic/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/autoplay/autoplay.scss';
import "./homestyles.scss";

export default function App() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <Swiper
                slidesPerView={1.5}
                centeredSlides={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                loop={true}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /></SwiperSlide>
                <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /></SwiperSlide>
                <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /></SwiperSlide>
                <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /></SwiperSlide>
                <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /></SwiperSlide>
            </Swiper>
        </>
    );
}