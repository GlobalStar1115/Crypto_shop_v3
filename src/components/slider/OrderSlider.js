import { IonImg } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import { useTranslation } from "react-i18next";

import 'swiper/swiper.min.css';
import 'swiper/modules/effect-cards/effect-cards.scss';
import "./styles.css";

export default () => {
    const { t, i18n } = useTranslation('lang');
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
            <SwiperSlide><IonImg src="/assets/images/product/1.png" alt='product' /><h4>{t('order.product-name')}</h4></SwiperSlide>
        </Swiper>
    );
};