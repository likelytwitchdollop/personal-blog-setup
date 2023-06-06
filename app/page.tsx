import BlogPostPreview from '@/components/BlogPostPreview'
import { getSortedPostsData } from '@/utils/posts'

export default function Home() {
	const sortedPosts = getSortedPostsData()

	return (
		<>
			<h1 className='font-bold text-[80px] mb-16'>articles</h1>

			<section>
				<ul>
					{sortedPosts.map((blogPost) => {
						return (
							<li key={blogPost.slug}>
								<BlogPostPreview post={blogPost} />
							</li>
						)
					})}
				</ul>
			</section>
		</>
	)
}
