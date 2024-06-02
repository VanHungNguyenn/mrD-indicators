import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { socialLink } from '@/constants/socialLink';

const navItems = [
	{
		id: 1,
		group: 'Product',
		items: [
			{
				name: 'Tutorials',
				link: '/',
			},
			{
				name: 'Pricing',
				link: '/#pricing',
			},
			{
				name: 'Docs',
				link: 'https://docs.mrd-indicators.com/',
				target: '_blank',
			},
			{
				name: 'Changelog',
				link: '/',
			},
			{
				name: 'Backtesting System',
				link: '/',
			},
		],
	},
	{
		id: 2,
		group: 'Resources',
		items: [
			{
				name: 'Community',
				link: '/',
			},
			{
				name: 'Creators',
				link: '/',
			},
			{
				name: 'Blog',
				link: '/',
			},
			{
				name: 'Contact',
				link: '/',
			},
			{
				name: 'About us',
				link: '/',
			},
		],
	},
	{
		id: 3,
		group: 'My account',
		items: [
			{
				name: 'Manage',
				link: '/',
			},
			{
				name: 'Support',
				link: '/',
			},
		],
	},
]

const Footer = () => {
	return (
		<footer className='py-8 shadow-lg'>
			<div className='max-w-7xl px-5 mx-auto mt-10'>
				<div className='flex justify-between lg:flex-col lg:gap-[60px]'>
					<div className='flex flex-col gap-6'>
						<Link href='/' className='flex items-center'>
							<Image
								src='/logo.svg'
								alt='logo'
								width={0}
								height={0}
								sizes='100vw'
								priority={true}
								className='object-cover w-[60px] h-auto'
							/>
							<h1
								className='text-xl font-bold text-white'
							>mrD Indicators</h1>
						</Link>
						<div className='flex items-center gap-6'>
							{
								socialLink.map((social) => (
									<Link href={social.link} key={social.title} target='_blank'>
										<social.icon className='w-8 h-8' />
									</Link>
								))
							}
						</div>
					</div>
					<div className='flex gap-[120px] lg:justify-between lg:gap-10 lg:flex-wrap'>
						{navItems.map((navItem) => (
							<div
								key={navItem.id}
								className='flex flex-col gap-4'
							>
								<div className='uppercase font-bold'>
									{navItem.group}
								</div>
								{navItem.items.map((item) => (
									<Link
										className='text-[#70737A] hover:text-yellow-500'
										key={item.name}
										href={item.link}
										target={item.target}
									>
										<div>{item.name}</div>
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
				<div className='text-xs text-[#70737A] mt-20 flex flex-col gap-2'>
					<p>
						Trading is risky & most day traders and investors who
						use formula and chart-based investing strategies lose
						money. This site & the products & services mrD Indicators
						offers are for informational & educational purposes
						only. All content is to be considered hypothetical,
						selected after the fact, in order to demonstrate our
						Services and should not be construed as financial
						advice. Decisions to buy, sell, hold or trade in
						securities, commodities and other investments involve
						risk and are best made based on the advice of qualified
						financial professionals. Past performance does not
						guarantee future results.
					</p>
					<p>
						Hypothetical or Simulated performance results have
						certain limitations. Unlike an actual performance
						record, simulated results do not represent actual
						trading. Also, since the trades have not been executed,
						the results may have under-or-over compensated for the
						impact, if any, of certain market factors, such as lack
						of liquidity. Simulated trading programs in general are
						designed with the benefit of hindsight and are based on
						historical information. No representation is being made
						that any account will or is likely to achieve profit or
						losses similar to those shown.
					</p>
					<p>© 2024 mrD Indicators.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
