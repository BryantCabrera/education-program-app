import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

export default class extends Component {
	static async getInitialProps() {
		const res = await fetch('http://localhost:4000/programs');
		const programs = await res.json();
		return { programs };
	}
	render() {
		return (
			<Layout>
				<p>Sample Text</p>
			</Layout>
		)
	}
};