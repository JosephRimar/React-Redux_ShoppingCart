export function addToCart(product) {
	const { id, price, title } = product;
	return {
		type: 'ADD_TO_CART',
		id,
		price,
		title
	}
}

export function getCurrentInventory() {
	return {
		type: 'GET_INVENTORY'
	}
}

export function clearCart(data) {
	return {
		type: 'CLEAR_CART',
		data
	}
}

export function checkOut() {
	return {
		type: 'CHECKOUT'
	}
}

export function hydrate(data) {
	return {
		type: 	"HYDRATE_PRODUCTS",
		data
	}
}