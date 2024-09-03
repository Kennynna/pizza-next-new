'use client'
import React from 'react'
import {
	CheckoutItemSkeleton,
	CartItem,
	Title,
	WhiteBlock,
} from '@/shared/components/shared/'
import { Input, Textarea } from '@/shared/components/ui'
import { useCart } from '@/shared/hooks/use-cart'
import { getCartItemsDetails } from '@/lib'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { CheckoutSidebar } from '@/shared/components/shared/checkout-slidebar'

interface Props {
	className?: string
}

const Checkout: React.FC<Props> = ({ className }) => {
	const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
		useCart()

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	const [initialLoading, setInitialLoading] = React.useState(true)

	React.useEffect(() => {
		if (!loading) {
			setInitialLoading(false)
		}
	}, [loading])

	return (
		<div className='mt-5'>
			<Title
				text='Оформление заказа'
				className='font-extrabold mb-8 text-[36px]'
			/>
			<div className='flex gap-10'>
				{/* Left */}
				<div className='flex flex-col gap-10 flex-1 mb-20'>
					<WhiteBlock title='Доставка'>
						{!initialLoading
							? items.map(item => (
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
							: [1, 2, 3].map((item, index) => (
									<>
										<CheckoutItemSkeleton key={index} />
									</>
							  ))}
					</WhiteBlock>

					<WhiteBlock title='Персональная информация'>
						<div className='grid grid-cols-2 gap-2'>
							<Input name='firstName' placeholder='Имя' className='text-base' />
							<Input
								name='lastName'
								placeholder='Фамилия'
								className='text-base'
							/>
							<Input name='email' placeholder='E-mail' className='text-base' />
							<Input
								name='phone'
								placeholder='Телефон'
								className='text-base'
								type='tel'
							/>
						</div>
					</WhiteBlock>

					<WhiteBlock title='Адрес доставки'>
						<div className='flex flex-col gap-5'>
							<Input
								name='firstName'
								placeholder='Введите адрес...'
								className='text-base'
							/>
							<Textarea
								rows={5}
								className='text-base'
								placeholder='Комментарий к заказу'
							/>
						</div>
					</WhiteBlock>
				</div>

				{/* Right */}
				<div className='w-[450px]'>
					<CheckoutSidebar totalAmount={totalAmount} />
				</div>
			</div>
		</div>
	)
}
export default Checkout
