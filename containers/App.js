import React, { Component } from 'react';
import Header from '../components/Header';
import ProductContainer from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';


export default class App extends Component {

	render() {
		return (
			<div>
				<Header title={`Shopping Cart Test`} />
				<hr/>
				<ProductContainer />
				<hr/>
				<CartContainer />
			</div>
		)
	}
}


// <Product title={`hello`} price={50.00} />