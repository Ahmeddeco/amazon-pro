import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'
import Footer from '@/components/Footer'
const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Amazon Pro',
	description: 'Ahmed design by Next-js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen font-sans antialiased bgDesign',
					geistSans.className
				)}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
