'use client'
import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemsDetails } from '@/lib'

interface Props {
	className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	children,
}) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
				<SheetHeader>
					<SheetTitle>
						В корзине <span className='font-bold'> 3 товара </span>
					</SheetTitle>
				</SheetHeader>
				<div className='-mx-6 mt-5 overflow-auto flex-1 scrollbar'>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
					<div className='mb-2'>
						<CartDrawerItem
							id={1}
							imageUrl={
								'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
							}
							details={getCartItemsDetails(2, 20, [
								{ name: 'цыпленок' },
								{ name: 'сыр' },
							])}
							name={'dasdwad'}
							price={123}
							quantity={1}
						/>
					</div>
				</div>

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-5'>
							<span className='flex flex-1 text-lg text-neutral-500'>
								Итого
								<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
							</span>

							<span className='font-bold text-lg '>500 ₽ </span>
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
