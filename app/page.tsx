import { Container, Title, TopBar, Filters } from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { prisma } from '@/prisma/prisma-client'
import React from 'react'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	})

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
						<Filters />
					</div>

					{/* Список товаров */}

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								category =>
									categories.length > 0 && (
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
