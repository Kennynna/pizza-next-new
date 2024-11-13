import { cn } from '@/lib/utils'
import React from 'react'
import { WhiteBlock } from '../white-block'
import { ErrorText, FormTextarea } from '../form-component'
import { AddressInput } from '../address-input'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	const { control } = useFormContext()
	return (
		<WhiteBlock title='Адрес доставки' className={cn('', className)}>
			<div className='flex flex-col gap-5'>
				<Controller
					control={control}
					name='address'
					render={({ field, fieldState }) => (
						<>
							<AddressInput onChange={field.onChange} />
							{fieldState.error?.message && <ErrorText text={fieldState.error.message} />} 
						</>
					)}
				/>

				<FormTextarea
					name='comment'
					rows={5}
					className='text-base'
					placeholder='Комментарий к заказу'
				/>
			</div>
		</WhiteBlock>
	)
}
