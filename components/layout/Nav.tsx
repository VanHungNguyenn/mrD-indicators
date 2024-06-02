import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
	const pathname = usePathname()

	return (
		<nav className='flex items-center gap-10 lg:flex-col'>
			<Link
				href={'/'}
				className={`cursor-pointer ${
					pathname === '/' ? 'text-red-600' : ''
				}
        hover:text-yellow-500`}
			>
				Home
			</Link>
			<Link
				href='https://docs.mrd-indicators.com'
				target='_blank'
				className={`cursor-pointer ${
					pathname === '/indicators' ? 'text-red-600' : ''
				}
        hover:text-yellow-500`}
			>
				Indicators
			</Link>
			<Link
				href='/#pricing'
				className='cursor-pointer hover:text-yellow-500'
			>
				Pricing
			</Link>
			{/* <Link
        href={'/blog'}
        className={`cursor-pointer ${pathname === '/blog' ? 'text-red-600' : ''
            }
        hover:text-yellow-500`}
    >
        Blogs
    </Link> */}
		</nav>
	)
}

export default Nav
