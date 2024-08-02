'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import {
	Title,
	FilterCheckbox,
	RangeSlider,
	CheckboxFiltersGroup,
} from './index'
import { Input } from '../ui'
import { useFilterIngredients } from '../hooks/useFilterIngredients'
import { useSet } from 'react-use'

interface Props {
	className?: string
}

interface PriceProps {
	//для ползунка с фильтрами цен
	priceFrom: number
	priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIngredients } =
		useFilterIngredients()

	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

	const [prices, setPrice] = React.useState<PriceProps>({
		priceFrom: 0,
		priceTo: 1000,
	})

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name,
	}))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		if (prices.priceTo > 1000) {
			value = 1000
		}
		if (prices.priceFrom < 0) {
			value = 0
		}
		setPrice({
			...prices,
			[name]: value,
		})
		console.log(prices)
	}

	React.useEffect(() => {
		console.log(prices, pizzaTypes, sizes, selectedIngredients)
	}, [prices, pizzaTypes, sizes, selectedIngredients])

	return (
		<div className={cn(' top-40', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Верхние чекоксы */}
			<CheckboxFiltersGroup
				name='pizzaTypes'
				className='mb-5'
				title='Тип теста'
				selected={pizzaTypes}
				onClickCheckbox={togglePizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>

			<CheckboxFiltersGroup
				name='sizes'
				className='mb-5'
				title='Размеры'
				onClickCheckbox={toggleSizes}
				selected={sizes}
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' },
				]}
			/>

			{/* Фильтр цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						onChange={e => updatePrice('priceFrom', Number(e.target.value))}
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(prices.priceFrom)}
					/>
					<Input
						onChange={e => updatePrice('priceTo', Number(e.target.value))}
						type='number'
						min={100}
						max={1000}
						placeholder='1000'
						value={String(prices.priceTo)}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[prices.priceFrom, prices.priceTo]}
					onValueChange={([priceFrom, priceTo]) =>
						setPrice({ priceFrom, priceTo })
					}
				/>
			</div>

			<CheckboxFiltersGroup
				title='Категории'
				className='mt-5'
				limit={5}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
				name={'ingredients'}
			/>
		</div>
	)
}
