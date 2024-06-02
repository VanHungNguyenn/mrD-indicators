import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { socialLink } from '@/constants/socialLink';
import TradingViewWidget from '@/components/feature/TradingViewWidget';
import ParticleBackground from '@/components/feature/ParticleBackground'

const Hero = () => {
	const telegramLink = socialLink.find((social) => social.title === 'Telegram')?.link ?? '#'
	const discordLink = socialLink.find((social) => social.title === 'Discord')?.link ?? '#'

	return (
		<main className='relative max-w-7xl px-5 mx-auto pt-[150px] pb-[100px] lg:py-mobile flex flex-col'>
			<ParticleBackground />
			<div className='relative flex items-center justify-between gap-10 lg:flex-col'>
				<div className='w-1/2 flex items-center justify-center max-w-[600px] lg:w-full lg:max-w-[700px]'>
					<Image
						src='/PC.svg'
						alt='hero'
						width={0}
						height={0}
						sizes='100vw'
						priority={true}
						className='object-cover w-full h-auto'
					/>
				</div>
				<div className='w-1/2 flex flex-col lg:w-full lg:items-center'>
					<h1 className='max-w-[800px] text-5xl font-bold leading-tight text-yellow-500 lg:text-center lg:text-3xl'>
						Enhance your trading with the {' '}<span className='text-white'>mrD Indicators</span> toolkit.
					</h1>
					<p className='max-w-[800px] mt-6 text-xl text-white lg:text-center md:text-sm'>
						We create analytical indicators that support faster and smarter market analysis. Indicators work in all markets. Our indicator scripts are built for the TradingView charting platform and you can receive trading signals and alerts on any device.
					</p>
					<Link href='/#pricing' className='mt-10 flex items-center'>
						<Button size={'lg'} variant={'outline'} textTranform='uppercase'>
							Get access now
						</Button>
					</Link>
					<div className='mt-4 flex items-center gap-5'>
						<Link href={
							telegramLink
						}
							target='_blank'
							className='flex items-center'>
							<Image
								src='/telegram.png'
								alt='telegram'
								width={0}
								height={0}
								sizes='100vw'
								priority={true}
								className='object-cover w-auto h-[30px]'
							/>
						</Link>
						<Link href={discordLink} target='_blank' className='flex items-center'>
							<Image
								src='/discord.png'
								alt='discord'
								width={0}
								height={0}
								sizes='100vw'
								priority={true}
								className='object-cover w-auto h-[30px]'
							/>
						</Link>
						<Link href='https://www.tradingview.com/u/mrDocC/#published-scripts' target='_blank' className='flex items-center'>
							<Image
								src='/tradingview.png'
								alt='tradingview'
								width={0}
								height={0}
								sizes='100vw'
								priority={true}
								className='object-cover w-auto h-[30px]'
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='mt-12'>
				<TradingViewWidget />
			</div>
		</main>
	)
}

export default Hero
