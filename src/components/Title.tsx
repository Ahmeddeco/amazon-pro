import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
	title: string
	className?: string
}

const Title = ({ title, className }: Props) => {
	return (
		<h2
			className={cn(
				'text-3xl font-semibold pb-5 border-b border-b-zinc-400 capitalize',
				className
			)}
		>
			{title}
		</h2>
	)
}

export default Title
