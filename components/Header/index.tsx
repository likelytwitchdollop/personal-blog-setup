'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='h-[100px] flex flex-row justify-between items-center max-w-6xl mx-auto mb-20 px-6 md:px-10'>
			<motion.a
				initial={{ scale: 100 }}
				animate={{
					scale: 1,
					transition: {
						duration: 1,
					},
				}}
				href='https://cynthiamahofa.netlify.app/'
				className='block relative w-12 aspect-square rounded-full bg-black
        after:bg-black-100 after:w-full after:h-full after:rounded-full after:z-[-1] after:absolute after:top-0 after:right-0 after:opacity-0 after:transition after:duration-300 after:ease-out hover:after:opacity-100 hover:after:scale-[1.5]
        '
			>
				<span className='sr-only'>Home</span>
			</motion.a>

			<nav>
				<ul className='font-mono font-medium flex flex-row space-x-14'>
					<li className='hover:font-bold transition duration-300 ease-in-out'>
						<Link href='/'>.articles</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
