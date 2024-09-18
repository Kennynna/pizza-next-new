'use server'

import { prisma } from '@/prisma/prisma-client'
import { CheckoutFormValues } from '@/shared/components/shared/checkout/schemas/checkout-form-schema'
import { OrderStatus } from '@prisma/client'
import { cookies } from 'next/headers'
import { use } from 'react'

//Серверная функция . Они ничего не возвращает в рамках данных. Ее мы юзаем для того чтобы он вернул ссылку на оплату
export async function createOrder(data: CheckoutFormValues) {
	try {
		const cookiesStore = cookies()
		const cartToken = cookiesStore.get('cartToken')?.value

		if (!cartToken) {
			return
		}
    //Находим корзину по токену
		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true,
							},
						},
					},
				},
			},

			where: {
				token: cartToken,
			},
		})

		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty')
		}

    //Создаем заказ в БД 
		const order = await prisma.order.create({
			data: {
				fullName: data.firstName + data.lastName,
				token: cartToken,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart?.items),
			},
		})

    //Обновляем статус корзины в БД 
    //Это нужно для того чтобы корзина не была видна пользователю во время оформления заказа
		await prisma.cart.update({
			where: {
				id: userCart?.id,
			},
			data: {
				totalAmount: 0,
			},
		})
//Очищаем корзину
    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart?.id,
      },
    })
	} catch (error) {}
}
