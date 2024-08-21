'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Title, RangeSlider, CheckboxFiltersGroup } from './index'
import { Input } from '../ui'
import { useFilters, useQueryFilters, useIngredients } from '@/shared/hooks'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	//наши хуки
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()
	useQueryFilters(filters)
	const updatePrice = (price: number[]) => {
		filters.setPrices('priceFrom', price[0])
		filters.setPrices('priceTo', price[1])
	}

	const items = ingredients.map(item => ({
		value: String(item.id + 2),
		text: item.name,
	}))

	return (
		<div className={cn(' top-40', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Верхние чекоксы */}
			<CheckboxFiltersGroup
				name='pizzaTypes'
				className='mb-5'
				title='Тип теста'
				selected={filters.pizzaTypes}
				onClickCheckbox={filters.setPizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>
			
			{/* размер теста  */}
			<CheckboxFiltersGroup
				name='sizes'
				className='mb-5'
				title='Размеры'
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
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
						onChange={e =>
							filters.setPrices('priceFrom', Number(e.target.value))
						}
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
					/>
					<Input
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
						type='number'
						min={100}
						max={1000}
						placeholder='1000'
						value={String(filters.prices.priceTo)}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 1000,
					]}
					onValueChange={updatePrice}
				/>
			</div>
			{/* игредиенты */}
			<CheckboxFiltersGroup
				title='Ингредиенты'
				name={'ingredients'}
				className='mt-5'
				limit={5}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	)
}
