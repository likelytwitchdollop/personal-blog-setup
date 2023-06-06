import React from 'react'

import Link from 'next/link'

import utils from '@/utils'

type BlogPostPreviewProps = {
	post: BlogPost
}

const BlogPostPreview = ({ post }: BlogPostPreviewProps) => {
	const formattedDate = utils.getFormattedDate(post.date)

	return (
		<div className='border-b border-black py-4'>
			<Link href={`/posts/${post.slug}`}>
				<h2 className='text-[32px] hover:font-bold transition duration-300 ease-in-out'>
					{post.title}
				</h2>
			</Link>
			<p className='text-[#9A9A9A] text-[20px] mb-6'>{post.subtitle}</p>

			<div className='font-mono font-bold text-[14px] mb-2'>
				<span>{formattedDate}</span>
			</div>

			<div className='font-mono font-bold text-[14px] flex flex-row items-center justify-between'>
				<div className='space-x-6'>
					{post.tags.map((tag: string) => {
						return <span key={tag}>{tag}</span>
					})}
				</div>

				{/* <span className='text-[20px]'>👏🏾 0</span> */}
			</div>
		</div>
	)
}

export default BlogPostPreview
