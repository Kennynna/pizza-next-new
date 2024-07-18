import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from './container'
import Image from 'next/image'
import { Button } from '../ui'
import { User } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'
import { ArrowRight, ShoppingCart } from 'lucide-react'
interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border, border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</div>

				<div className='flex items-center gap-4'>
					<Button
						variant={'outline'}
						className='uppercase flex items-center gap-3'
					>
						<User size={16} />
						<b>Войти</b>
					</Button>

					
					<div className='flex items-center gap-3'>
						<Button
							variant={'default'}
							className='group relative flex items-center'
						>
							<b>520 р</b>
							<span className='h-full w-[1px] bg-white mx-3'></span>
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingBasket className='h-4 w-4 relative' strokeWidth={2} />
								<b>0</b>
							</div>
							<ArrowRight
								size={20}
								className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
