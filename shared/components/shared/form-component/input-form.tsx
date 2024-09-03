import React from 'react'
import { RequiredSymbol } from './required-symbol'
import { Input } from '../../ui'

interface Props {
	name: string
	label?: string
	required?: boolean
	className?: string
}

export const FormInput: React.FC<Props> = ({
	name,
	label,
	required,
	className,
	...props
}) => {
	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequiredSymbol />}
				</p>
			)}
			<div className='relative'>
				<Input className='h-12 text-md' {...props} />
			</div>
		</div>
	)
}