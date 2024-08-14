import { Ingredient } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { CartStateItem } from '@/shared/store'

export const getCartItemsDetails = (
	ingredients: CartStateItem['ingredients'],
	pizzaType: PizzaType,
	pizzaSize: PizzaSize
): string => {
	const details = []
	
	if (pizzaSize && pizzaType) {
		const typeName = mapPizzaType[pizzaType]
		details.push(`${typeName} ${pizzaSize} см`)
	}

	if (ingredients) {
		details.push(...ingredients.map(ingredient => ingredient.name))
	}
	console.log(details)
	console.log("ДЕТАЛИ")
	return details.join(', ')
}
