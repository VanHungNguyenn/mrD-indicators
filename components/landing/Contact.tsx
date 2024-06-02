import React from 'react'
import { Button } from '../ui/button'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import { socialLink } from '@/constants/socialLink';
import Link from 'next/link';


const Contact = () => {
	const telegramLink = socialLink.find((social) => social.title === 'Telegram')?.link ?? '#'
	const discordLink = socialLink.find((social) => social.title === 'Discord')?.link ?? '#'

	return (
		<div className='mx-auto max-w-7xl'>
			<div className='px-5 mx-5 my-[120px] py-[100px] flex flex-col bg-contact rounded-2xl lg:my-[50px] lg:py-[50px]'>
				<h3 className='text-yellow-500 text-7xl font-bold leading-tight text-center lg:text-3xl'>
					Join our Community
				</h3>
				{/* <p className='mt-4 text-center'>Official Telegram Partner</p> */}
				<div className='mt-10 text-center flex gap-2 items-center justify-center sm:flex-col'>
					<Link href={telegramLink}>
						<Button
							size='lg'
							variant={'outline'}
							className='gap-4 py-6 px-4'
							textTranform='uppercase'
						>
							<FaTelegram className='w-8 h-8 lg:w-6 lg:h-6' />
							<div className='text-base lg:text-sm'>
								Join our Telegram
							</div>
						</Button>
					</Link>
					<Link href={discordLink}>
						<Button
							size='lg'
							variant={'outline'}
							className='gap-4 py-6 px-4'
							textTranform='uppercase'
						>
							<FaDiscord className='w-8 h-8 lg:w-6 lg:h-6' />
							<div className='text-base lg:text-sm'>
								Join our Discord
							</div>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
