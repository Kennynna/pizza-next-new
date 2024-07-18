'use client'
import { cn } from '@/lib/utils'
import React from 'react'
interface Props {
	className?: string
}

const cats = [
	'Пиццы',
	'Комбо',
	'Закуски',
	'Десерты',
	'Напитки',
	'Наборы',
	'Коктейли',
]

export const Categories: React.FC<Props> = ({ className }) => {
	const [activeIndex, setActiveIndex] = React.useState(0)
	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{cats.map((item, index) => (
				<a
					onClick={() => setActiveIndex(index)}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeIndex === index &&
							'bg-white shadow-md shadow-gray-200 text-orange-400'
					)}
					href={`/#${item}`}
					key={index}
				>
					<button>{item}</button>
				</a>
			))}
		</div>
	)
}
