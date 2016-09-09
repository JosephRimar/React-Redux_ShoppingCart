import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { checkOut, clearCart } from '../actions';
import Data from '../api/products.json';

const currentCartItems = [
		{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "quantity": 2},
  	{"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "quantity": 3}
	]

class CartContainer extends Component {
		
	render() {
		const { cartItems } = this.props;
		return (
			<div>
				<Cart
					products={cartItems}
					total={cartItems.map(a => a.price * a.quantity).reduce((a,b) => a+b,0)}
					onCheckOutClick={() => this.props.checkOut()}
					onClearButtonClick={() => this.props.clearCart(Data)}
					numberOfItems={cartItems.length}
				/>
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		cartItems: store.cart.cartItems,

	}
}

export default connect(mapStateToProps, { checkOut, clearCart })(CartContainer);
//{`$${total.reduce(((a,b) => a+b),0).toFixed(2)}`}