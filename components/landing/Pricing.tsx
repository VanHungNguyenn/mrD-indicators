import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Button } from '../ui/button'
import Image from 'next/image'
import { SubcribeDialog } from '@/components/SubcribeDialog'

const listPlans = [
	{
		id: 1,
		name: 'Essential',
		cost: 499.99,
		discount: 349.99,
		unit: 'months',
		value: 12,
		note: 'None Indicators. Get started with the basics and the available signals and trading tips for you.',
		features: [
			'Premium Signals Telegram + Discord',
			'Trading Tips +24/7 Support',
		],
	},
	{
		id: 2,
		name: 'Premium',
		cost: 549.99,
		discount: 349.99,
		unit: 'months',
		value: 12,
		note: 'Access the trading Indicators, start building your trading system.',
		features: [
			'mrD-Signals Premium indicator',
			'mrD-Smart Ranges indicator',
			'mrD-RSI Premium indicator',
			'Trading Tips +24/7 Support',
			'Market analysis Telegram + Discord channel',
			'Trading Tips +24/7 Support',
			'Trading Strategy Telegram + Discord channel',
		],
	},
	{
		id: 3,
		name: 'Ultimate',
		cost: 999.99,
		discount: 749.99,
		unit: 'years',
		value: 3,
		note: 'Popular plan used by many traders. Build your own long-term trading system.',
		features: [
			'mrD-Signals Premium indicator',
			'mrD-Smart Ranges indicator',
			'mrD-RSI Premium indicator',
			'Trading Tips +24/7 Support',
			'Premium Signals Telegram + Discord',
			'Market analysis Telegram + Discord channel',
			'Trading Tips +24/7 Support',
			'Trading Strategy Telegram + Discord channel'
		],
	},
]

const Pricing = () => {
	return (
		<div
			id='pricing'
			className='max-w-7xl px-5 mx-auto py-base flex flex-col lg:py-mobile'
		>
			<h1 className='text-5xl font-bold leading-tight text-yellow-500 text-center lg:text-3xl'>
				Plans for every level of ambition
			</h1>
			{/* <p className='text-center text-white mt-4'>
				Pay annually & get up to 50% off!
			</p> */}

			<div className='flex justify-between gap-8 mt-12 lg:flex-col lg:gap-5 lg:items-center'>
				{listPlans.map((plan) => (
					<div
						key={plan.id}
						className={`relative w-[33.33%] bg-[#202737] rounded-3xl shadow-lg p-6 flex flex-col lg:w-full lg:max-w-[700px]
							${plan.id === 3 && 'bg-white'}
						`}
					>
						{plan.id === 3 && (
							<Image
								src={`/popular.svg`}
								alt='popular'
								width={0}
								height={0}
								priority={true}
								sizes='100vw'
								className='w-[100px] h-auto absolute top-[90px] right-[-11px]'
							/>
						)}
						<h3 className={`text-white rounded-2xl bg-name-package py-3 px-4 text-center text-[20px]`}>
							{plan.name}
						</h3>
						{/* <div className='flex flex-col lg:flex-row lg:py-5 lg:items-center lg:gap-2 sm:flex-col'>
							<div className='lg:flex-1'>
								<p className={clsx('text-center font-bold text-[20px] text-white mt-8 lg:mt-0 sm:mt-5',
									plan.id === 3 && 'text-[#131722]'
								)}>
									<span className='text-[32px]'>
										${plan.discount}
									</span>{' '}
									/ {plan.value} {plan.unit}
								</p>
								<p className='text-center font-semibold text-[#8f939b] mt-1 line-through'>
									${plan.cost} / {plan.value} {plan.unit}
								</p>
								<div className='flex justify-center'>
									<p className='w-fit text-center text-white bg-[#2b3345] py-2 px-4 rounded-lg mt-6 text-[16px]'>
										You save {((plan.cost - plan.discount) / plan.cost * 100).toFixed(1)}% a year
									</p>
								</div>
								<p className={clsx('w-[90%] mx-auto text-center text-white mt-4 text-[14px]',
									plan.id === 3 && 'text-[#131722]'
								)}>
									{plan.note}
								</p>
							</div>
							<div className='mb-10 lg:flex-1 lg:flex lg:flex-col'>
								<div className={clsx('text-white font-bold mt-10',
									plan.id === 3 && 'text-[#131722]'
								)}>
									All Essential Features:
								</div>
								<ul className='mt-4 flex flex-col gap-4'>
									{plan.features.map((feature, index) => (
										<li
											key={index}
											className='flex items-center'
										>
											<div>
												<FaCheck className='text-green-500 w-4 h-4' />
											</div>
											<span className={clsx('ml-2 text-[14px]',
												plan.id === 3 && 'text-[#131722]'
											)}>
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div> */}
						<div className={`flex flex-col lg:flex-row lg:py-5 lg:items-center lg:gap-2 sm:flex-col ${plan.id === 3 ? 'text-[#131722]' : ''}`}>
							<div className='lg:flex-1'>
								<p className={`text-center font-bold text-[20px] mt-8 lg:mt-0 sm:mt-5 ${plan.id === 3 ? 'text-[#131722]' : 'text-white'}`}>
									<span className='text-[32px]'>
										${plan.discount}
									</span>{' '}
									/ {plan.value} {plan.unit}
								</p>
								<p className='text-center font-semibold text-[#8f939b] mt-1 line-through'>
									${plan.cost} / {plan.value} {plan.unit}
								</p>
								{/* <div className='flex justify-center'>
									<p className='w-fit text-center text-white bg-[#2b3345] py-2 px-4 rounded-lg mt-6 text-[16px]'>
										You save {((plan.cost - plan.discount) / plan.cost * 100).toFixed(1)}% a year
									</p>
								</div> */}
								<p className={`w-[90%] mx-auto text-center mt-4 text-[14px] ${plan.id === 3 ? 'text-[#131722]' : 'text-white'}`}>
									{plan.note}
								</p>
							</div>
							<div className='mb-10 lg:flex-1 lg:flex lg:flex-col'>
								<div className={`font-bold mt-10 ${plan.id === 3 ? 'text-[#131722]' : 'text-white'}`}>
									All {plan.name} Features:
								</div>
								<ul className='mt-4 flex flex-col gap-4'>
									{plan.features.map((feature, index) => {
										return (
											<li key={index} className='flex items-center'>
												<div>
													<FaCheck className='text-green-500 w-4 h-4' />
												</div>
												<span className={`ml-2 text-[14px] ${plan.id === 3 ? 'text-[#131722]' : ''}		
													${plan.id === 3 && feature === 'Premium Signals Telegram + Discord' ? 'font-bold ' : ''}
												`}>
													{feature}
												</span>
											</li>
										)
									})
									}
								</ul>
							</div>
						</div>

						<SubcribeDialog>
							<Button className='mt-auto' variant={'blue'}>
								Subcribe
							</Button>
						</SubcribeDialog>

						{/* <span className='text-center text-white font-medium text-[12px] mt-2'>
							30 Day Money Back Guarantee
						</span> */}
					</div>
				))}
			</div>

			{/* <p className='text-center text-gray-500 font-medium w-full max-w-[800px] mx-auto mt-8 lg:text-sm'>
				mrD Indicators is registered for sales tax purposes in
				certain jurisdictions. As a result, depending on your location,
				a sales tax could be added to your final bill.
			</p> */}
		</div>
	)
}

export default Pricing
