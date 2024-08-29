import { Container } from '@/shared/components/shared'

import { prisma } from '@/prisma/prisma-client'
import { ProductFormPage } from '@/shared/components/shared/product-form-page'
import { notFound, useRouter } from 'next/navigation'


export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
			items: true,
		},
	})

	if (!product) {
		return notFound()
	}
	return (
		<Container className='flex flex-col my-10'>
			<ProductFormPage product={product}/>
		</Container>
	)
}
