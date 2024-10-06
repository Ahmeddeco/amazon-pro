import { getProducts } from '@/helpers'
import { ProductType } from '../../../type'
import Container from '@/components/Container'
import Image from 'next/image'
import FormattedPrice from '@/components/FormattedPrice'

export default async function ProductPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const products = await getProducts()
	const _id = Number(searchParams._id)

	const singleProduct = (_id: number) => {
		const item = products.find((product: ProductType) => product._id === _id)
		return item
	}

	const product = singleProduct(_id)

	return (
		<Container className='flex gap-10 md:gap-0 items-center flex-col md:flex-row px-4 xl:px-0'>
			<div className='w-full md:w-1/2 overflow-hidden bg-zinc-50 flex items-center justify-center p-10'>
				<Image
					src={product?.image}
					alt={product?.title}
					width={500}
					height={500}
					className='transform transition-transform hover:scale-110 duration-500 ease-in-out'
				/>
			</div>
			<div className='w-full md:w-1/2 flex flex-col gap-2'>
				<h2 className='text-3xl font-semibold'>{product?.title}</h2>
				<p className='flex items-center gap-10'>
					<FormattedPrice
						amount={product?.price}
						className='text-lg font-semibold'
					/>
					<FormattedPrice
						amount={product?.previousPrice}
						className='text-zinc-500 line-through'
					/>
				</p>
				<p className='capitalize '>
					you saved{' '}
					<FormattedPrice
						amount={product?.previousPrice - product?.price}
						className='bg-designColor text-base font-semibold underline underline-offset-2'
					/>{' '}
					from this product.
				</p>
				{product?.isNew && (
					<p className='capitalize text-designColor font-semibold'>
						new arrival
					</p>
				)}
				<p className=''>
					Brand : <span className='font-semibold'>{product?.brand}</span>
				</p>
				<p className=''>
					Brand : <span className='font-semibold'>{product?.category}</span>
				</p>
				<p className=''>{product?.description}</p>
				<button className='bg-designColor/80 text-zinc-700 px-6 py-2 font-medium rounded-md hover:bg-designColor hover:text-black duration-300 hover:shadow-lg w-40 my-2'>
					add to cart
				</button>
			</div>
		</Container>
	)
}
