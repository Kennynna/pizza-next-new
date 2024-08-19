import { updateCartTotalAmount } from '@/lib/update-cart-total-amount'
import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const id = Number(params.id)
		const data = (await req.json()) as { quantity: number }

		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' })
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id: id,
			},
		})
		if (!cartItem) {
			return NextResponse.json({ error: 'Cart token not found' })
		}

		await prisma.cartItem.update({
			where: {
				id: id,
			},
			data: {
				quantity: data.quantity,
			},
		})

		const updateUserCart = await updateCartTotalAmount(token)

		return NextResponse.json(updateUserCart)
	} catch (error) {
		console.error('[CART-PATCH]', error)
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const id = Number(params.id)
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' })
		}
		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id,
			},
		})
		if (!cartItem) {
			return NextResponse.json({ error: 'Cart CartItem not found' })
		}

		await prisma.cartItem.delete({
			where: {
				id,
			},
		})
		const updateUserCart = await updateCartTotalAmount(token)
		return NextResponse.json(updateUserCart)
	} catch (error) {
		console.log(`[Cart-DELETE] server error`, error)
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
	}
}
