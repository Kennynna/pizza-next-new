import { useRouter, useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import React from 'react'

interface PriceProps {
	//для ползунка с фильтрами цен
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	sizes: string
	ingredients: string
}

export interface Filters {
	sizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceProps
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void
	setPizzaTypes: (key: string) => void
	setSizes: (key: string) => void
	setSelectedIngredients: (key: string) => void
}

//хук для хранения состояний фильтрации
export const useFilters = (): ReturnProps => {
	const router = useRouter()
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>
	//Фильтр ингридиентов
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(','))
	)

	//Фильтр размеров
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	)
	//фильтр типа пицц
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has('pizzaTypes')
				? searchParams.get('pizzaTypes')?.split(',')
				: []
		)
	)
	
	//фильтр прайса
	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})
	const updatePrice = (name: keyof PriceProps, value: number) => {

		//для предотвращения больших  цифр
		if (prices.priceTo && prices.priceTo > 1000) {
			value = 1000
		}
		if (prices.priceFrom && prices.priceFrom < 0) {
			value = 0
		}
		setPrices(prev => ({
			...prev,
			[name]: value,
		}))
		console.log(prices)
	}

	return {
		sizes,
		pizzaTypes,
		prices,
		selectedIngredients,
		setPrices: updatePrice,
		setPizzaTypes: togglePizzaTypes,
		setSizes: toggleSizes,
		setSelectedIngredients: toggleIngredients,
	}
}
