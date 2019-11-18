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