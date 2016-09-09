import React, { Component } from 'react';


export default class ProductList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	
		return (
			<div>
				<h3>Products</h3>
				<div>{this.props.children}</div>
			</div>
		)
	}

}

// export const ProductList = (props) => {
// 		return (
// 			<div>
// 				<h3>Products</h3>
// 				<div>{this.props.children}</div>
// 			</div>
// 		)
// }
