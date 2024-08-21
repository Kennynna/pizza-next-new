'use client'
import React from 'react'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { ChooseProductForm } from '@/shared/components/shared/index'
import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '@/@types/prisma'
import { cn } from '@/lib/utils'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { useCartStore } from '@/shared/store'
import toast from 'react-hot-toast'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseModalProduct: React.FC<Props> = ({ className, product }) => {
	const router = useRouter()
	const isPizzaFrom = Boolean(product.items[0].pizzaType)
	const firstItem = product.items[0]
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading,
	])

	const onSubmit = async (productItemId?: number, ingredients?: number[]): Promise<void> => {
		try {
			const itemId = productItemId ?? firstItem.id
			await addCartItem({
				productItemId: itemId,
				ingredients,
			})
			toast.success('Товар добавлен в корзину')
			router.back()
		} catch (error) {
			toast.error('Произошла ошибка при добавлении в корзину')
			console.error(error)
		}
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
						onSubmit={onSubmit}
						loading={loading}
					/>
				) : (
					<ChooseProductForm
						name={product.name}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
						onSubmit={onSubmit}
						price={firstItem.price}
						loading={loading}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
