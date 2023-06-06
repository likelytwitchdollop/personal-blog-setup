'use client'

import React from 'react'
import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

const ScrollToTop = () => {
	const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

	useEffect(() => {
		const toggleScrollToTopButton = () => {
			if (window.scrollY >= 500 && !showScrollToTopButton) {
				setShowScrollToTopButton(true)
			}

			if (window.scrollY < 500 && showScrollToTopButton) {
				setShowScrollToTopButton(false)
			}
		}

		window.addEventListener('scroll', toggleScrollToTopButton)

		return () => {
			window.removeEventListener('scroll', toggleScrollToTopButton)
		}
	})

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<AnimatePresence>
			{showScrollToTopButton && (
				<motion.button
					type='button'
					onClick={scrollToTop}
					className='fixed text-2xl bottom-8 right-6 md:right-16'
					initial={{ opacity: 0 }}
					animate={{ opacity: 100 }}
					exit={{ opacity: 0 }}
				>
					<span className='sr-only'>Scroll to top</span>👆🏾
				</motion.button>
			)}
		</AnimatePresence>
	)
}

export default ScrollToTop
