import { Meta, StoryObj } from '@storybook/react'

import BlogPostPreview from '.'

const meta: Meta<typeof BlogPostPreview> = {
	title: 'Components/BlogPostPreview',
	component: BlogPostPreview,
}

export default meta
type Story = StoryObj<typeof BlogPostPreview>

export const Default: Story = {}
