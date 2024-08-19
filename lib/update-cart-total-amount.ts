import { prisma } from '@/prisma/prisma-client'
import { Api } from '@/shared/services/api-client'
import { calcCartItemTotalAmount } from './calc-cart-item-total-amount'

export const updateCartTotalAmount = async (token: string) => {
	const userCart = await prisma.cart.findFirst({
		where: {
			tokenId: token,
		},
		include: {
			items: {
				orderBy: {
					createdAt: 'desc',
				},
				include: {
					productItem: {
						include: {
							product: true,
						},
					},
					ingredients: true,
				},
			},
		},
	})	

	console.log(userCart)
	if (!userCart) {
		return 0
	}
	const totalAmount = userCart.items.reduce((acc, item) => {
		return acc + calcCartItemTotalAmount(item)
	}, 0)
	return await prisma.cart.update({
		where: {
			id: userCart.id,
		},
		data: {
			totalAmount,
		},
		include: {
			items: {
				orderBy: {
					createdAt: 'desc',
				},
				include: {
					productItem: {
						include: {
							product: true,
						},
					},
					ingredients: true,
				},
			},
		},
	})
}
