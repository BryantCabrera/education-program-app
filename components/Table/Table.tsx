import React, { Component } from 'react';
import { Pagination } from './Pagination';
import { Header } from './Header';
import { Cell } from './Cell';
import { ITableProps, ITableState } from '../../common/interfaces';
import styled from 'styled-components';

export default class Table extends Component<ITableProps, ITableState> {
	state = {
		data: this.props.tblData || [],
		asc: (this.props.dKey || []).reduce((acc, cur) => {
			return Object.assign({}, acc, { [cur]: null });
		}, {}),
		filter: '',
		pagers: {
			paging: this.props.paging,
			curr: 0,
			rowsPerPage: this.props.defaultRowsPerPage,
		},
	};

	getDerivedStateFromProps = (nextProps: ITableProps) => {
		//constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
		if (nextProps.tblData !== this.state.data) {
			this.setState({ data: nextProps.tblData });
		}
	};

	filter = (e: any) => {
		const newData = this.props.tblData.filter(item => {
			for (const key in item) {
				const v = item[key] && item[key].toString().toLowerCase();
				if (v && v.indexOf(e.target.value.toLowerCase()) !== -1) {
					return true;
				}
			}
			return false;
		});
		this.setState({
			filter: e.target.value,
			data: newData,
		});
	};

	sortData = (dKey, nAsc) => {
		const newAsc = this.state.asc;
		const newData = this.state.data;
		newData.sort((a, b) => {
			if (a[dKey] === b[dKey]) {
				return 0;
			}
			if (nAsc ? a[dKey] > b[dKey] : a[dKey] < b[dKey]) {
				return 1;
			}
			if (nAsc ? a[dKey] < b[dKey] : a[dKey] > b[dKey]) {
				return -1;
			}
			return 0;
		});
		for (const prop in newAsc) {
			newAsc[prop] = null;
		}
		this.setState({
			asc: Object.assign({}, newAsc, { [dKey]: nAsc }),
			data: newData,
		});
	};

	setCurrentPage = (i: string) => {
		const index = parseInt(i);
		this.setState({
			pagers: Object.assign({}, this.state.pagers, { curr: index }),
		});
	};

	setRowsPerPage = (i: string) => {
		const index = parseInt(i);
		let nCurr = this.state.pagers.curr;
		const pagesCount = Math.ceil(this.state.data.length / index);
		//console.log(this.state.pagers.curr, pagesCount, index);
		if (this.state.pagers.curr >= pagesCount) {
			nCurr = pagesCount - 1;
		}
		this.setState({
			pagers: Object.assign({}, this.state.pagers, {
				rowsPerPage: index,
				curr: nCurr,
			}),
		});
	};

	render = () => {
		let pageData = this.state.data;
		const pagers = this.state.pagers;
		const pagesCount = Math.ceil(this.state.data.length / pagers.rowsPerPage);
		if (pagers.paging) {
			pageData = pageData.slice(pagers.curr * pagers.rowsPerPage, (pagers.curr + 1) * pagers.rowsPerPage);
		}

		const MainHeader = styled.div`
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			font-size: 1.5em;
			color: orange;
		`;

		const Link = styled.a`
			font-size: 1em;
			font-weight: bold;
			text-decoration: none;
			color: black;
		`;

		const ProgramSummary = styled.div`
			font-size: 1.75em;
		`;

		return (
			<div className='table-responsive'>
				<div className='sortable-table'>
					<MainHeader>
						<div className='table-title'>Affordable Online Degrees</div>
						{this.props.search && (
							<div className='search-box'>
								Search:{' '}
								<input
									className='search'
									type='text'
									name=''
									value={this.state.filter}
									placeholder='Filter Result'
									onChange={this.filter}
								/>
							</div>
						)}
						<Link href='#'>Sign In</Link>|<Link href='#'>More</Link>
					</MainHeader>
					<ProgramSummary>
						{this.state.data.length} Online Programs for "{this.state.filter}"
					</ProgramSummary>
					<table className='table table-hover table-striped'>
						<thead>
							<tr>
								{this.props.dKey.map((item, id) => {
									return (
										<Header key={id} sortData={this.sortData} asc={this.state.asc[item]} dataKey={item}>
											{this.props.tHead[parseInt(id)]}
										</Header>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{pageData.map((item, id) => {
								return (
									<Cell key={id} tdData={item} {...this.props} dKey={this.props.dKey} customTd={this.props.customTd} />
								);
							})}
						</tbody>
					</table>
				</div>
				{pagers.paging ? (
					<Pagination
						curr={pagers.curr}
						totalPage={pagesCount}
						setCurrentPage={this.setCurrentPage}
						setRowsPerPage={this.setRowsPerPage}
						totalsCount={this.state.data.length}
						rowPerPage={pagers.rowsPerPage}
					/>
				) : (
					''
				)}
			</div>
		);
	};
}

// Table.defaultProps = {
// 	tblData: [],
// 	tHead: [],
// 	dKey: [],
// 	customTd: [],
// 	paging: true,
// 	search: true,
// 	defaultCSS: true,
// 	defaultRowsPerPage: 5,
// };
