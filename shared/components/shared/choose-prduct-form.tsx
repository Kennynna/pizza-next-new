import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from '@/shared/components/shared'
import { Button } from '../ui'

interface Props {
	className?: string
	name: string
	imageUrl: string
	ingredients: any[]
	items?: any[]
	onClickAdd?: VoidFunction
	onSubmit?: () => void
	price: number
	loading?: boolean
}

export const ChooseProductForm: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	onSubmit,
	price,
	loading,
}) => {
	
	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<img
					src={imageUrl}
					alt=''
					className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
				/>
			</div>
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='text-gray-400'>{name}</p>

				<Button
					loading={loading}
					onClick={() => onSubmit?.()}
					className='h-[55px] px-10 text-base  rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {price}
				</Button>
			</div>
		</div>
	)
}
