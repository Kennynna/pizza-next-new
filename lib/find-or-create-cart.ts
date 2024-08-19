import { prisma } from '@/prisma/prisma-client'

export const findOrCreateCart = async (token: string) => {
	let userCart = await prisma.cart.findFirst({
		where: {
			tokenId: token,
		},
	})

	if (!userCart) {
		try {
			await prisma.cart.create({
				data: {
					tokenId: token,
				},
			})
		} catch (error) {}
	}
	return userCart
}
