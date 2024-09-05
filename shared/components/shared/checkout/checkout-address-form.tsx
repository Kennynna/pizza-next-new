import { cn } from '@/lib/utils'
import React from 'react'
import { WhiteBlock } from '../white-block'
import { Input, Textarea } from '../../ui'

interface Props {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	return (
		<WhiteBlock title='Адрес доставки' className={cn('', className)}>
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
	)
}
