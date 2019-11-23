import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Table from '../components/Table/Table';

import { IIndexComponentProps, IIndexComponentState } from '../common/interfaces';

export default class App extends Component<IIndexComponentProps, IIndexComponentState> {
	static async getInitialProps() {
		const response = await fetch('https://education-program-api.herokuapp.com/programs');
		const parsedResponse = await response.json();
		console.log(parsedResponse.data, 'res.data');
		return { programs: parsedResponse.data };
	}

	render = () => {
		const displayHeaders = ['School', 'Program Name', 'Degree Type', 'Delivery', 'Annual Tuition'];

		const tableHeaders = ['school', 'programName', 'degreeType', 'delivery', 'annualTuition'];

		return (
			<Table
				tblData={this.props.programs}
				tHead={displayHeaders}
				dKey={tableHeaders}
				customTd={[]}
				paging={true}
				search={true}
				defaultCSS={true}
				defaultRowsPerPage={5}
			/>
		);
	};
}
