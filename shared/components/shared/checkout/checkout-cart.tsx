import React from 'react'
import { WhiteBlock } from '../white-block'
import { CheckoutItemSkeleton } from '../checkout-item-skeleton'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { getCartItemsDetails } from '@/lib/get-cart-item-details'
import { CartStateItem } from '@/lib/get-cart-details'
import { CartItem } from '../cart-item'

interface CheckoutCartProps {
	items: CartStateItem[]
	loading: boolean
	initialLoading: boolean
	onClickCountButton: (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => void
	removeCartItem: (id: number) => void
}

export const CheckoutCart: React.FC<CheckoutCartProps> = ({
	items,
	loading,
	initialLoading,
	onClickCountButton,
	removeCartItem,
}) => {
	return (
		<WhiteBlock title='Доставка'>
			{!initialLoading
				? items?.map(item => (
						<>
							<CartItem
								key={item.id}
								removeCartItem={() => removeCartItem(item.id)}
								id={item.id}
								imageUrl={item.imageUrl}
								details={getCartItemsDetails(
									item.ingredients,
									item.pizzaType as PizzaType,
									item.pizzaSize as PizzaSize
								)}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								disabled={loading}
							/>
						</>
				  ))
				: [1].map((_, index) => <CheckoutItemSkeleton key={index} />)}
		</WhiteBlock>
	)
}
