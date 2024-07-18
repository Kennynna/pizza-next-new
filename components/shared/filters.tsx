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


interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Верхние чекоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			{/* Фильтр цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={1000} />
					<Input type='number' min={100} max={1000} placeholder='1000' />
				</div>

				<RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
			</div>

			<CheckboxFiltersGroup
				title='Категории'
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: 'defaultItems',
						value: '1',
					},
					{
						text: 'defaultItems',
						value: '2',
					},
					{
						text: 'defaultItems',
						value: '3',
					},
					{
						text: 'defaultItems',
						value: '1',
					},
					{
						text: 'defaultItems',
						value: '2',
					},
					{
						text: 'defaultItems',
						value: '3',
					},
					{
						text: 'defaultItems',
						value: '1',
					},
					{
						text: 'defaultItems',
						value: '2',
					},
					{
						text: 'defaultItems',
						value: '3',
					},
				]}
				items={[
					{
						text: 'Чеснок',
						value: '1',
					},
					{
						text: 'Помидор',
						value: '2',
					},
					{
						text: 'Лук',
						value: '3',
					},
					{
						text: 'Ствол',
						value: '1',
					},
					{
						text: 'Деньги',
						value: '2',
					},
					{
						text: 'Массив Items',
						value: '3',
					},
					{
						text: 'Массив Items',
						value: '1',
					},
					{
						text: 'Массив Items',
						value: '2',
					},
					{
						text: 'Массив Items',
						value: '3',
					},
				]}
			/>
		</div>
	)
}
