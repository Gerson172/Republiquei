export type Input = {
	type: string;
	title: string;
	placeholder: string;
	onChange: any;
	id: string;
	mensagemDeErro: any;
	inputMask: boolean;
	mask: string;
	min: number;
	max: number;
	register: any;
};

export type Select = {
	title: string;
	name: string;
	id: string;
	options: any;
	onChange: any;
	mensagemDeErro: any;
	register: any;
};

export type Checkbox = {
	id: string;
	titulo: string;
	register: any;
};
