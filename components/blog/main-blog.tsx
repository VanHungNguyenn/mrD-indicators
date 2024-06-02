'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { FaFacebook, FaRegCopy } from 'react-icons/fa'

const MainBlog = () => {
	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href)
		} catch (error) {
			console.log(error)
		}
	}

	const handleShareLinkFacebook = () => {
		const url = window.location.href

		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`

		const width = 600
		const height = 400
		const left = (window.innerWidth - width) / 2
		const top = (window.innerHeight - height) / 2

		// Open the Facebook share URL in a new window
		window.open(
			facebookShareUrl,
			'facebook-share-dialog',
			`width=${width},height=${height},top=${top},left=${left}`
		)
	}

	return (
		<>
			<h2 className='text-3xl font-semibold leading-tight text-center max-w-[700px] mx-auto w-full text-white mb-10'>
				2021 Brought a Record Number of First-Time Crypto Buyers
			</h2>
			<div className='flex items-center justify-between mb-12'>
				<div className='flex items-center gap-4'>
					<Avatar className='w-12 h-12'>
						<AvatarImage src='' alt='' />
						<AvatarFallback>AD</AvatarFallback>
					</Avatar>
					<div className='flex flex-col'>
						<div className='font-semibold'>Admin</div>
						<div className='text-gray-500'>November 12, 2023</div>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<FaFacebook
						onClick={handleShareLinkFacebook}
						className='text-[#00afee] text-3xl cursor-pointer hover:text-[#3b5998] transition-colors duration-300 ease-in-out'
					/>
					<FaRegCopy
						onClick={handleCopyLink}
						className='text-[#00afee] text-3xl cursor-pointer hover:text-[#3b5998] transition-colors duration-300 ease-in-out'
					/>
				</div>
			</div>
			<Image
				src={'/blog/blog1.png'}
				alt='blog'
				width={700}
				height={200}
				className='object-cover w-full h-[400px] rounded-xl mt-10'
			/>
			<p className='leading-relaxed font-medium mt-10'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Eveniet beatae debitis minima molestias quam, sed repellendus
				consequatur possimus accusantium velit.
			</p>
			<div className='flex flex-col gap-4 text-white mt-10'>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Neque, libero doloremque quae necessitatibus autem, omnis
					tenetur animi aliquid id perferendis eligendi suscipit
					voluptatibus enim dolor, illo quibusdam ipsum quo facilis!
				</p>
				<div className='flex flex-col gap-2'>
					<Image
						src={'/blog/blog2.png'}
						alt='blog'
						width={700}
						height={200}
						className='object-cover w-full max-w-[800px] mx-auto h-[300px] rounded-xl mt-10'
					/>
					<span className='text-gray-500 text-sm font-medium text-center'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
					</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nam totam nesciunt corrupti sint molestiae! In fuga
					molestiae dignissimos officia. Saepe cumque iusto error
					modi, cupiditate quas nobis, consequatur corporis eligendi,
					necessitatibus impedit excepturi praesentium! Distinctio
					illum ipsum doloremque porro exercitationem.
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Rem incidunt officia natus eveniet debitis excepturi nam
					consequatur, est dolores error? Optio excepturi consequatur
					fugiat impedit aspernatur repellendus distinctio qui, culpa
					deserunt ipsam voluptate rerum rem assumenda cupiditate.
					Quam at recusandae maxime aperiam nisi dicta incidunt
					reiciendis vel? Modi, eos cumque.
				</p>
				<div className='flex flex-col gap-2'>
					<Image
						src={'/blog/blog4.png'}
						alt='blog'
						width={700}
						height={200}
						className='object-cover w-full max-w-[800px] mx-auto h-[300px] rounded-xl mt-10'
					/>
					<span className='text-gray-500 text-sm font-medium text-center'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
					</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aspernatur, autem corporis. Ratione harum repellendus
					praesentium nam! A autem illum, doloremque dolore dolorem
					repudiandae ratione. Sed dicta earum est at, fugiat quidem
					facilis pariatur nobis voluptatem veniam eius? Voluptas,
					molestias ex sed numquam tenetur optio laboriosam odit
					aperiam iure aspernatur laudantium, ipsum voluptates natus
					soluta dolorum reiciendis sequi! Commodi, ullam delectus.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Obcaecati numquam suscipit, cupiditate animi dolorem aperiam
					qui impedit sit alias facere! Dolore laudantium voluptates
					nemo iste minus cumque officia voluptatibus sit
					reprehenderit, modi explicabo adipisci nihil a perferendis
					ipsa cupiditate repellendus quos recusandae sint. Laudantium
					vitae deserunt, itaque cupiditate dicta excepturi ea ipsam
					iste assumenda tempore, amet nisi maiores hic enim, rem id
					eveniet esse nam dolorem quae voluptatum doloribus facilis
					odit molestias! Quisquam maiores nemo modi officia,
					voluptatum deleniti id facilis rem eos in doloremque soluta!
					Cumque vitae eaque architecto delectus doloribus recusandae
					enim expedita vel ut quam? Fugiat, ipsa.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Provident quibusdam repudiandae quis ipsam facere sed?
					Tempore, consectetur. Voluptate architecto in similique quae
					eligendi veniam culpa mollitia fuga eveniet laudantium natus
					repellat distinctio quo voluptatum perspiciatis quibusdam
					aliquid, beatae cum possimus, suscipit quam excepturi esse
					laborum! Illum incidunt eveniet cumque est labore, porro
					consectetur dolore placeat fugit. Dolorem natus architecto
					tempore ducimus veniam at aliquam corporis asperiores
					nesciunt porro qui molestias reprehenderit, nobis ad, dicta
					sed totam. Ex laudantium delectus commodi in nisi obcaecati
					sapiente distinctio dolorem maxime dolorum deserunt impedit
					ab, nemo, aut illum? Voluptatem iusto fugit necessitatibus
					quasi vitae molestias quas cupiditate praesentium explicabo
					culpa temporibus, maiores, ipsum sunt veritatis neque
					consectetur delectus reiciendis? Itaque dicta et cupiditate
					vitae!
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Dolores nihil voluptates perferendis ad reprehenderit quas
					consequatur architecto impedit quasi amet.
				</p>
			</div>
		</>
	)
}

export default MainBlog
