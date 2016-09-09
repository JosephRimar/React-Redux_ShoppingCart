import React, { Component } from 'react';

export default class Product extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { title, price, quantity } = this.props;

		return (
			<div>
				{title} - {price} {quantity ? `x ${quantity}` : null}
			</div>
		)
	}
}