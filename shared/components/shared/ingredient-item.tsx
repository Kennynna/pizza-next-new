import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
	imageUrl: string
	price: number
	active?: boolean
	onClick?: () => void
	name: string
	
}

export const IngredientItem: React.FC<Props> = ({
	className,
	onClick,
	active,
	price,
	name,
	imageUrl,
}) => {
	return (
		<div
			className={cn(
				'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
				{ 'border border-primary': active },
				className
			)}
			onClick={onClick}
		>
			{active && (
				<CircleCheck className='absolute right-1 top-1 text-primary' />
			)}
			<img src={imageUrl} width={110} height={110} alt={name} />
			<p className='font-extrabold'>
				{price}
				<span> ₽</span>
			</p>
		</div>
	)
}
