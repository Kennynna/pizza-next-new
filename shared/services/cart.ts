import { axiosInstance } from './instance'
import { CartDTO, CreateCartItemValues } from './dto/cart.dto'

export const getCart = async (): Promise<CartDTO> => {
	return (await axiosInstance.get<CartDTO>('/cart')).data
}

export const updateItemQuantity = async (
	itemId: number,
	quantity: number
): Promise<CartDTO> => {
	return (
		await axiosInstance.patch<CartDTO>('/cart/' + itemId, {
			quantity,
		})
	).data
}

export const removeCartItem = async (
	id: number
) : Promise<CartDTO> => {
	return (await axiosInstance.delete<CartDTO>('/cart/' + id, {})).data
}


//для добавления товара в корзину
export const addCartItem = async (value: CreateCartItemValues): Promise<CartDTO> => {
	return (await axiosInstance.post<CartDTO>('/cart', value)).data
}
