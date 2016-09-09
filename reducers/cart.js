const initialState = {
	cartItems: []
}

export default function modifyCart(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			// console.table(state.cartItems);
			return {
				cartItems: addItemToCart(state.cartItems, action)
			}

		case 'CLEAR_CART':
		case 'CHECKOUT':
			
			return Object.assign({}, state, initialState);

		default:
			return state;
	}
}


/*
function addItemToCart(state = [], action) {
	const newItemToCart = [...state, {
			id: action.id,
			title: action.title,
			price: action.price,
			quantity: 1
		}];
	if(!state.length) {
		return newItemToCart;
	}
	return !state.find(item => item.id === action.id) ? newItemToCart : 
		state.map(item => {
			const { id, price, title } = item;

			return id !== action.id ? item : {
				id,
				title,
				price,
				quantity: (item.quantity || 0) + 1
			}
		});
}
*/

function addItemToCart(state = [], action) {
	const { id, price, title } = action, 
				newItemToCart = {
					id, title, price,
					quantity: (state.quanitity || 0) + 1
				};

	return (!state.find(item => item.id === action.id) || !state.length) ? 
		[...state, newItemToCart] : 
		state.map(item => {
			const { id, price, title, quantity } = item;
			return id !== action.id ? item : {
				id, title, price, quantity: (quantity || 0) + 1
			};
		});

}




/*
//set cart total
function addCharge(state = initialState.charges, action) {
	const { price } = action;
	return [...state, price];
}

//find quantityById function
function setQuantityById(state, action) {
	const { id } = action;
	return Object.assign({}, state, {[id] : (state[id] || 0) + 1 })
}


function addItemId(state = initialState.currentIds, action) {
	const { id } = action;
	return (state.indexOf(id) !== -1) ? state : [...state, id];
}

function addTitle(state, action) {
	const index = state.findIndex(item => item.title === action.title);
	return index < 0 ? [...state, action.title] : state;
}

//need to get product info for add to cart action -------
function getItemForCart(data, id) {
	 return data.find(product => product.id === id)
}



	// currentIds: [],
	// quantityById: {},
	// charges: [],
	// cartItems: []

//add Cart Item
// function addCartItem(state = {}, action) {
// 	const { id, price, title } = action;
// 	return Object.assign({}, state, {
// 		id: id,
// 		price: price,
// 		title: title,
// 		quanitity: (state.quanitity || 0) + 1
// 	})
// }

/*
	console.log(state.cartItems);
			const indexOfItem = state.cartItems.findIndex((product) => product.id === action.id);
			console.log(indexOfItem);
			return indexOfItem >= 0 ? state : [...state , Object.assign({}, state, addCartItem(state.cartItems, action))];
	
 */