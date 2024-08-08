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
import {
	PizzaSize,
	pizzaSizes,
	pizzaTypes,
	PizzaType,
} from '@/shared/constants/pizza'
import { Ingredient } from '@prisma/client'
import { useSet } from 'react-use'
import { ProductWithRelations } from '@/@types/prisma'

interface Props {
	className?: string
	name: string
	imageUrl: string
	ingredients: Ingredient[]
	items: ProductWithRelations['items']
	onClickAddCart?: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	ingredients,
	items,
	onClickAddCart,
}) => {
	const [size, setSize] = React.useState<PizzaSize>(20)
	const [type, setType] = React.useState<PizzaType>(1)

	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)
	const textDetaills = '30cm traficioonoe testo'
	//Прайс от вариации пиццы
	const pizzaPrice = items.find(
		item => item.pizzaType === type && item.size === size
	)!.price
	//Прайс от вариации дополнительных ингредиентов
	const totalIngredients = ingredients
		.filter(item => selectedIngredients.has(item.id))
		.reduce((acc, item) => acc + item.price, 0)
	const totalPrice = pizzaPrice + totalIngredients

	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<PizzaImage imageUrl={imageUrl} size={size} />
			</div>
			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />
				<p className='text-gray-400'>{textDetaills}</p>

				<div className='flex flex-col gap-5 mt-10'>
					<GroupVariants
						items={pizzaSizes}
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
					// loading={}
					// onClick={}
					className='h-[55px] px-10 text-base  rounded-[18px] w-full mt-10'
				>
					Добавить в корзину за {totalPrice}
				</Button>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
					<div className='grid grid-cols-3 gap-3 mt-5 '>
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
