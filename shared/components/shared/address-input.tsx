'use client'
import React from 'react'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

interface Props {
	onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
	return (
		<AddressSuggestions 
			token='a92831a132bf5ca511a79df6248f6694fcbf9d28'
			onChange={data => onChange?.(data?.value)}
		/>
	)
}
