import React, { Component } from 'react';
import { ITablePaginationProps, ITablePaginationState } from '../../common/interfaces';
import styled from 'styled-components';

export class Pagination extends Component<ITablePaginationProps, ITablePaginationState> {
	state = {
		currPage: 1,
		rowPerPage: 5,
	};

	getDerivedStateFromProps = (nextProps: ITablePaginationProps) => {
		if (nextProps.curr !== this.state.currPage) {
			this.setState({ currPage: nextProps.curr });
		}
		if (nextProps.rowPerPage !== this.state.rowPerPage) {
			this.setState({ rowPerPage: nextProps.rowPerPage });
		}
	};

	componentDidMount = () => {
		this.setState({
			currPage: this.props.curr,
			rowPerPage: this.props.rowPerPage,
		});
	};

	setCurrentPage = e => {
		this.setPage(parseInt(e.target.value));
	};

	addPage = () => {
		if (this.state.currPage >= this.props.totalPage - 1) {
			return;
		}

		this.setPage(this.state.currPage + 1);
	};

	subPage = () => {
		if (this.state.currPage < 1) {
			return;
		}

		this.setPage(this.state.currPage - 1);
	};

	setPage = (i: number) => {
		this.props.setCurrentPage(i);
		this.setState({
			currPage: i,
		});
	};

	setRowsPerPage = (e: any) => {
		let i = parseInt(e.target.value);
		if (isNaN(i)) {
			i = this.props.totalsCount;
		}
		this.props.setRowsPerPage(i);
		this.setState({
			rowPerPage: i,
		});
	};

	render = () => {
		const nextDisableStyle = this.state.currPage + 1 >= this.props.totalPage;
		const prevDisableStyle = this.state.currPage + 1 <= 1;
		const rowPerPage = this.props.totalPage === 1 ? 'All' : this.props.rowPerPage;

		const Pagination = styled.div`
			text-align: right;
			font-size: 1em;
		`;

		return (
			<Pagination className='form-group'>
				<div className='pager col-sm-7 col-xs-12'>
					<input
						type='button'
						className='btn btn-warning'
						name=''
						disabled={prevDisableStyle}
						onClick={this.subPage}
						value='Prev'
					/>
					<select onChange={this.setCurrentPage} value={this.state.currPage} className='form-control page-select'>
						{Array.from(new Array(this.props.totalPage), (x, i) => {
							return (
								<option key={i} value={i}>
									{i + 1}
								</option>
							);
						})}
					</select>
					<input
						type='button'
						className='btn btn-warning'
						name=''
						disabled={nextDisableStyle}
						onClick={this.addPage}
						value='Next'
					/>
					<label htmlFor='rowsPerPage' className='SortableTblLabel'>
						, display{' '}
					</label>
					<select
						id='rowsPerPage'
						onChange={this.setRowsPerPage}
						value={rowPerPage}
						className='form-control page-select'
					>
						{[5, 10, 20, 50, 'All'].map((item, id) => {
							return (
								<option key={id} value={item}>
									{item}
								</option>
							);
						})}
					</select>
					<label className='SortableTblLabel'>rows per page</label>
				</div>
				<div className='desc col-sm-5 col-xs-12'>
					<div>
						Page {this.state.currPage + 1} of {this.props.totalPage} total pages, {this.props.totalsCount} rows of data
					</div>
				</div>
			</Pagination>
		);
	};
}
