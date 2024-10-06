'use client'

import { usePathname } from 'next/navigation'
import Logo from './Logo'
import Link from 'next/link'
import { Heart, ShoppingBagIcon } from 'lucide-react'
import { navigation } from '@/constants/data'

const Navbar = () => {
	const pathname = usePathname()

	return (
		<header className='w-full h-20 border-b border-b-zinc-500 bg-white/80 text-zinc-600 sticky top-0 z-50 backdrop-blur-2xl'>
			<div className='max-w-screen-xl mx-auto flex items-center h-full justify-between px-4 xl:px-0'>
				{/* Logo */}
				<Logo />
				<nav className=''>
					{/* Navigation */}
					<ul className='hidden md:flex gap-5 items-center text-sm uppercase font-semibold'>
						{navigation.map(({ _id, href, title }) => {
							return (
								<Link href={href} key={_id}>
									<li
										className={`hover:text-black duration-300 relative overflow-hidden group ${
											href === pathname && 'text-designColor'
										}`}
									>
										{title}
										<span
											className={`absolute h-px w-full bg-blue-700 left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${
												href === pathname && 'translate-x-0 bg-designColor'
											}`}
										/>
									</li>
								</Link>
							)
						})}
					</ul>
				</nav>
				{/* Icons */}
				<div className='flex items-center gap-x-5'>
					{/* Heart Icons */}
					<Link
						href={'/wishlist'}
						className='hover:text-black duration-300  group relative'
					>
						<Heart className='w-7 h-7' />
						<span className='absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white'>
							0
						</span>
					</Link>
					{/* ShoppingBagIcon Icons */}
					<Link
						href={'/wishlist'}
						className='hover:text-black duration-300  group relative'
					>
						<ShoppingBagIcon className='w-7 h-7' />
						<span className='absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white'>
							0
						</span>
					</Link>
					<button className='hover:text-black duration-300 relative overflow-hidden group text-sm uppercase font-semibold'>
						Login
						<span className='absolute h-px w-full bg-blue-700 left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500' />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navbar
