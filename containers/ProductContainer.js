import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { addToCart } from '../actions';

import ProductList from '../components/ProductList';

//get data for testing
import Data from '../api/products.json';



class ProductContainer extends Component {
	render() {
		//console.log(this.props);
		return (
			<div>
				<ProductList>

					{this.props.data.map(product => {
						//console.log(product)
						return (
							<ProductItem
								key={product.id} 
								price={product.price}
								title={product.title}
								quantity={product.inventory}
								onAddToCartClicked={() => this.props.addToCart(product)}
							/>
						)}
					)}
				</ProductList>
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		data: store.inventory.currentInventory
	}
}

export default connect(mapStateToProps,{ addToCart })(ProductContainer);

