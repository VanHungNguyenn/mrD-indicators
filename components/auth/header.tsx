import React from 'react'
import Image from 'next/image'

interface HeaderProps {
	label: string
}

const Header = ({ label }: HeaderProps) => {
	return (
		<div className='w-full flex flex-col gap-y-4 items-center justify-center'>
			<div className='flex items-center justify-center'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={0}
					height={0}
					sizes='100vw'
					priority={true}
					className='object-cover w-[100px] h-auto'
				/>
			</div>
			<p className='text-white text-xl text-center'>{label}</p>
		</div>
	)
}

export default Header
