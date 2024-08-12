import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client'
/**  Функция подсчета общей стоимости пиццы
* @param items  - список пицц
* @param size  - размер пиццы
* @param type  - тип пиццы
* @param ingredients  - ингредиенты
* @param selectedIngredients  - выбранные ингредиенты
* @return number итоговая стоимость 
*/
export const calcTotalPizzaPrice = (
	items: ProductItem[],
	ingredients: Ingredient[],
	size: PizzaSize,
	type: PizzaType,
	selectedIngredients: Set<number>
) => {
	const pizzaPrice =
		items.find(item => item.pizzaType === type && item.size === size)?.price ||
		0
	//Прайс от вариации дополнительных ингредиентов
	const totalIngredients = ingredients
		.filter(item => selectedIngredients.has(item.id))
		.reduce((acc, item) => acc + item.price, 0)

	return pizzaPrice + totalIngredients
}
