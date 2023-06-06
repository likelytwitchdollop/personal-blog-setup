import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
	const fileNames = fs.readdirSync(postsDirectory)

	const allPostsData = fileNames
		.filter((fileName) => {
			return fileName.endsWith('.md')
		})
		.map((fileName) => {
			const slug = fileName.replace(/\.md$/, '')

			const fullPath = path.join(postsDirectory, fileName)
			const fileContents = fs.readFileSync(fullPath, 'utf-8')

			const blogPostMatter = matter(fileContents)

			const blogPost: BlogPost = {
				slug,
				title: blogPostMatter.data.title,
				subtitle: blogPostMatter.data.subtitle,
				summary: blogPostMatter.data.summary || '',
				date: blogPostMatter.data.date,
				tags: blogPostMatter.data.tags.split(';'),
				url: `https://cynthiamahofa.vercel.com/posts/${slug}`,
			}

			return blogPost
		})

	return allPostsData.sort((a, b) => {
		return a.date < b.date ? 1 : -1
	})
}

export const getPostData = async (slug: string) => {
	const fullPath = path.join(postsDirectory, `${slug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf-8')

	const blogPostMatter = matter(fileContents)

	const processedContent = await remark()
		.use(html)
		.process(blogPostMatter.content)

	const contentHtml = processedContent.toString()
	const blogPostWithHtml: BlogPost & { contentHtml: string; content: string } =
		{
			slug,
			title: blogPostMatter.data.title,
			subtitle: blogPostMatter.data.subtitle,
			summary: blogPostMatter.data.summary || '',
			date: blogPostMatter.data.date,
			tags: blogPostMatter.data.tags.split(';'),
			url: `https://cynthiamahofa.vercel.com/posts/${slug}`,
			contentHtml,
			content: blogPostMatter.content,
		}

	return blogPostWithHtml
}
