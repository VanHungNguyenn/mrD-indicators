'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import Nav from './Nav'
import { buttonVariants } from '@/components/ui/button'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	// click outside myNav, close myNav, except when clicking on menu-icon
	useEffect(() => {
		const myNav = document.getElementById('myNav')

		const handleClick = (e: MouseEvent) => {
			if (myNav && !myNav.contains(e.target as Node) && isOpen) {
				setIsOpen(false)
			}
		}
		if (isOpen) {
			document.addEventListener('click', handleClick)
		}

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [isOpen])

	return (
		<header className='h-header-height bg-primary fixed top-0 w-full z-50 shadow-sm border-b border-gray-800'>
			<div className='relative max-w-7xl px-5 h-full mx-auto flex items-center justify-between'>
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
					<h1 className='text-white text-xl font-bold'>
						mrD Indicators
					</h1>
				</Link>
				<div id='menu-icon' className='hidden lg:flex items-center'>
					{!isOpen && (
						<FaBars
							onClick={() => setIsOpen(true)}
							className='text-white text-3xl cursor-pointer'
						/>
					)}
				</div>
				<div
					id='myNav'
					className={`relative flex items-center gap-20 lg:flex-col lg:p-20 lg:fixed ${isOpen ? 'lg:right-0' : 'lg:right-[-100%]'
						} lg:top-0 lg:bottom-0 lg:max-w-[300px] lg:w-full lg:bg-primary shadow-xl`}
				>
					<FaTimes
						onClick={() => setIsOpen(false)}
						className='hidden text-white text-3xl cursor-pointer lg:absolute lg:right-5 lg:top-5 lg:z-50 lg:flex'
					/>
					<Nav />
					<div className='flex items-center gap-2'>
						<Link
							className={buttonVariants({ variant: 'outline' })}
							href='/login'
						>
							Login
						</Link>
						<Link
							className={buttonVariants({ variant: 'blue' })}
							href='/signup'
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
