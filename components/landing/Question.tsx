import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const Question = () => {
	return (
		<div className='max-w-7xl px-5 mx-auto py-base lg:py-mobile'>
			<h3 className='text-yellow-500 text-5xl font-bold leading-tight text-center lg:text-3xl'>
				Frequent questions
			</h3>
			<div className='mt-[50px] max-w-[800px] mx-auto'>
				<Accordion type='single' collapsible className='w-full'>
					<AccordionItem value='item-0'>
						<AccordionTrigger className='text-left'>What markets & timeframes does this work with?</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-2'>
							<p>
								All of our indicators function on any market available on TradingView such as stocks, crypto, forex, and commodities on all timeframes including 1m, 5m, 15m, 1h, 4H, 1D, etc.
							</p>
							<p>The toolkits we provide on every plan can hypothetically fit any style of trading (scalping, swing trading, investing, etc) for finding technical insights.</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Does it repaint?</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-2'>
							<p>
								All of our indicators do not repaint. Everything appears in real-time and is confirmed & permanent on the chart once the candle it was generated on has closed.
							</p>

						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>
							What is the accuracy of the signals?
						</AccordionTrigger>
						<AccordionContent>
							<p>
								There is no specific win rate applicable to mention regarding our signals due to the way they were designed & intended to be used as confluence in your analysis.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger className='text-left'>Do I need to upgrade TradingView to use Indicators?</AccordionTrigger>
						<AccordionContent>
							<p>You don’t need to upgrade TradingView, our toolkits work with 100% functionality on the basic plan of TradingView (free).</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	)
}

export default Question
