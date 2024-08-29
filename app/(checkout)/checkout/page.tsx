import { Title, WhiteBlock } from '@/shared/components/shared'
import { Input, Textarea } from '@/shared/components/ui'
import React from 'react'

interface Props {
	className?: string
}

const Checkout: React.FC<Props> = ({ className }) => {
	return (
		<div className='mt-5'>
			<Title
				text='Оформление заказа'
				className='font-extrabold mb-8 text-[36px]'
			/>
			<div className='flex gap-10'>
				{/* Left */}
				<div className='flex flex-col gap-10 flex-1 mb-20'>
					<WhiteBlock title='Доставка'></WhiteBlock>

					<WhiteBlock title='Персональная информация'>
						<div className='grid grid-cols-2 gap-2'>
							<Input name='firstName' placeholder='Имя' className='text-base' />
							<Input
								name='lastName'
								placeholder='Фамилия'
								className='text-base'
							/>
							<Input name='email' placeholder='E-mail' className='text-base' />
							<Input
								name='phone'
								placeholder='Телефон'
								className='text-base'
								type='tel'
							/>
						</div>
					</WhiteBlock>

					<WhiteBlock title='Адрес доставки'>
						<div className='flex flex-col gap-5'>
							<Input
								name='firstName'
								placeholder='Введите адрес...'
								className='text-base'
							/>
							<Textarea
								rows={5}
								className='text-base'
								placeholder='Комментарий к заказу'
							/>
						</div>
					</WhiteBlock>
				</div>
				{/* Right */}
				<div className='w-[450px]'>
					<WhiteBlock title='Ваш заказ' className='p-6 sticky top-4'>
            <div className='flex flex-col gap-1'>
                <span className='text-xl'>Итого</span>
                <span className='text-4xl font-extrabold'>10_000 Руб</span>
            </div>
          </WhiteBlock>
				</div>
			</div>
		</div>
	)
}
export default Checkout
