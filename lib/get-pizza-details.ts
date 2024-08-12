import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'
import { Ingredient, ProductItem } from '@prisma/client'

export const PizzaDetails = (
	items: ProductItem[],
	ingredients: Ingredient[],
	size: PizzaSize,
	type: PizzaType,
	selectedIngredients: Set<number>
) => {
	const textDetails = `${size} см,   ${mapPizzaType[type]} тесто`

	const totalPrice = calcTotalPizzaPrice(
		items,
		ingredients,
		size,
		type,
		selectedIngredients
	)

	return { textDetails, totalPrice }
}
