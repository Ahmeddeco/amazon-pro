import Container from '@/components/Container'
import Product from '@/components/Product'
import { getWatches } from '@/helpers'

export default async function PhonesPage() {
	const products = await getWatches()

	return (
		<Container>
			<div className='border-b border-b-zinc-400 flex items-center justify-between'>
				<h2 className='capitalize'>Watches</h2>
				<p className='capitalize'>get the Watches you want</p>
			</div>
			<p className='capitalize mt-4 text-zinc-500 font-semibold'>
				showing all {products.length} results
			</p>
			<Product products={products} />
		</Container>
	)
}
