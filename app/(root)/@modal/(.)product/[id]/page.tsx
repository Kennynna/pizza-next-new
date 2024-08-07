import { ChooseModalProduct } from '@/shared/components/shared/modal/choose-modal-product'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ModalProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			items: true,
			ingredients: true,
		},
	})

	if (!product) {
		return notFound()
	}

	return <ChooseModalProduct product={product} />
}
