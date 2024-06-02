import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const listIndicators = [
	{
		id: 1,
		title: 'BBPct%',
		src: '/discover1.png',
		alt: 'discover1',
	},
	{
		id: 2,
		title: 'Trend Flow Profile',
		src: '/discover2.png',
		alt: 'discover2',
	},
	{
		id: 3,
		title: 'Amazing Oscillator',
		src: '/discover3.png',
		alt: 'discover3',
	},
	{
		id: 4,
		title: 'Alpha Schaff',
		src: '/discover4.png',
		alt: 'discover4',
	},
	{
		id: 5,
		title: 'Alpha Schaff',
		src: '/discover5.png',
		alt: 'discover5',
	},
	{
		id: 6,
		title: 'Alpha Schaff',
		src: '/discover6.png',
		alt: 'discover6',
	},
]

const Discover = () => {
	return (
		<div className='max-w-7xl px-5 mx-auto py-[100px] lg:py-[50px]'>
			<h3 className='text-gradient text-5xl font-bold leading-tight text-center lg:text-3xl'>
				Discover Our Free Indicators
			</h3>

			<div className='mt-[50px] grid grid-cols-2 gap-8 sm:grid-cols-1'>
				{listIndicators?.map((indicator) => (
					<div
						key={indicator.id}
						className='flex flex-col gap-2 items-center mx-auto w-full max-w-[380px]'
					>
						<h4 className='text-xl font-bold text-white lg:text-lg'>
							{indicator.title}
						</h4>
						<Link
							href='/indicators'
							className='w-[300px] h-auto relative border border-red-500 shadow-sm rounded-lg overflow-hidden'
						>
							<Image
								src={indicator.src}
								alt={indicator.alt}
								width={0}
								height={0}
								priority={true}
								sizes='100vw'
								className='object-cover w-full h-auto'
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Discover
