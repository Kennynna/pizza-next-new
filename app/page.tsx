import {
	Container,
	Title,
	TopBar,
	Filters,
	ProductCard,
} from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Container className='mt-5'>
				<Title size='lg' text='Все пиццы' className='font-extrabold'></Title>
			</Container>

			<TopBar />

			<Container className='pb-14 mt-10'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Список товаров */}

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 6,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 7,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 8,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 9,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Пицца 1',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Пицца 1',
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
