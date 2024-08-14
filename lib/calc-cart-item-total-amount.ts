import { CartItemDTO } from "@/shared/services/dto/cart.dto";

export const calcCartItemTotalAmount = (item: CartItemDTO) => {
  const ingredientsPrice = item.ingredients.reduce(
		(acc, item) => acc + item.price,
		0
	)
  return  (ingredientsPrice+ item.productItem.price) * item.quantity;
}