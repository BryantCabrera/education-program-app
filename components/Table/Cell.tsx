import React from 'react';
import { ITableCellProps } from '../../common/interfaces';
import styled from 'styled-components';

export const Cell = (props: ITableCellProps) => {
	const CustomTd = props.customTd;

	const ProgramName = styled.span`
		font-size: 1.5em;
	`;
	const SchoolName = styled.span`
		font-size: 1em;
	`;

	return (
		<tr>
			{props.dKey.map((item, id) => {
				let CustomTdComponent = null;
				CustomTdComponent =
					CustomTd &&
					CustomTd.filter(i => {
						return i.keyItem === item;
					}).reduce((result, item) => {
						return item;
					}, {}).custd;

				if (item === 'programName') {
					return (
						<td key={id}>
							<ProgramName>{props.tdData[item]}</ProgramName>
							<br />
							<SchoolName>{props.tdData['school']}</SchoolName>
						</td>
					);
				}

				if (!CustomTd) {
					return <td key={id}>{props.tdData[item]}</td>;
				}

				if (CustomTdComponent) {
					return (
						<CustomTdComponent key={id} {...props} tdData={props.tdData[item]} field={item} rowData={props.tdData} />
					);
				}

				return <td key={id}>{props.tdData[item]}</td>;
			})}
		</tr>
	);
};
