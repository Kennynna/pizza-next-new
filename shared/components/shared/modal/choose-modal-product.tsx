'use client'
import React from 'react'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { ChooseProductForm } from '@/shared/components/shared/index'
import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '@/@types/prisma'
import { cn } from '@/lib/utils'
import { ChoosePizzaForm } from '../choose-pizza-form'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseModalProduct: React.FC<Props> = ({ className, product }) => {
	const router = useRouter()
	const isPizzaFrom = Boolean(product.items[0].pizzaType)

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
			>
				{isPizzaFrom ? (
					<ChoosePizzaForm
						name={product.name}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
						items={product.items}
					/>
				) : (
					<ChooseProductForm
						name={product.name}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
