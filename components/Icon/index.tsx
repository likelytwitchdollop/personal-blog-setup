'use client'

import { useEffect } from 'react'

import * as eva from 'eva-icons'

/* eslint-disable react/require-default-props */
type IconProps = {
	name: string
	size?: 'sm' | 'lg'
	animation?: 'shake'
}

const Icon = ({ name, size = 'sm', animation }: IconProps) => {
	useEffect(() => {
		eva.replace()
	})

	const SIZES = {
		sm: 24,
		lg: 32,
	}

	return (
		<i
			data-eva={name}
			data-eva-animation={animation}
			data-eva-height={SIZES[size]}
			data-eva-width={SIZES[size]}
			className='hover:cursor-pointer'
		/>
	)
}

export default Icon
