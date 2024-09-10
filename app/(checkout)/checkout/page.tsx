'use client'
import React from 'react'
import { useForm, Resolver, FormProvider } from 'react-hook-form'
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

interface Props {
	className?: string
}

const Checkout: React.FC<Props> = ({ className }) => {
	const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
		useCart()

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

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

	const onSubmit = (data: CheckoutFormValues) => {
		console.log(data)
	}

	React.useEffect(() => {
		if (!loading) {
			setInitialLoading(false)
		}
	}, [loading])

	return (
		<div className='mt-5'>
			<Title
				text='Оформление заказа'
				className='font-extrabold mb-8 text-[36px]'
			/>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex gap-10'>
						{/* Left */}
						<div className='flex flex-col gap-10 flex-1 mb-20'>
							<CheckoutCart
								items={items}
								loading={loading}
								initialLoading={initialLoading}
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
							/>
							
							<CheckoutPersonalForm/>

							<CheckoutAddressForm />
						</div>

						{/* Right */}
						<div className='w-[450px]'>
							<CheckoutSidebar totalAmount={totalAmount} loading={loading}/>
						</div>
					</div>
				</form>
			</FormProvider>
		</div>
	)
}
export default Checkout
