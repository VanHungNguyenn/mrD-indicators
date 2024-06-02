'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

import {
	Navigation,
	Autoplay,
	Pagination,
	Mousewheel,
	Keyboard,
} from 'swiper/modules'

const listImages = [
	{
		id: 1,
		src: '/slide1.png',
		alt: 'slide1',
	},
	{
		id: 2,
		src: '/slide2.png',
		alt: 'slide2',
	},
	{
		id: 3,
		src: '/slide3.png',
		alt: 'slide3',
	},
]

const Feature = () => {
	return (
		<div className='max-w-7xl px-5 mx-auto py-[100px] lg:py-[70px]'>
			<h3 className='text-5xl font-bold leading-tight text-white text-center lg:text-3xl'>
				Feature <span className='text-yellow-500'>mrD Indicators</span>{' '}
				indicators
			</h3>
			<div className='mt-[50px] w-full max-w-[800px] mx-auto'>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					mousewheel={true}
					keyboard={true}
					loop={true}
					modules={[
						Navigation,
						Pagination,
						Mousewheel,
						Keyboard,
						Autoplay,
					]}
				>
					{listImages.map((image) => (
						<SwiperSlide
							key={image.id}
							className='rounded-3xl overflow-hidden'
						>
							<Image
								alt={image.alt}
								src={image.src}
								width={0}
								height={0}
								priority={true}
								sizes='100vw'
								className='object-cover w-full h-auto'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Feature
