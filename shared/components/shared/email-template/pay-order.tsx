import * as React from 'react';

interface Props {
	orderId: number
	totalAmount: number
	firstName: string
	paymentUrl: string
}

export const PayOrderTemplate: React.FC<Readonly<Props>> = ({
	firstName,
	orderId,
	totalAmount,
	paymentUrl,
}) => (
	<div>
		<h1>Заказ #{orderId}</h1>
		<p>
			Оплатите заказ на сумму {totalAmount} ₽. Перейдите по ссылке{' '}
			<a href={paymentUrl}>для оплаты заказа</a>
		</p>
	</div>
)