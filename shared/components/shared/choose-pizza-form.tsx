'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { PizzaImage } from '@/shared/components/shared/pizza-image'
import { Title } from '@/shared/components/shared'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { PizzaSize, pizzaSizes, PizzaType } from '@/shared/constants/pizza'

interface Props {
	className?: string
	name: string
	imageUrl: string
	ingredients: any[]
	items?: any[]
	onClickAdd?: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	ingredients,
	items,
	onClickAdd,
}) => {
	const [size, setSize] = React.useState<PizzaSize>(20)
	const [pizzaType, setPizzaType] = React.useState<PizzaType>(1)

	const textDetaills = '30cm traficioonoe testo'
	const totalPrice = 350

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<PizzaImage imageUrl={imageUrl} size={size} />
			</div>
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='text-gray-400'>{textDetaills}</p>
				<GroupVariants
					items={pizzaSizes}
					value={String(size)}
					onClick={value => setSize(Number(value) as PizzaSize)}
				/>
				<Button
					// loading={}
					// onClick={}
					className='h-[55px] px-10 text-base  rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {totalPrice}
				</Button>
			</div>
		</div>
	)
}
