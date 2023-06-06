import { notFound } from 'next/navigation'

import Markdown from './components/Markdown'
import SocialShareLinks from './components/SocialShare'

import utils from '@/utils'
import { getPostData, getSortedPostsData } from '@/utils/posts'

type PostPageProps = {
	params: {
		slug: string
	}
}

export const generateStaticParams = () => {
	const posts = getSortedPostsData()

	return posts.map((post) => {
		return { slug: post.slug }
	})
}

export const generateMetadata = ({ params }: PostPageProps) => {
	const { slug } = params

	const posts = getSortedPostsData()
	const post = posts.find((post) => {
		return post.slug === slug
	})

	if (!post) {
		return {
			title: 'Post Not Found',
		}
	}

	return {
		title: post.title,
	}
}

const PostPage = async ({ params }: PostPageProps) => {
	const { slug } = params

	const posts = getSortedPostsData()
	const post = posts.find((post) => {
		return post.slug === slug
	})

	if (!post) {
		return notFound()
	}

	const blogPost = await getPostData(slug)
	const formattedDate = utils.getFormattedDate(blogPost.date)

	return (
		<article>
			<header className='border-b border-black'>
				<h1 className='font-bold text-[56px] lg:text-[80px] mb-6 lg:mb-12 leading-none w-[80%]'>
					{blogPost.title}
				</h1>
				<h2 className='text-[20px] lg:text-[28px] text-primary-100 mb-4 lg:mb-2'>
					{blogPost.subtitle}
				</h2>

				<span className='block font-mono font-bold text-left lg:text-right text-[14px] mb-4'>
					{formattedDate}
				</span>
			</header>

			<Markdown content={blogPost.content} />

			<footer>
				<div className='font-mono font-bold space-x-6'>
					{blogPost.tags.map((tag: string) => {
						return <span key={tag}>{tag}</span>
					})}
				</div>

				<hr className='h-[3px] bg-black my-6' />

				<div className='flex flex-row justify-between items-center'>
					<SocialShareLinks post={blogPost} />

					{/*
            <button>
              <span className='sr-only'>Like</span>
              <span className='font-bold text-[24px]'>👏🏾 0</span>
            </button>
          */}
				</div>
			</footer>
		</article>
	)
}

export default PostPage
