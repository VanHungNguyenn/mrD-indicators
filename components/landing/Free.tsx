'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SubcribeDialog } from '@/components/SubcribeDialog'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

import freeImages from '@/constants/freeImages'

const Free = () => {
	return (
		<div className='max-w-7xl px-5 mx-auto flex flex-col py-base lg:py-mobile'>
			<div className='flex items-center justify-between gap-[100px] lg:flex-col lg:gap-10'>
				<div className='w-1/2 max-w-[500px] flex items-center justify-center lg:w-[90%]'>
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
							freeImages.map((item) => (
								<SwiperSlide key={item.id}>
									<Image
										src={item.url}
										alt={item.alt}
										width={0}
										height={0}
										priority={true}
										sizes='100vw'
										className='object-cover w-[360px] lg:w-[230px] h-auto'
									/>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
				<div className='w-1/2 flex flex-col lg:w-full'>
					<p className='lg:text-center'>BEYOND CHARTS</p>
					<h6 className='text-5xl font-semibold text-white mt-4 lg:text-3xl lg:text-center'>
						Real-time alerts and powerful optimization.
					</h6>
					<p className='highlightyellow text-white mt-4 text-lg lg:text-sm lg:text-center'>
						Market fluctuations are announced in <span>real time</span> on both <span>Discord</span> and <span>Telegram</span> platforms, making it easy for you to <span>Control the Market</span>. Furthermore, you will receive market analysis from our experts.
					</p>
					<div className='mt-10 flex items-center lg:justify-center'>
						<SubcribeDialog customLinkTelegram='https://t.me/addlist/Mh5zj_qHsVgyZDg1'>
							<Button size={'lg'} variant={'outline'} textTranform='uppercase'>
								Get Free
							</Button>
						</SubcribeDialog>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Free


