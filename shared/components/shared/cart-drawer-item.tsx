import { cn } from '@/lib/utils'
import React from 'react'
import * as CartItem from './cart-item-details'
import { CartItemProps } from './cart-item-details/cart-item-details.types'
import { CountButton } from './count-button'
import { Trash2Icon } from 'lucide-react'

interface Props extends CartItemProps {
	className?: string
	onClickCountButton?: (type: 'plus' | 'minus') => void
	removeCartItem: () => void
}

export const CartDrawerItem: React.FC<Props> = ({
	className,
	id,
	imageUrl,
	name,
	price,
	quantity,
	details,
	onClickCountButton,
	removeCartItem,
	disabled, //приостановка кликов пока данные не загрузились
}) => {
	return (
		<div
			className={cn(
				'flex bg-white p-5 gap-6',
				{
					'opacity-50 pointer-events-none': disabled,
				},
				className
			)}
		>
			<CartItem.Image src={imageUrl} />
			<p>{id}</p>
			<div className='flex-1'>
				<CartItem.Info details={details} name={name} />

				<hr className='my-3' />

				<div className='flex items-center justify-between'>
					<CountButton onClick={onClickCountButton} value={quantity} />

					<div className='flex items-center gap-3'>
						<CartItem.Price value={price} />
						<Trash2Icon
							onClick={() => removeCartItem()}
							className='text-gray-400 cursor-pointer hover:text-black transition-all duration-300'
							size={16}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
