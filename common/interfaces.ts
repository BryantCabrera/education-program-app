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

export interface ITablePaginationProps {
	curr: number;
	rowPerPage: number;
	totalsCount: number;
	totalPage: number;
	setCurrentPage: any;
	setRowsPerPage: any;
}

export interface ITablePaginationState {
	currPage: number;
	rowPerPage: number;
}

export interface ITableProps {
	tblData: any;
	tHead: any;
	dKey: any;
	customTd: any;
	paging: boolean;
	search: boolean;
	defaultCSS: boolean;
	defaultRowsPerPage: number;
}

export interface ITableState {
	data: any;
	asc: any;
	filter: string;
	pagers: {
		paging: any;
		curr: number;
		rowsPerPage: number | string;
	};
}
