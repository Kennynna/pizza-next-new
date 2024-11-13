'use client'

import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Title,
	CheckoutSidebar,
	CheckoutCart,
	CheckoutPersonalForm,
} from '@/shared/components/shared/'
import { useCart } from '@/shared/hooks/use-cart'
import { CheckoutAddressForm } from '@/shared/components/shared/checkout/checkout-address-form'
import {
	checkoutFormSchema,
	CheckoutFormValues,
} from '@/shared/components/shared/checkout/schemas/checkout-form-schema'
import { toast } from 'react-hot-toast'
import { createOrder } from '@/app/actions'
import { Button } from '@/shared/components/ui/button'

const Checkout = () => {
	const {
		totalAmount,
		items,
		updateItemQuantity,
		removeCartItem,
		loading: cartLoading,
	} = useCart()

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		},
	})

	const [initialLoading, setInitialLoading] = React.useState(true)
	const [submitting, setSubmitting] = React.useState(false)

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	const onSubmit = async (data: CheckoutFormValues) => {
		try {
			setSubmitting(true)
			const url = await createOrder(data)
			if (url) {
				toast.success('Заказ успешно оформлен! Переход на страницу оплаты', {
					icon: '💸',
				})
				window.location.href = url
			} else {
				throw new Error('Не удалось получить URL для оплаты')
			}
		} catch (error) {
			console.error('Error creating order:', error)
			toast.error('Не удалось создать заказ', {
				icon: '❌',
			})
		} finally {
			setSubmitting(false)
		}
	}

	React.useEffect(() => {
		if (!cartLoading) {
			setInitialLoading(false)
		}
	}, [cartLoading])

	return (
		<div className='mt-5'>
			<Title
				text='Оформление заказа'
				className='font-extrabold mb-8 text-3xl md:text-[36px]'
			/>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<div className='flex flex-col lg:flex-row gap-10'>
						{/* Left */}
						<div className='flex flex-col gap-10 flex-1'>
							<CheckoutCart
								items={items}
								loading={cartLoading}
								initialLoading={initialLoading}
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
							/>

							<CheckoutPersonalForm />

							<CheckoutAddressForm />
						</div>

						{/* Right */}
						<div className='w-full lg:w-[450px]'>
							<CheckoutSidebar
								totalAmount={totalAmount}
								loading={cartLoading || submitting}
							/>
						</div>
					</div>
					<Button
						type='submit'
						className='w-full md:w-auto'
						disabled={submitting || cartLoading}
					>
						{submitting ? 'Оформление заказа...' : 'Оформить заказ'}
					</Button>
				</form>
			</FormProvider>
		</div>
	)
}

export default Checkout
