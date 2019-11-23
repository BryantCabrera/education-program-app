import React from 'react';
import { ITableCellProps } from '../../common/interfaces';
import styled from 'styled-components';

export const Cell = (props: ITableCellProps) => {
	const CustomTd = props.customTd;

	const schoolImageMap = {
		CaliforniaInstituteofTechnology:
			'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1200px-Seal_of_the_California_Institute_of_Technology.svg.png',
		HoustonCommunityCollege:
			'https://www.gulfcoastcc.org/wp-content/uploads/2018/07/houston-community-college-logo-square.png',
		LongBeachStateUniversity:
			'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/CSU-Longbeach_seal.svg/1200px-CSU-Longbeach_seal.svg.png',
		MiamiDadeCollege: 'https://www.miamidade.gov/resources/images/md-logo.png',
		SUNYAlbany: 'https://mediad.publicbroadcasting.net/p/wamc/files/styles/x_large/public/201701/ualbanylogo.png',
		SantaMonicaCollege:
			'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Santa_Monica_College_seal.svg/1200px-Santa_Monica_College_seal.svg.png',
		SantaRosaJuniorCollege:
			'https://i0.wp.com/ccidc.org/wp-content/uploads/2016/09/Santa-Rosa-Junior-College.png?resize=1100%2C702&ssl=1',
	};

	// const TR = styled.tr`
	// 	margin-bottom: 1em;
	// 	border-bottom: 2px solid black;
	// `;
	const ProgramName = styled.span`
		font-size: 1.5em;
	`;
	const SchoolName = styled.span`
		font-size: 1em;
	`;
	const SchoolImage = styled.img`
		height: 4em;
		width: 4em;
	`;
	const SubHeader = styled.h4`
		margin: 0;
		padding: 0;
		font-weight: bold;
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

				if (item === 'school') {
					return (
						<td key={id}>
							<SchoolImage src={schoolImageMap[props.tdData['school'].replace(/\s/gi, '')]} />
						</td>
					);
				}

				if (item === 'programName') {
					return (
						<td key={id}>
							<ProgramName>{props.tdData[item]}</ProgramName>
							<br />
							<SchoolName>{props.tdData['school']}</SchoolName>
						</td>
					);
				}

				if (item === 'degreeType') {
					return (
						<td key={id}>
							<SubHeader>Degree Type:</SubHeader>
							{props.tdData[item]}
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
