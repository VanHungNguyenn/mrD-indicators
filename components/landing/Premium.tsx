import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

const documentLink = 'https://docs.mrd-indicators.com/indicators'

const items = [
	'Accurate Trading signals',
	'Easy Setup',
	'100 % Non-repainting',
	'Low Latency signals',
	'Real-time Alerts',
]

const Premium = () => {
	return (
		<div className='max-w-7xl px-5 mx-auto py-base lg:py-mobile flex items-center justify-between gap-5 lg:flex-col-reverse lg:gap-10'>
			<div className='w-1/2 lg:w-full lg:flex lg:flex-col lg:items-center'>
				<p>INDICATORS</p>
				<h3 className='text-5xl font-bold leading-tight text-white lg:text-3xl lg:text-center'>
					mrD-Signals <span className='text-yellow-500'>Premium</span>
					{''}?
				</h3>
				<h6 className='highlight text-xl font-semibold text-white mt-6 lg:text-lg lg:text-center'>
					<span>Features</span>
				</h6>
				<p className='highlight text-white mt-4 text-lg lg:text-center lg:text-sm'>
					The indicator generates <span>precise signals</span> and has
					an ability to <span>identify trend reversals</span> in the
					market.
				</p>
				{/* 2 cols */}
				<ul className='text-white mt-4 text-lg lg:text-center lg:text-sm grid grid-cols-2 gap-4 sm:grid-cols-1'>
					{items.map((item, index) => (
						<li key={index} className='flex items-center gap-3'>
							<FaCheck className='text-green-600' />
							{item}
						</li>
					))}
				</ul>
				<div className='flex items-center gap-3'>
					<Link
						href={documentLink}
						target='_blank'
						className='mt-10 flex items-center'
					>
						<Button
							size={'lg'}
							variant={'outline'}
							textTranform='uppercase'
						>
							More Info
						</Button>
					</Link>
					<Link href='/#pricing' className='mt-10 flex items-center'>
						<Button
							size={'lg'}
							variant={'blue'}
							textTranform='uppercase'
						>
							Get Access
						</Button>
					</Link>
				</div>
			</div>
			<div className='w-1/2 flex items-center justify-center lg:w-[90%]'>
				<Image
					src='/premium.svg'
					alt='hero'
					width={0}
					height={0}
					sizes='100vw'
					priority={true}
					className='object-cover w-full max-w-[630px] lg:max-w-full h-auto'
				/>
			</div>
		</div>
	)
}

export default Premium
