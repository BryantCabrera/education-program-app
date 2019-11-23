import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
// import { Layout } from '../components/Layout';
import Table from '../components/Table/Table';

import { IIndexComponentProps, IIndexComponentState } from '../common/interfaces';

export default class App extends Component<IIndexComponentProps, IIndexComponentState> {
	static async getInitialProps() {
		const response = await fetch('http://localhost:4000/programs');
		const parsedResponse = await response.json();
		console.log(parsedResponse.data, 'res.data');
		return { programs: parsedResponse.data };
	}

	render = () => {
		const displayHeaders = ['School', 'Program Name', 'Degree Type', 'Delivery', 'Annual Tuition'];

		const tableHeaders = ['school', 'programName', 'degreeType', 'delivery', 'annualTuition'];

		return (
			// <Layout>
			// 	{this.state.programs.map((program, index) => (
			// 		<p key={index}>{program.programName}</p>
			// 	))}
			// </Layout>

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
		);
	};
}
