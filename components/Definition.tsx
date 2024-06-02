import React from 'react'
import { Button } from '@/components/ui/button'

const Definition = () => {
	return (
		<div className='relative bg-defi'>
			<div className='relative max-w-7xl px-5 mx-auto py-[100px] z-10'>
				<h3 className='text-gradient text-5xl font-bold leading-tight text-center lg:text-3xl'>
					What are indicators?
				</h3>
				<p className='mt-8 w-full max-w-[630px] text-center mx-auto font-semibold lg:text-sm'>
					Trading indicators are essential tools used by traders to
					gain insight into the markets. They help traders to get a
					better sense of market conditions by visualising data
					derived from price action to reveal information such as
					underlying trends or if a reversal is imminent. Our
					indicators provide accurate, real-time data to help you make
					informed trading decisions.
				</p>
				<div className='mt-10 flex items-center justify-center'>
					<Button size={'lg'} variant={'blue'}>
						Learn more
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Definition
