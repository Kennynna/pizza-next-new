import { CartDTO } from '@/shared/services/dto/cart.dto'
import { calcCartItemTotalAmount } from './calc-cart-item-total-amount'
export type CartStateItem = {
	id: number
	quantity: number
	name: string
	imageUrl: string
	price: number
	disabled?: boolean
	pizzaSize?: number | null
	pizzaType?: number | null
	ingredients: Array<{ name: string; price: number }>
}

interface ReturnProps {
	items: CartStateItem[]
	totalAmount: number
}
// function for get cart details
export const getCartDetails = (data: CartDTO): ReturnProps => {
	const items = data.items.map(item => ({
		id: item.id,
		quantity: item.quantity,
		name: item.productItem.product.name,
		imageUrl: item.productItem.product.imageUrl,
		price: calcCartItemTotalAmount(item),
		pizzaSize: item.productItem.size,
		pizzaType: item.productItem.pizzaType,
		ingredients: item.ingredients?.map(ingredient => ({
			name: ingredient.name,
			price: ingredient.price,
		})),
		disabled: false,
	})) as CartStateItem[]
	
	return {
		items,
		totalAmount: data.totalAmount,
	}
}
