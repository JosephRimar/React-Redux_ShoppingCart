import React, { Component } from 'react';
import Product from './Product';

export default class Cart extends Component {
	
	render() {
		const { products, total, onCheckOutClick, onClearButtonClick, numberOfItems } = this.props;
		const hasProducts = products.length > 0;
		const productsToShow = !hasProducts ? <em>Please Add Items to Cart</em> 
			: products.map(product => 
	 
					<Product
						title={product.title}
						price={product.price}
						quantity={product.quantity}
						key={Math.random()}
					/>
				
				);

		return (
			<div>
				<h3>Your Cart <span style={numberOfItems > 0 ? {display: 'inline'} : {display: 'none'} }>{numberOfItems}</span></h3>
				<div>{productsToShow}</div>
				<p>Total: ${total.toFixed(2)}</p>
				<button
					disabled={hasProducts ? '' : 'disabled'}
					onClick={((e) => onCheckOutClick(e))} 
				>Checkout</button>
				{' '}
				<button 
					disabled={hasProducts ? '' : 'disabled'}
					onClick={(e) => onClearButtonClick(e)}
					>Clear Cart</button>
			</div>
		)
	}
}