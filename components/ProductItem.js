import React, { Component } from 'react';
import Product from './Product';


export default class ProductItem extends Component {

	render() {
		const { title, price, quantity } = this.props;
		let hasQuantity = quantity > 0;

		return (
			<div style={{ marginBottom: 20 }}>
				<Product 
					title={title}
					price={price}
				/>
				<button 
					onClick={this.props.onAddToCartClicked} 
					disabled={hasQuantity ? null : 'disabled'}>
					{hasQuantity ? 'Add to Cart' : 'Sold Out'}
				</button>
			</div>
		)
	}
}