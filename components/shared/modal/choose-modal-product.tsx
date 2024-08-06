import { Dialog } from '@/components/ui'
import { Product } from '@prisma/client'
import { DialogContent } from '@radix-ui/react-dialog'
import React from 'react'

interface Props {
	product: Product
	className?: string
}

export const ChooseModalProduct: React.FC<Props> = ({ className }) => {
	return (
		<Dialog>
			<DialogContent className='p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				<h1>Я продукт</h1>
			</DialogContent>
		</Dialog>
	)
}
