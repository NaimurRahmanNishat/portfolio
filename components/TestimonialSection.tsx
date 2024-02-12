"use client"
import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { reviews } from '@/constants';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper";

type Review = {
    name: string;
    designation: string;
    socialLinks: { url: string; icon: any }[];
    stars: number;
    review: string;
};

const TestimonialSection = () => {
    const swiperRef = useRef<SwiperType>();
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
            <SectionHeading
                title="what my clients say about me"
                subtitle="Ullam ipsam velit similique vero veniam ratione voluptatum sit quae soluta. Totam tempore quos adipisci reprehenderit ex harum repellendus provident? Facilis, eaque?"
            />
            <div>
                <div className="pb-3 border-b border-peach flex justify-between items-center">
                    <p>{reviews.length}total reviews</p>
                    <div className="flex gap-2">
                        <button className="bg-peach-200 border border-peach p-1 rounded text-gray-700"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ChevronLeft />
                        </button>
                        <button className="bg-peach-200 border border-peach p-1 rounded text-gray-700"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
                <div className="pt-8">
                    <Swiper spaceBetween={20} slidesPerView={sliderPerView} loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {
                            reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <SingleReview review={review} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

const SingleReview = ({ review }: { review: Review }) => {
    return (
        <div className="box flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-gray-700">{review.name}</h6>
                    <p className="text-gray-500 text-sm">{review.designation}</p>
                </div>
                <div className="flex gap-3">
                    {
                        review.socialLinks.map((link, index) => (
                            <a
                                href={link.url}
                                key={index}
                                className="text-purple hover:scale-105 transition-transform duration-300"
                            >
                                <link.icon strokeWidth={0} fill="currentColor" />
                            </a>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="flex gap-1">
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                size={20}
                                fill="currentColor"
                                className={`text-purple ${
                                    index < review.stars ? "opacity-100" : "opacity-30"
                                }`}
                            />
                        ))
                    }
                </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
        </div>
    );
};
