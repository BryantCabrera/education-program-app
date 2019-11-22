import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import { IIndexComponentProps, IIndexComponentState } from '../common/interfaces';

export default class App extends Component<IIndexComponentProps, IIndexComponentState> {
	static async getInitialProps() {
		const response = await fetch('http://localhost:4000/programs');
		const parsedResponse = await response.json();
		console.log(parsedResponse.data, 'res.data');
		return { programs: parsedResponse.data };
	}

	componentWillMount() {
		this.setState({
			programs: this.props.programs
		});
	}

	render() {
		const Headers = ['school', 'programName', 'location', 'degreeType', 'delivery', 'annualTuition'];

		return (
			<Layout>
				{
					this.state.programs.map((program, index) => <p key={index}>{program.programName}</p>)
				}
				
			</Layout>
			// <TablePagination
			// 	title="TablePagination"
			// 	subTitle="Sub Title"
			// 	headers={Headers}
			// 	data={this.state.programs}
			// 	columns="school.programName.location.degreeType.delivery.annualTuition"
			// 	perPageItemCount={5}
			// 	totalCount={this.state.programs.length}
			// 	arrayOption={[["size", 'all', ' ']]}
			// />
		)
	}
};