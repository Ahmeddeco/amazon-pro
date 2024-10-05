import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
	className?: string
	spanClassName?: string
}

const Logo = ({ className, spanClassName }: Props) => {
	return (
		<Link
			href='/'
			className={cn(
				'text-zinc-950 text-xl underline underline-offset-4 decoration-1 group',
				className
			)}
		>
			<span
				className={cn(
					'bg-zinc-950 text-white text-2xl w-8 h-8 rounded-full inline-flex items-center justify-center font-bold mr-1 group-hover:bg-blue-700',
					spanClassName
				)}
			>
				A
			</span>
			mazonpro
		</Link>
	)
}

export default Logo
