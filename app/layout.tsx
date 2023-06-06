import { Kumbh_Sans, Roboto_Mono } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})
const kumbhSans = Kumbh_Sans({
	subsets: ['latin'],
	variable: '--font-kumbh-sans',
})

export const metadata = {
	title: {
		default: 'Blog | Cynthia Mahofa',
		template: '%s | Cynthia Mahofa',
	},
	description: 'For prose all things technical and maybe not so technical.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${robotoMono.variable} ${kumbhSans.variable} font-sans`}
			>
				<Header />

				<main className='min-h-screen max-w-6xl mx-auto px-6 md:px-10'>
					{children}
				</main>

				<Footer />

				<ScrollToTop />
			</body>
		</html>
	)
}
