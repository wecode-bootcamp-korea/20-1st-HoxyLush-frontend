import React, { Component } from 'react';

export default class Lists extends Component {
	state = {
		productLists: [],
	};

	componentDidMount() {
		const url = '/data/productList.json';
		fetch(url)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					productLists: data,
				}),
			);
	}

	render() {
		return <div></div>;
	}
}
