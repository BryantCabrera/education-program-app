import React, { Component } from 'react';
import { ITableHeaderProps, ITableHeaderState } from '../../common/interfaces';

export class Header extends Component<ITableHeaderProps, ITableHeaderState> {
	state = {
		sortCssClass: 'fa fa-sort',
	};

	getDerivedStateFromProps = (nextProps: ITableHeaderProps) => {
		let a = 'fa fa-sort';
		switch (nextProps.asc) {
			case null:
				a = 'fa fa-sort';
				break;
			case true:
				a = 'fa fa-sort-amount-asc';
				break;
			case false:
				a = 'fa fa-sort-amount-desc';
				break;
		}

		if (nextProps.asc !== this.props.asc) {
			this.setState({ sortCssClass: a });
		}
	};

	sort = () => {
		this.props.sortData(this.props.dataKey, !this.props.asc);
	};

	render = () => {
		return (
			<th onClick={this.sort}>
				{' '}
				{this.props.children} <br />
				<i className={this.state.sortCssClass} aria-hidden='true' />
			</th>
		);
	};
}
