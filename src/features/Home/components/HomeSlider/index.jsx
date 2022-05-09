import React from 'react'
import { homeCategoryData } from '../../../../utils/staticData';
// mui
import { Button, Container } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// swiper js
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper scss
import 'swiper/css';
import 'swiper/css/navigation';

import "../../../../App.css"

SwiperCore.use([Autoplay, Navigation]);

function HomeSlider() {
  return (
    <section className='text-center my-[100px]'>
        <Container>
            <div 
                className='rounded-lg pt-12 shadow-slider bg-white'
            >
                <div className='text-2xl font-bold text-orange-500 font-category-heading'>
                    What we have?
                </div>
                <h2 className='text-3xl mt-2 font-bold text-zinc-800'>
                    Food category
                </h2>
                <div className='relative flex pt-10 pb-20'>
                    <Swiper
                        slidesPerView={2}
                        loop
                        loopFillGroupWithBlank={true}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        breakpoints={{
                            600: {
                        slidesPerView: 4,
                        },
                        960: {
                        slidesPerView: 7,
                        },
                        }}
                    >
                    {homeCategoryData.map(({ img, name }, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center px-2">
                                <div 
                                    className="w-[120px] h-[120px] rounded mt-[10px] bg-white shadow-slider cursor-default 
                                    transition-all delay-[0.3s] flex justify-center hover:shadow-slider-hover"
                                >
                                    <img
                                        className="w-[60px] h-full fill-orange-400"
                                        src={img}
                                        alt="Category card"
                                    />
                                </div>
                                <div className="home-category__card-description">
                                    {name}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <Button 
                        className="!absolute !min-h-[35px]  !min-w-[35px] !z-[1] !top-[34%] left-[8px] prev-btn"
                    >
                      <DoubleArrowIcon style={{ transform: "rotate(180deg)" }} className="!fill-zinc-700 !w-[15px] !h-[15px]" />
                    </Button>
                    <Button 
                        className="!absolute !min-h-[35px] !min-w-[35px] !z-[1] !top-[34%] right-[8px] next-btn"
                    >
                      <DoubleArrowIcon className="!fill-zinc-700 !w-[15px] !h-[15px]"/>
                    </Button>   
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HomeSlider