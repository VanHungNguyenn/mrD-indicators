import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { socialLink } from '@/constants/socialLink';
import Link from 'next/link'

const telegramLink = socialLink.find((social) => social.title === 'Telegram')?.link ?? '#'

const Reason = () => {
	return (
		<div className='max-w-7xl px-5 mx-auto py-[100px] flex items-center justify-between lg:flex-col-reverse lg:gap-10'>
			<div className='w-1/2 lg:w-full lg:flex lg:flex-col lg:items-center'>
				<h3 className='text-5xl font-bold leading-tight text-white lg:text-3xl lg:text-center'>
					Why choose{' '}
					<span className='text-yellow-500'>mrD Indicators</span>?
				</h3>
				<h6 className='highlight text-xl font-semibold text-white mt-6 lg:text-lg lg:text-center'>
					Join <span>thousands</span> of traders who trust us
				</h6>
				<p className='highlight text-white mt-4 text-lg lg:text-center lg:text-sm'>
					At mrD Indicators, we provide you with the most{' '}
					<span>advanced trading tools</span> and{' '}
					<span>technical indicators</span> to help you stay ahead of
					the market. Our indicators and overlays are{' '}
					<span>easy to use</span> and <span>customizable</span> to
					your specific needs. Join our free community and get access
					to our <span>free indicators now</span>.
				</p>
				<Link href={telegramLink} className='mt-10 flex items-center'>
					<Button size={'lg'} variant={'outline'}>
						Join our Telegram
					</Button>
				</Link>
			</div>
			<div className='w-1/2 flex items-center justify-center lg:w-full lg:max-w-[300px]'>
				<Image
					src='/phone.png'
					alt='hero'
					width={0}
					height={0}
					sizes='100vw'
					priority={true}
					className='object-cover w-[400px] h-auto'
				/>
			</div>
		</div>
	)
}

export default Reason
