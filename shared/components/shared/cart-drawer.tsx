import { cn } from '@/lib/utils'
import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'

interface Props {
	className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	children,
	className,
}) => {
	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>{children}</SheetTrigger>
				<SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
					<SheetHeader>
						<SheetTitle>
							В корзине <span className='font-bold'> 3 товара </span>
						</SheetTitle>
						{/* Наши товары */}
						<SheetFooter className='-mx-6 bg-white p-8'>
							<div className='w-full'>
								<div className='flex mb-5'>
									<span className='flex flex-1 text-lg text-neutral-500'>
										Итого
										<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
									</span>

									<span className='font-bold text-lg '>500 ₽ </span>
								</div>

              <Link href='/cart'>
              <Button type='submit' className='w-full h-12 text-base'>
                Оформить заказ
                <ArrowRight size={20} className='ml-2 w-5' />
              </Button>
              </Link>

							</div>
						</SheetFooter>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	)
}
