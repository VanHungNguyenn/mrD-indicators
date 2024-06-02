'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { FaCheck } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

import workImages from '@/constants/workImages'
import Link from 'next/link'

const items = [
    'Detect market trends',
    'Advanced oscillator',
    'Market structure',
    'Optimize Entries',
]

const Work = () => {
    return (
        <div className='max-w-7xl px-5 mx-auto flex flex-col py-base lg:py-mobile'>
            <div className='flex gap-20 items-center justify-between lg:flex-col lg:gap-10'>
                <div className='w-1/2 flex items-center justify-center lg:w-[90%]'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000,
                        }}
                        modules={[Pagination, Autoplay]}
                        className='work-swiper'
                    >
                        {
                            workImages.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Image
                                        src={item.url}
                                        alt={item.alt}
                                        width={0}
                                        height={0}
                                        priority={true}
                                        sizes='100vw'
                                        className='object-cover w-full h-auto'
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='w-1/2 flex flex-col lg:w-full lg:items-center'>
                    <p className='lg:text-center'>TRADING SYSTEM</p>
                    <h6 className='text-5xl font-semibold text-white mt-4 lg:text-3xl lg:text-center'>
                        How does it work?
                    </h6>
                    <p className='highlightyellow text-white mt-4 text-lg lg:text-sm lg:text-center'>
                        We equip traders with <span>trading tools</span> and <span>technical indicators</span> to easily build your own <span>TRADING SYSTEM</span>.
                    </p>
                    <ul className='text-white mt-4 text-lg lg:text-center lg:text-sm grid grid-cols-2 gap-4 sm:grid-cols-1'>
                        {
                            items.map((item, index) => (
                                <li key={index} className='flex items-center gap-3'>
                                    <FaCheck className='text-green-600' />
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    <div className='flex items-center gap-3'>
                        <Link href='/#pricing' className='mt-10 flex items-center'>
                            <Button size={'lg'} variant={'outline'} textTranform='uppercase'>
                                Get Access now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work