import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { Variant } from '@/shared/components/shared/group-variants'
import React from 'react'
import { useSet } from 'react-use'
import { getAvailablePizzasSize } from '@/lib'
import { ProductItem } from '@prisma/client'

interface ReturnProps {
	size: PizzaSize
	type: PizzaType
	setSize: (size: PizzaSize) => void
	setType: (type: PizzaType) => void
	selectedIngredients: Set<number>
	addIngredient: (id: number) => void
	availableSizes: Variant[]
	currentItemId?: number
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = React.useState<PizzaSize>(20)
	const [type, setType] = React.useState<PizzaType>(1)
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const currentItemId = items.find(item => item.pizzaType === type && item.size === size)?.id

	const availableSizes = getAvailablePizzasSize(type, items)

	React.useEffect(() => {
		const isAvailableSize = availableSizes?.find(
			item => Number(item.value) === size && !item.disabled
		)
		const availableSize = availableSizes?.find(item => !item.disabled)

		if (!isAvailableSize && availableSize) {
			setSize(Number(availableSize.value) as PizzaSize)
		}
	}, [type])

	return {
		size,
		type,
		currentItemId,
		setSize,
		setType,
		addIngredient,
		selectedIngredients,
		availableSizes,
	}
}
// qwerydda