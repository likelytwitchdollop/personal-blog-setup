'use client'

import React from 'react'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

type MarkdownProps = {
	content: string
}

const Markdown = ({ content }: MarkdownProps) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				code({ node, inline, className, style, children, ...props }) {
					const match = /language-(\w+)/.exec(className || '')
					return !inline && match ? (
						<SyntaxHighlighter style={prism} language={match[1]} {...props}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					)
				},
			}}
			className={`prose prose-lg max-w-none mb-12 py-10 prose-code:bg-black-50 prose-code:rounded prose-code:font-mono prose-code:after:content-none prose-code:before:content-none prose-code:text-red-500 prose-code:font-normal proce-code:text-[10px] prose-code:px-1.5 prose-h2:text-lg prose-h2:before:content-['--'] prose-pre:bg-[#F5F2F0] prose-blockquote:font-normal prose-blockquote:not-italic`}
		>
			{content}
		</ReactMarkdown>
	)
}

export default Markdown
