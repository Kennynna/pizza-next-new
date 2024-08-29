'use client'
import React from 'react'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemsDetails } from '@/lib'
import { useCartStore } from '@/shared/store'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { Title } from './title'
import Image from 'next/image'
import { cartItemLengthText } from '@/lib/cart-item-length-text'
interface Props {
	className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	children,
}) => {
	const [
		totalAmount,
		fetchCartItems,
		items,
		updateItemQuantity,
		removeCartItem,
	] = useCartStore(state => [
		state.totalAmount,
		state.fetchCartItems,
		state.items,
		state.updateItemQuantity,
		state.removeCartItem,
	])

	React.useEffect(() => {
		fetchCartItems()
	}, [])

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	let itemsCartCount = cartItemLengthText(items.length)


	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
				{totalAmount > 0 && (
					<>
						<SheetHeader>
							<SheetTitle>
								В корзине{' '}
								<span className='font-bold'>
									{items?.length} {itemsCartCount}
								</span>
							</SheetTitle>
						</SheetHeader>
					</>
				)}

				{/* Если корзина пуста то */}
				{!totalAmount && (
					<div className='flex flex-col items-center justify-center w-72 mx-auto h-full'>
						<Image
							src='/assets/images/free_pizza.png'
							alt='Empty cart'
							width={120}
							height={120}
						/>
						<Title
							size='sm'
							text='Корзина пустая'
							className='text-center font-bold my-2'
						/>
						<p className='text-center text-neutral-500 mb-5'>
							Добавьте хотя бы одну пиццу, чтобы совершить заказ
						</p>

						<SheetClose>
							<Button className='w-56 h-12 text-base' size='lg'>
								<ArrowLeft className='w-5 mr-2' />
								Вернуться назад
							</Button>
						</SheetClose>
					</div>
				)}

				{totalAmount > 0 && (
					<>
						<div className='-mx-6 mt-5 overflow-auto flex-1 scrollbar'>
							{items?.map(item => (
								<CartDrawerItem
									className='mb-2'
									key={item.id}
									id={item.id}
									imageUrl={item.imageUrl}
									details={
										item.pizzaSize && item.pizzaType
											? getCartItemsDetails(
													item.ingredients,
													item.pizzaType as PizzaType,
													item.pizzaSize as PizzaSize
											  )
											: ''
									}
									name={item.name}
									price={item.price}
									quantity={item.quantity}
									onClickCountButton={type =>
										onClickCountButton(item.id, item.quantity, type)
									}
									removeCartItem={() => removeCartItem(item.id)}
									disabled={item.disabled}
								/>
							))}
						</div>
					</>
				)}

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-5'>
							<span className='flex flex-1 text-lg text-neutral-500'>
								Итого
								<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
							</span>

							<span className='font-bold text-lg '>{totalAmount} ₽ </span>
						</div>

						<Link href='/cart'>
							<Button type='submit' className='w-full h-12 text-base'>
								Оформить заказ
								<ArrowRight size={20} className='ml-2 w-5' />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
