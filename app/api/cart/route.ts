import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { findOrCreateCart } from '@/lib'
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto'
import { updateCartTotalAmount } from '@/lib/update-cart-total-amount'
export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value
		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await prisma.cart.findFirst({
			where: {
				OR: [
					{
						tokenId: token,
					},
				],
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

		return NextResponse.json(userCart)
	} catch {
		console.log(`CART-GET server error`)
	}
}

export async function POST(req: NextRequest) {
	try {
		let token = req.cookies.get('cartToken')?.value
		if (!token) {
			token = crypto.randomUUID()
		}

		let userCart = await findOrCreateCart(token)
		const data = (await req.json()) as CreateCartItemValues
		console.log('userCart', userCart)

		const findCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId: userCart.id,
				productItemId: data.productItemId,
				ingredients: { every: { id: { in: data.ingredients } } },
			},
		})
			console.log('62 строка' ,findCartItem)

		//Если товар был наден делаем +1
		if (findCartItem) {
			const updatedCartItem = await prisma.cartItem.update({
				where: {
					id: findCartItem.id,
				},
				data: {
					quantity: findCartItem.quantity + 1,
				},
			})
			const resp = NextResponse.json(updatedCartItem)
			resp.cookies.set('cartToken', token)
			console.log('75 строка', resp)
			return resp
		}

		console.log('товар был не найден')
		//Если товар не найден
		await prisma.cartItem.create({
			data: {
				cartId: userCart.id,
				productItemId: data.productItemId,
				quantity: 1,
				ingredients: { connect: data.ingredients?.map(id => ({ id })) },
			},
		})

		console.log()

		const updateUserCart = updateCartTotalAmount(token)
		console.log(updateUserCart)
		const res = NextResponse.json(updateUserCart)
		res.cookies.set('cartToken', token)
		return res

		
	} catch (error) {
		console.error(`CART-POST server error ${error}`)
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
	}
}
