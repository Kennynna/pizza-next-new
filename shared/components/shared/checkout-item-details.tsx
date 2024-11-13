import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
	value?: React.ReactNode
	title?: React.ReactNode | string
}

export const CheckoutItemDetails: React.FC<Props> = ({ className,value,title }) => {
	return (
		<div className={cn('flex my-4', className)}>
			<span className='flex-1 flex text lg text-neutral-500'>
				{title}
				<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
			</span>
			<span className='font-bold text-lg '>{value}</span>
		</div>
	)
}
