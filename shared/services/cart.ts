import { axiosInstance } from './instance'
import { CartDTO } from './dto/cart.dto'

export const getCart = async (): Promise<CartDTO> => {
	return (await axiosInstance.get<CartDTO>('/cart')).data
}

export const updateItemQuantity = async (
	IteIid: number,
	quantity: number
): Promise<CartDTO> => {
	return (
		await axiosInstance.put<CartDTO>(`/cart/${IteIid}`, {
			quantity,
		})
	).data
}
