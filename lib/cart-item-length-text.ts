export const cartItemLengthText = (length: number) => {
	let itemsCartCount = ''
	if (!length) {
		return 0
	}
	if (length === 1) {
		itemsCartCount = 'товар'
	} else if (length === 2 || length === 3 || length === 4) {
		itemsCartCount = 'товара'
	} else {
		itemsCartCount = 'товаров'
	}
	return itemsCartCount
}
