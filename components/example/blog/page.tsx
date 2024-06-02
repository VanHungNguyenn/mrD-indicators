import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const listCategories = [
	{
		name: 'All',
		count: 260,
	},
	{
		name: 'Bitcoin',
		count: 120,
	},
	{
		name: 'Ethereum',
		count: 80,
	},
	{
		name: 'Ripple',
		count: 60,
	},
	{
		name: 'Litecoin',
		count: 40,
	},
]

const listBlogs = [
	{
		id: 1,
		title: 'Bitcoin is the future of currency',
		date: 'December 20, 2021',
		image: '/blog/blog1.png',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam nihil suscipit, numquam tempora ullam id eius ex voluptas eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga accusantium in possimus nulla, repudiandae optio totam amet veniam officiis.',
	},
	{
		id: 2,
		title: 'The Rise of NFTs in the Digital World',
		date: 'January 5, 2022',
		image: '/blog/blog2.png',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam nihil suscipit, numquam tempora ullam id eius ex voluptas eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga accusantium in possimus nulla, repudiandae optio totam amet veniam officiis.',
	},
	{
		id: 3,
		title: 'Artificial Intelligence: Boon or Bane?',
		date: 'January 18, 2022',
		image: '/blog/blog3.png',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam nihil suscipit, numquam tempora ullam id eius ex voluptas eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga accusantium in possimus nulla, repudiandae optio totam amet veniam officiis.',
	},
	{
		id: 4,
		title: 'The Future of Work: Remote vs Office',
		date: 'February 3, 2022',
		image: '/blog/blog4.png',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam nihil suscipit, numquam tempora ullam id eius ex voluptas eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga accusantium in possimus nulla, repudiandae optio totam amet veniam officiis.',
	},
	{
		id: 5,
		title: 'Climate Change: Urgency for Action',
		date: 'February 20, 2022',
		image: '/blog/blog5.png',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam nihil suscipit, numquam tempora ullam id eius ex voluptas eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga accusantium in possimus nulla, repudiandae optio totam amet veniam officiis.',
	},
	{
		id: 6,
		title: 'The Metaverse: A New Digital Frontier',
		date: 'March 10, 2022',
		image: '/blog/blog6.png',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam nihil suscipit, numquam tempora ullam id eius ex voluptas eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga accusantium in possimus nulla, repudiandae optio totam amet veniam officiis.',
	},
]

const Blog = () => {
	return (
		<>
			<div className='bg-gradient-to-r from-[#00afee] via-[#70b0da] to-[#d0cde0]'>
				<div className='max-w-7xl px-5 py-10 mx-auto flex items-center justify-between'>
					<div className='flex flex-col'>
						<h3 className='text-4xl font-semibold text-white'>
							Hot news
						</h3>
						<p className='text-white mt-4'>
							Most relevant CryptoCurrency News
						</p>
					</div>
					<div className='flex flex-col items-end'>
						<div className='text-[30px] font-semibold text-white'>
							260
						</div>
						<div className='text-white text-[20px] font-semibold'>
							Articles
						</div>
					</div>
				</div>
			</div>
			<div className='max-w-7xl px-5 py-[70px] mx-auto flex flex-col w-full gap-5'>
				<div className='flex items-center gap-2'>
					{listCategories?.map((category) => (
						<div
							key={category.name}
							className='min-w-[50px] w-fit cursor-pointer py-2 px-4 bg-gradient-to-r from-[#00afee] via-[#70b0da] to-[#d0cde0] flex items-center justify-center rounded-lg transform hover:scale-105'
						>
							<div className='text-white text-center lg:text-sm'>
								{category.name}
							</div>
						</div>
					))}
				</div>
				<div className='flex flex-col gap-10'>
					{listBlogs?.map((blog) => (
						<div
							key={blog.id}
							className='flex border-t border-gray-500 w-full'
						>
							<Link
								href={`/blog/${blog.id}`}
								className='w-[320px] h-[250px] lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[180px] rounded-bl-xl overflow-hidden'
							>
								<Image
									src={blog.image}
									alt={blog.title}
									width={0}
									height={0}
									sizes='100vw'
									priority={true}
									className='object-cover w-full h-full transform hover:scale-105'
								/>
							</Link>
							<div className='flex flex-col p-5 flex-1 lg:p-2'>
								<div className='text-gray-500 lg:text-sm'>
									{blog.date}
								</div>
								<Link
									href={`/blog/${blog.id}`}
									className='text-[26px] font-semibold mt-2 line-clamp-1 lg:text-lg'
								>
									{blog.title}
								</Link>
								<p className='mt-5 line-clamp-3 lg:text-sm lg:mt-2'>
									{blog.content}
								</p>
								<Link
									href={`/blog/${blog.id}`}
									className='mt-auto text-[#00afee] hover:underline italic lg:text-sm'
								>
									Continue reading...
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Blog
