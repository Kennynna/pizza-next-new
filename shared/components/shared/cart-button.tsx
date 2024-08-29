'use client'
import React from 'react'
import { Button } from '../ui'
import { ArrowRight, ShoppingBasket, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CartDrawer } from './cart-drawer'
import { useCartStore } from '@/shared/store'

interface Props {
	className?: string
	hasCart: boolean
}

export const CartButton: React.FC<Props> = ({ className, hasCart }) => {
	const [totalAmount, loading, items] = useCartStore(state => [
		state.totalAmount,
		state.loading,
		state.items,
	])
	return (
		<CartDrawer>
			<div className={cn('flex items-center gap-5', className)}>
				<Button
					variant={'outline'}
					className='uppercase flex items-center gap-3'
				>
					<User size={16} />
					<b>Войти</b>
				</Button>

				{hasCart && (
					<div className='flex items-center gap-3'>
						<Button
							loading={loading}
							variant={'default'}
							className='group relative flex items-center'
						>
							<b>{totalAmount}</b>
							<span className='h-full w-[1px] bg-white mx-3'></span>
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingBasket className='h-4 w-4 relative' strokeWidth={2} />
								<b>{items.length}</b>
							</div>
							<ArrowRight
								size={20}
								className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				)}
			</div>
		</CartDrawer>
	)
}
