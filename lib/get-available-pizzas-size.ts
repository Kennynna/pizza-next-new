import { Variant } from '@/shared/components/shared/group-variants'
import { PizzaType, pizzaSizes } from './../shared/constants/pizza'
import { ProductItem } from '@prisma/client'

export const getAvailablePizzasSize = (
	type: PizzaType,
	items: ProductItem[]
): Variant[] => {
	const filteredPizzasByType = items.filter(item => item.pizzaType === type)
	return pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filteredPizzasByType.some(
			pizza => Number(pizza.size) === Number(item.value)
		),
	}))
}
