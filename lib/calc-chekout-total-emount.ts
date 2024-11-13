import { CartItem } from '@prisma/client'

interface ReturnProps {
	finalTotal?: number
	percentages: number
	delivery: number
}

export const calcCheckoutTotal = (totalAmount: number): ReturnProps => {
	let percentages = Math.floor((15 / 100) * totalAmount)
	let delivery = 300
	let finalTotal = totalAmount && totalAmount + percentages + delivery

	return {
		finalTotal,
		percentages,
		delivery,
	}
}
