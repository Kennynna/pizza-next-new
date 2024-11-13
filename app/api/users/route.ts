import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {

  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
	try {
		const data = await req.json()

		// Здесь должна быть валидация данных
		if (!data.name || !data.email) {
			return NextResponse.json(
				{ error: 'Name and email are required' },
				{ status: 400 }
			)
		}

		const user = await prisma.user.create({
			data,
		})

		return NextResponse.json(user, { status: 201 })
	} catch (error) {
		console.error('Error creating user:', error)
		return NextResponse.json(
			{ error: 'Failed to create user' },
			{ status: 500 }
		)
	}
}