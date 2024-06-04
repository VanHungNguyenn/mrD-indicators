'use client'
import React, { ReactNode } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Header from '@/components/auth/header'
// import Social from '@/components/auth/social'
import BackButton from './back-button'

interface CardWrapperProps {
	children: ReactNode
	headerLabel: string
	backButtonLabel: string
	backButtonHref: string
	showSocial?: boolean
}

const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className='w-[400px] border-none bg-primary'>
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>
				{children}
				{/* <div className='relative mt-8'>
					<div className='absolute inset-0 flex items-center'>
						<span className='w-full border-t' />
					</div>
					<div className='relative flex justify-center text-xs uppercase'>
						<span className='bg-primary px-2 text-white'>
							Or continue with
						</span>
					</div>
				</div> */}
			</CardContent>

			{/* {showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)} */}
			<CardFooter>
				<BackButton label={backButtonLabel} href={backButtonHref} />
			</CardFooter>
		</Card>
	)
}

export default CardWrapper
