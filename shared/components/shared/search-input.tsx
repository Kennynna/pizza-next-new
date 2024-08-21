'use client'
import { cn } from '@/lib/utils'
import { Api } from '@/shared/services/api-client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useClickAway, useDebounce } from 'react-use'
import { Product } from '@prisma/client'

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [focused, setFocused] = React.useState(false)
	const [products, setProducts] = React.useState<Product[]>([])

	const onClickInput = () => {
		//очистка инпута после клика на выпадающий список
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

	const ref = React.useRef(null)
	useClickAway(ref, () => {
		// клик вне области инпута
		setFocused(false)
	})

	useDebounce(
		//запрос при изменении инпута каждые 200мс
		async () => {
			try {
				const res = await Api.products.search(searchQuery)
				setProducts(res.products)
			} catch (e) {
				console.log(e)
			}
		},
		200,
		[searchQuery]
	)

	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>
			)}

			<div
				ref={ref}
				className={cn(
					'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
					className
				)}
			>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
				<input
					type='text'
					placeholder='Найти продукт...'
					className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>

				{searchQuery && products.length > 0 && (
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-12'
						)}
					>
						{products.map(product => (
							<Link
								onClick={onClickInput}
								key={product.id}
								href={`/product/${product.id}`}
								className='items-center w-full flex gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'
							>
								<img
									className='rounded-sm h-8 w-8'
									src={product.imageUrl}
									alt={product.name}
									width={32}
									height={32}
								/>
								<span>{product.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
