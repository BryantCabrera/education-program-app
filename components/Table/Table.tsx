import React, { Component } from 'react';
import { Pagination } from './Pagination';
import { Header } from './Header';
import { Row } from './Row';
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

		const Main = styled.div`
			display: flex;
			flex-direction: column;
			place-items: center;
			padding: 1em 10em;
		`;
		const MainHeader = styled.div`
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			padding: 0 2em 1em 2em;
			border-bottom: 5px solid orange;
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
			width: 100%;
			text-align: left;
			font-size: 1.75em;
		`;
		const Table = styled.table`
			width: 100%;
		`;
		const HR = styled.hr`
			height: 2px;
			width: 100%;
			color: gray;
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
					<Main>
						<ProgramSummary>
							{this.state.data.length} Online Programs for "{this.state.filter}"
						</ProgramSummary>
						<Table className='table table-hover table-striped'>
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
										<Row key={id} tdData={item} {...this.props} dKey={this.props.dKey} customTd={this.props.customTd} />
									);
								})}
							</tbody>
						</Table>
					</Main>
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
