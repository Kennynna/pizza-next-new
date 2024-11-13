import React from 'react'
import { WhiteBlock } from '../white-block'
import { FormInput } from '../form-component'

interface Props {
	className?: string
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
	return (
		<WhiteBlock title='Персональная информация'>
			<div className='grid grid-cols-2 gap-2'>
				<FormInput name='firstName' placeholder='Имя' className='text-base' />
				<FormInput
					name='lastName'
					placeholder='Фамилия'
					className='text-base'
				/>
				<FormInput name='email' placeholder='E-mail' className='text-base' />
				<FormInput
					name='phone'
					placeholder='Телефон'
					className='text-base'
					type='tel'
				/>
			</div>
		</WhiteBlock>
	)
}
