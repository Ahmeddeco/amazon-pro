import Container from '@/components/Container'
import Product from '@/components/Product'
import { getPhones } from '@/helpers'

export default async function PhonesPage() {
	const products = await getPhones()

	return (
		<Container>
			<div className='border-b border-b-zinc-400 flex items-center justify-between'>
				<h2 className='capitalize'>phones</h2>
				<p className='capitalize'>get the phone you want</p>
			</div>
			<p className='capitalize mt-4 text-zinc-500 font-semibold'>
				showing all {products.length} results
			</p>
			<Product products={products} />
		</Container>
	)
}
