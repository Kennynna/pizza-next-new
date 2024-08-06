import { Container, Title } from '@/components/shared'
import { GroupVariants } from '@/components/shared/group-variants'
import { ProductImage } from '@/components/shared/product-image'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	})

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<ProductImage
					size={20}
					imageUrl={product.imageUrl}
					category={product.categoryId}
				/>

				<div className='w-[490px] bg-[#f4efef] p-7'>
					<Title
						text={product.name}
						size='md'
						className='font-extrabold mb-1'
					/>

					<p className='text-gray-400'>Здесь могло бы быть описание</p>
					<GroupVariants
						items={[
							{
								name: 'Маленькая',
								value: '1',
							},
							{
								name: 'Средняя',
								value: '2',
							},
							{
								name: 'Большая',
								value: '3',
							},
						]}
						selectedValue='1'
					/>
				</div>
			</div>
		</Container>
	)
}
