import { Container, Title, TopBar, Filters } from '@/shared/components/shared'
import { ProductsGroupList } from '@/shared/components/shared/products-group-list'
import React, { Suspense } from 'react'
import { findPizzas, GetSearchParams } from '@/lib/find-pizzas'


export default async function Home({searchParams}: {searchParams: GetSearchParams}) {
	const categories = await findPizzas(searchParams)



	return (
		<>
			<Container className='mt-5'>
				<Title size='lg' text='Все пиццы' className='font-extrabold'></Title>
			</Container>

			<TopBar
				categories={categories.filter(category => category.products.length > 0)}
			/>

			<Container className='pb-14 mt-10'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Suspense>
							<Filters />
						</Suspense>
					</div>

					{/* Список товаров */}

					<div className='flex-1'>
						<div className='flex flex-col gap-[50px]'>
							{categories.map(
								category =>
									category.products.length > 0 && (
										<ProductsGroupList
											title={category.name}
											key={category.id}
											categoryId={category.id}
											items={category.products}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}


