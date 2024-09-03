import React from 'react'
import { WhiteBlock } from './white-block'
import { CheckoutItemDetails } from './checkout-item-details'
import { calcCheckoutTotal } from '@/lib/calc-chekout-total-emount'
import { Package, Percent, Truck } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
	totalAmount: number
	className?: string
}

export const CheckoutSidebar: React.FC<Props> = ({
	totalAmount,
	className,
}) => {
	const { finalTotal, percentages, delivery } = calcCheckoutTotal(totalAmount)
	return (
		<WhiteBlock title='Ваш заказ' className='p-6 sticky top-4'>
			<div className='flex flex-col gap-1'>
				<span className='text-xl'>Итого</span>
				<span className='text-4xl font-extrabold'>{finalTotal} Руб</span>
			</div>

			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Package className='mr-2 text-gray-400' />
						Стоимость товаров:
					</div>
				}
				value={`${totalAmount} Р`}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Percent className='mr-2 text-gray-400' />
						Налоги:
					</div>
				}
				value={String(percentages)}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Truck className='mr-2 text-gray-400' /> Стоимость доставки:
					</div>
				}
				value={String(delivery)}
			/>
			<div className='flex items-center justify-center'>
				<Button className='w-56 h-12 text-base items-center' size='lg'>
					Перейти к оплате
				</Button>
			</div>
		</WhiteBlock>
	)
}
