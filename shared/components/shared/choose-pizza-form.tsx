'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import {
	Title,
	IngredientItem,
	PizzaImage,
	GroupVariants,
} from '@/shared/components/shared'
import { Button } from '../ui'
import { PizzaSize, pizzaTypes, PizzaType } from '@/shared/constants/pizza'
import { Ingredient } from '@prisma/client'
import { ProductWithRelations } from '@/@types/prisma'
import { PizzaDetails } from '@/lib/'
import { usePizzaOptions } from '@/shared/hooks/'

interface Props {
	className?: string
	name: string
	imageUrl: string
	ingredients: Ingredient[]
	items: ProductWithRelations['items']
	onClickAddCart?: VoidFunction
	onSubmit: (id: number, ingredients: number[]) => void
	loading?: boolean
}

export const ChoosePizzaForm: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	ingredients,
	items,
	onSubmit,
	loading,
}) => {
	const {
		size,
		setSize,
		type,
		setType,
		addIngredient,
		selectedIngredients,
		availableSizes,
		currentItemId,
	} = usePizzaOptions(items)

	const { textDetails, totalPrice } = PizzaDetails(
		items,
		ingredients,
		size,
		type,
		selectedIngredients
	)

	const handleClickAdd = () => {
		if (currentItemId) {
			onSubmit(currentItemId, Array.from(selectedIngredients))
		}
	}

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<PizzaImage imageUrl={imageUrl} size={size} />
			</div>
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-5 mt-10'>
					<GroupVariants
						items={availableSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<GroupVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>

				<Button
					loading={loading}
					onClick={handleClickAdd}
					className='h-[55px] px-10 text-base  rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {totalPrice}
				</Button>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
					<div className='grid grid-cols-3 gap-3  '>
						{ingredients.map(ingredient => (
							<IngredientItem
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								price={ingredient.price}
								name={ingredient.name}
								active={selectedIngredients.has(ingredient.id)}
								onClick={() => addIngredient(ingredient.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

