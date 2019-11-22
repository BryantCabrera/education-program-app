export interface IProgram {
	school: string;
	programName: string;
	degreeType: string;
	delivery: string;
	annualTuition: string;
	location: string;
}

export interface IIndexComponentProps {
	programs: IProgram[];
}

export interface IIndexComponentState {
	programs: IProgram[];
}

export interface ITableHeaderProps {
	asc: boolean;
	sortData: any;
	dataKey: string;
	children: any;
}

export interface ITableHeaderState {
	sortCssClass: string;
}

export interface ITableCellProps {
	tdData: object[];
	dKey: any;
	customTd: any;
}
