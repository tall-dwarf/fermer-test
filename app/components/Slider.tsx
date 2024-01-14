"use client"
import { useState } from 'react';
import * as SwipperClass from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { data } from "../mockData"
import CardItem, { ImgItemType } from './CardItem';
import SliderMenu from './SliderMenu';
import { getRandomElement } from '../utils/random';

export default function Slider() {
    const [swiper, setSwiper] = useState<SwipperClass.Swiper>()

    const getSlideClass = (slideTitle: string) => {
        return slideTitle.length > 35 ? 'slide-two' : 'slide-one'
    }

    const getImgType = () => {
        let prefImgtype: ImgItemType | null = null;
        const imgTypes: ImgItemType[] = ['sheet', 'circle'];

        return () => {
            if (prefImgtype === 'circle') {
                return 'sheet'
            }
            prefImgtype = getRandomElement(imgTypes);
            return prefImgtype;
        }
    }

    const imgTypeGenerater = getImgType()

    return (
        <div className="slider">
            <Swiper
                spaceBetween={2}
                onSwiper={(swiper) => setSwiper(swiper)}
                slidesPerView={'auto'}
            >
                {
                    data.map(cItem =>
                        <SwiperSlide key={cItem.id} className={getSlideClass(cItem.title)}>
                            <CardItem imgType={imgTypeGenerater()} card={cItem} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <SliderMenu onBtnNextClick={() => swiper?.slideNext()} onBtnPrefClick={() => swiper?.slidePrev()} />
        </div>
    )
}