import { prisma } from '@/prisma/prisma-client'
import { error } from 'console'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {

		const token = req.cookies.get('cartToken')?.value
		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await prisma.cart.findFirst({
			where: {
				OR: [
					{
						tokenId: token,
					},
				],
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc',
					},
          include:{
            productItem: {
              include:{
                product: true
              }
            },
            ingredients: true,
          }
				},
			},
		})

		return NextResponse.json(userCart)
	} catch {
		console.log(error)
	}
}