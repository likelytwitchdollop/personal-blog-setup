'use client'

import {
	EmailShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share'

import Icon from '@/components/Icon'

type SocialShareLinksProps = {
	post: BlogPost
}

const SocialShareLinks = ({ post }: SocialShareLinksProps) => {
	return (
		<div className='space-x-6'>
			<EmailShareButton
				url={post.url}
				subject={`Check out this blog post: ${post.title}`}
			>
				<Icon name='email' animation='shake' />
			</EmailShareButton>

			<TwitterShareButton
				url={post.url}
				title={post.title}
				hashtags={post.tags}
			>
				<Icon name='twitter' animation='shake' />
			</TwitterShareButton>

			<LinkedinShareButton
				url={post.url}
				title={post.title}
				summary={post.summary || post.subtitle}
			>
				<Icon name='linkedin' animation='shake' />
			</LinkedinShareButton>
		</div>
	)
}

export default SocialShareLinks
