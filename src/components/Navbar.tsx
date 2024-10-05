import React from 'react'
import Logo from './Logo'

const Navbar = () => {
	return (
		<nav className='w-full h-20 border-b border-b-zinc-500 bg-white text-zinc-600'>
			<div className='max-w-screen-xl mx-auto flex items-center h-full'>
				{/* Logo */}
				<Logo />
				{/* Navigation */}
				{/* Icons */}
			</div>
		</nav>
	)
}

export default Navbar
