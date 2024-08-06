'use client'
import { cn } from '@/lib/utils'
import { useSizeStore } from '@/store/pizza-size'
import React from 'react'

type Variant = {
	name: string
	value: string
	disabled?: boolean
}

interface Props {
	className?: string
	items: readonly Variant[]
	defaultValue?: string
	onClick?: (value: Variant['value']) => void
	selectedValue?: Variant['value']
}

export const GroupVariants: React.FC<Props> = ({
	className,
	items,
	defaultValue,
	onClick,
	selectedValue,
}) => {
	const pizzaSize = useSizeStore(state => state.setActiveSize)
	const pizzaSizeid = useSizeStore(state => state.activeSizeId)
	return (
		<div
			className={cn(
				className,
				'flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none'
			)}
		>
			{items.map(item => (
				<div
					key={item.name}
					onClick={() => pizzaSize(Number(item.value))}
					className={cn(
						'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
						{
							'bg-white shadow': Number(item.value) === pizzaSizeid,
							'text-gray-500 opacity-50 pointer-events-none': item.disabled,
						}
					)}
				>
					{item.name}
				</div>
			))}
		</div>
	)
}
