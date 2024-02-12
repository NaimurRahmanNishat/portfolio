"use client"
import { portfolios } from '@/constants'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as swiperType } from "swiper"
import "swiper/css"
import PortfolioItem from './PortfolioItem'

interface Props {
    data: typeof portfolios;
    title: string;
}

const PortfolioSection = ({ data, title }: Props) => {
    const swiperRef = useRef<swiperType>();
    const [sliderPerView, setSliderPerView] = useState(3);
    useEffect(() => {
        const width = window.innerWidth;
        if (width < 768) {
            setSliderPerView(1);
        }
        else if (width < 1268) {
            setSliderPerView(2);
        }
        else {
            setSliderPerView(3);
        }
    }, []);
    return (
        <section className="max-width section-padding">
            <div className="pb-3 border-b border-peach flex justify-between items-center">
                <p>{title}</p>
                <div className="flex gap-2">
                    <button className="bg-peach-200 border border-peach p-1 rounded text-gray-700"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                    </button>
                    <button className="bg-peach-200 border border-peach p-1 rounded text-gray-700"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                    </button>
                </div>
            </div>
            <div className="pt-8">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={sliderPerView} 
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {
                        data.map((portfolio,index)=>(
                            <SwiperSlide key={index}>
                                <PortfolioItem portfolio={portfolio}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioSection
