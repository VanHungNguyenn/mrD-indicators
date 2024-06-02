import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaStar } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const listReviews = [
	{
		id: 1,
		name: 'Tristan',
		avatar: 'https://github.com/shadcn.png',
		rating: 5,
		description:
			'I want to take a moment and appreciate the work done by the chart prime team ! The devs are exceptionally well and indicators are best in class ! The chart prime oscillator is best among what I have used. Oracle has excellent candlestick pattern detection technique which not everyone has. Excellent various pattern detection techniques and channels. Over-all Chart prime has compiled native technical analysis methodology with new techniques to build powerful trading system. I am a lifetime member and forever will be. Great Orderblocks methodology with perfect market structures. Hope the company grows more and more . Stay Prime',
		date: 'Nov 28, 2023',
	},
	{
		id: 2,
		name: 'Eleanor',
		avatar: 'https://github.com/eleanor.png',
		rating: 4,
		description:
			'Great product, awesome support and community.',
		date: 'Dec 12, 2023',
	},
	{
		id: 3,
		name: 'Lucas',
		avatar: 'https://github.com/lucas.png',
		rating: 3,
		description:
			'So far I am a fan.  The mrD indicators seem easy enough to use and this helps greatly when I dont have time to chart and have a job to tend to.  Helps me take the guess work out of certain trades. I do recommend this addition to your trading belt. I watched the class today and it was quite helpful as well. Could seem overwhelming but in the end its pretty clean cut after you do a little studying.',
		date: 'Jan 5, 2024',
	},
	{
		id: 4,
		name: 'Sophia',
		avatar: 'https://github.com/sophia.png',
		rating: 5,
		description:
			'Great training - made my money back in 2 days on the monthly subscription. mrD Indicators help with learning and is a MUST HAVE for new traders finding their feet.',
		date: 'Feb 18, 2024',
	},
	{
		id: 5,
		name: 'Oliver',
		avatar: 'https://github.com/oliver.png',
		rating: 4,
		description:
			'I was thinking this was just going to be some good indicators and that was it but was I ever surprised. mrD indicators are incredible and they never stop updating them (for free). Added to that their Discord is an actual community and their support is beyond incredible.',
		date: 'Mar 3, 2024',
	},
	{
		id: 6,
		name: 'Emma',
		avatar: 'https://github.com/emma.png',
		rating: 4,
		description:
			'The team made the entire experience fun and.easy to learn. The PRO suite has so many features that have personally taken my trading to a whole new level, including pattern detection, breakout target and multi time frame support.',
		date: 'Mar 8, 2024',
	},
]

const anotherListReviews = [
	{
		id: 7,
		name: 'Liam',
		avatar: 'https://github.com/liam.png',
		rating: 4,
		description:
			'Top notch charts and great customer service!',
		date: 'Apr 15, 2024',
	},
	{
		id: 8,
		name: 'Ava',
		avatar: 'https://github.com/ava.png',
		rating: 3,
		description:
			'One if the best trading indicators helping experienced and new traders to take quality trades. Most important aspect of these indicators for me personally is it has been helping me avoid losing trades. Quite an amazing combinations of elements combined to understand the market data in easy manner.',
		date: 'May 2, 2024',
	},
	{
		id: 9,
		name: 'Noah',
		avatar: 'https://github.com/noah.png',
		rating: 5,
		description:
			'Quality company, quality people, quality service. Highly highly recommended.',
		date: 'Jun 19, 2024',
	},
	{
		id: 10,
		name: 'Isabella',
		avatar: 'https://github.com/isabella.png',
		rating: 5,
		description:
			'Amazing charting software with unique divergence indicators for early entries in stocks and futures.',
		date: 'Jul 4, 2024',
	},
	{
		id: 11,
		name: 'William',
		avatar: 'https://github.com/william.png',
		rating: 4,
		description:
			'Incredible and unique indicators, a very supportive community, incredibly accurate signals that more than pay for the subscription.',
		date: 'Aug 12, 2024',
	},
	{
		id: 12,
		name: 'Charlotte',
		avatar: 'https://github.com/charlotte.png',
		rating: 4,
		description:
			'It really helps me, especially for beginners like me in the world of trading, it really helps me to learn',
		date: 'Sep 28, 2024',
	},
]

const Review = () => {
	return (
		<div className='py-base lg:py-mobile'>
			<div className='max-w-7xl mx-auto px-5 mb-10'>
				<h3 className='text-yellow-500 text-5xl font-bold text-center leading-tight lg:text-3xl'>
					What our Community has been Saying
				</h3>
			</div>
			<div className='flex flex-col'>
				<Marquee>
					{listReviews?.map((item) => (
						<div
							key={item.id}
							className='relative m-2.5 flex flex-col h-screen max-h-[15rem] p-5 rounded-xl max-w-md shadow-md bg-gray-900 hover:bg-gray-800 text-white lg:max-w-sm lg:max-h-[14rem]'
						>
							<Image
								src='/trustpilot.svg'
								alt='Trustpilot'
								width={30}
								height={30}
								className='object-cover absolute top-3 right-3'
							/>
							<div className='flex items-center gap-3 mb-4'>
								<Avatar>
									<AvatarImage
										src={item.avatar}
										alt={item.name}
									/>
									<AvatarFallback>
										{item.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<div className='font-bold text-left text-md tracking-tight lg:text-sm'>
									{item.name}
								</div>
							</div>
							<div className='flex items-center mb-4'>
								{[...Array(item.rating)].map((_, index) => (
									<FaStar
										key={index}
										className='text-yellow-400 w-5 h-5'
									/>
								))}
							</div>
							<p className='line-clamp-3 mb-4 lg:text-sm lg:mb-2'>
								{item.description}
							</p>
							<span className='mt-auto text-sm font-semibold text-gray-700 tracking-tight'>
								{item.date}
							</span>
						</div>
					))}
				</Marquee>
				<Marquee direction='right'>
					{anotherListReviews?.map((item) => (
						<div
							key={item.id}
							className='relative m-2.5 flex flex-col h-screen max-h-[15rem] p-5 rounded-xl max-w-md shadow-md bg-gray-900 hover:bg-gray-800 text-white lg:max-w-sm lg:max-h-[14rem]'
						>
							<Image
								src='/trustpilot.svg'
								alt='Trustpilot'
								width={30}
								height={30}
								className='object-cover absolute top-3 right-3'
							/>
							<div className='flex items-center gap-3 mb-4'>
								<Avatar>
									<AvatarImage
										src={item.avatar}
										alt={item.name}
									/>
									<AvatarFallback>
										{item.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<div className='font-bold text-left text-md tracking-tight lg:text-sm'>
									{item.name}
								</div>
							</div>
							<div className='flex items-center mb-4'>
								{[...Array(item.rating)].map((_, index) => (
									<FaStar
										key={index}
										className='text-yellow-400 w-5 h-5'
									/>
								))}
							</div>
							<p className='line-clamp-3 mb-4 lg:text-sm'>
								{item.description}
							</p>
							<span className='mt-auto text-sm font-semibold text-gray-700 tracking-tight'>
								{item.date}
							</span>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	)
}

export default Review
