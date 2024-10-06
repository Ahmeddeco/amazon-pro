import Container from './Container'
import Link from 'next/link'
import { PcCase, ScanFace, Smartphone, Watch } from 'lucide-react'
import Product from './Product'
import { getProducts } from '@/helpers'

const Products = async () => {
	const products = await getProducts()

	return (
		<section className='mt-10 mb-60'>
			<Container>
				<div className='flex flex-col gap-2 items-center '>
					<h2 className='text-3xl font-semibold '>choose a category</h2>
					<p className='text-lg text-center'>
						explore dozens of customized layouts made by our brilliant
						designers.
					</p>
					<div className='text-zinc-500 flex items-center gap-2 md:gap-6 mt-5'>
						<Link
							href={'/phones'}
							className='flex gap-2 hover:text-black duration-200'
						>
							<Smartphone />
							<p className=''>Phone</p>
						</Link>
						<div className='h-7 w-px bg-designColor inline-flex' />
						<Link
							href={'/phonecases'}
							className='flex gap-2 hover:text-black duration-200'
						>
							<PcCase />
							<p className=''>Phone Case</p>
						</Link>
						<div className='h-7 w-px bg-designColor inline-flex' />
						<Link
							href={'/watches'}
							className='flex gap-2 hover:text-black duration-200'
						>
							<Watch />
							<p className=''>Watch</p>
						</Link>
						<div className='h-7 w-px bg-designColor inline-flex' />
						<Link
							href={'/accessories'}
							className='flex gap-2 hover:text-black duration-200'
						>
							<ScanFace />
							<p className=''>Accessories</p>
						</Link>
					</div>
				</div>
				<Product products={products} />
			</Container>
		</section>
	)
}

export default Products
