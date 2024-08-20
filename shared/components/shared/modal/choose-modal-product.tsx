'use client'
import React from 'react'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { ChooseProductForm } from '@/shared/components/shared/index'
import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '@/@types/prisma'
import { cn } from '@/lib/utils'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { useCartStore } from '@/shared/store'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseModalProduct: React.FC<Props> = ({ className, product }) => {
	const router = useRouter()
	const isPizzaFrom = Boolean(product.items[0].pizzaType)
	const firstItem = product.items[0]
	const addCartItem = useCartStore(state => state.addCartItem)

	const onAddProduct = () => {
		addCartItem({
			productItemId: firstItem.id,
		})
		router.back()
	}

	const onAddPizza = (productItemId: number, ingredients: number[]) => {
		console.log("awsdaw")
		addCartItem({
			productItemId,
			ingredients,
		})
		router.back()
	}
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
						onSubmit={onAddPizza}
					/>
				) : (
					<ChooseProductForm
						name={product.name}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
						onSubmit={onAddProduct}
						price={firstItem.price}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
// не получилось добавить товар в корзину