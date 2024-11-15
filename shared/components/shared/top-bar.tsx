import { cn } from '@/lib/utils'
import React from 'react'
import { Container, Categories, SortPopup } from './index'
import { Category } from '@prisma/client'

interface Props {
	className?: string
	categories: Category[]
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
				className
			)}
		>
			<Container className='flex items-center justify-between'>
				<Categories className='mt-5' items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
