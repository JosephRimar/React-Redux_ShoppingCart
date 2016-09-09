
const initialState = {
	currentInventory: []
}

export default function modifyInventory(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			console.log('reduced inventory of ' + action.id + ' by one')

			return { 
				currentInventory: reduceInventory(state.currentInventory, action)
			}
				
		case 'CLEAR_CART':
		case 'HYDRATE_PRODUCTS':
			console.log('hydrating state')
			return Object.assign({}, state, {currentInventory: action.data})
			console.log(state)
			return state;
		case 'GET_INVENTORY':
			console.log(state)
			return state;

		default:
			return state;
	}
}

function reduceInventory(state, action) {
	 return state.map(product => {
	 	const { id, price, title, inventory } = product;
	 	return id !== action.id ? product :
	 		{
	 			id,
	 			title,
	 			price,
	 			inventory: inventory -1
	 		}
	 });
}
