import { cn } from '@/lib/utils'
import React from 'react'
import { CartButton, Container, SearchInput } from './index'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
	className?: string
}
interface Props {
	hasSearch?: boolean
	hasCart?: boolean
}
export const Header: React.FC<Props> = ({
	className,
	hasSearch = true,
	hasCart = true,
}) => {
	return (
		<header className={cn('border, border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<div className='flex items-center gap-4'>
					<Link href='/'>
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
							<p className='text-sm text-gray-400 leading-3'>
								вкусней уже некуда
							</p>
						</div>
					</Link>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
				</div>
				{hasSearch && (
					<div className='mx-10 flex-1'>
						<SearchInput />
					</div>
				)}
				<CartButton hasCart={hasCart} />
			</Container>
		</header>
	)
}
