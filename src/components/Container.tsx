import { cn } from '@/lib/utils'

type Props = {
	children: React.ReactNode
	className?: string
}

const Container = ({ children, className }: Props) => {
	return (
		<div
			className={cn('py-10 max-w-screen-xl px-4 xl:px-0 mx-auto', className)}
		>
			{children}
		</div>
	)
}

export default Container
