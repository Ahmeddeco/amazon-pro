import { cn } from '@/lib/utils'
import Link from 'next/link'

const Logo = ({ className, spanClassName }: any) => {
	return (
		<Link href='/' className={cn('text-zinc-950 text-xl underline underline-offset-4 decoration-1 group',className)}>
			<span className={cn('bg-zinc-950 text-white text-2xl w-8 h-8 rounded-full inline-flex items-center justify-center')}>A</span>mazonpro
		</Link>
	)
}

export default Logo
