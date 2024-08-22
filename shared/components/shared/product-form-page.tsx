'use client'
import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import React from 'react'
import toast from 'react-hot-toast'
import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-prduct-form'

interface Props {
	className?: string
	product: ProductWithRelations
	_onsubmit?: VoidFunction
}

export const ProductFormPage: React.FC<Props> = ({
	className,
	product,
	_onsubmit,
}) => {
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading,
	])
	const isPizzaFrom = Boolean(product.items[0].pizzaType)
	const firstItem = product.items[0]
	const onSubmit = async (
		productItemId?: number,
		ingredients?: number[]
	): Promise<void> => {
		try {
			const itemId = productItemId ?? firstItem.id
			await addCartItem({
				productItemId: itemId,
				ingredients,
			})
			toast.success('Товар добавлен в корзину')
			_onsubmit?.()
		} catch (error) {
			toast.error('Произошла ошибка при добавлении в корзину')
			console.error(error)
		}
	}
	if (isPizzaFrom) {
		return (
			<ChoosePizzaForm
				name={product.name}
				imageUrl={product.imageUrl}
				ingredients={product.ingredients}
				items={product.items}
				onSubmit={onSubmit}
				loading={loading}
			/>
		)
	}
	return (
		<ChooseProductForm
			name={product.name}
			imageUrl={product.imageUrl}
			ingredients={product.ingredients}
			onSubmit={onSubmit}
			price={firstItem.price}
			loading={loading}
		/>
	)
}
