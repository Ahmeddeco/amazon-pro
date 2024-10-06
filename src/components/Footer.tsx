import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Link from 'next/link'
import { navigation } from '@/constants/data'

const Footer = () => {
	return (
		<footer className='bg-darkColor mt-10 py-10 text-zinc-300 w-screen'>
			<Container className='flex flex-col md:flex-row md:gap-0 gap-8 items-center justify-between '>
				<Logo className='text-white ' spanClassName='bg-white text-black' />
				<ul className='flex gap-6 items-center  justify-center lg:flex-row flex-col'>
					{navigation.map((item) => (
						<Link href={item?.href} className='' key={item?._id}>
							<li className='hover:text-white duration-300'>{item?.title}</li>
						</Link>
					))}
				</ul>
				<p className='text-right'>Join me with @reactdb.com</p>
			</Container>
		</footer>
	)
}

export default Footer
