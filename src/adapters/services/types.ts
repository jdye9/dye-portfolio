export type GetSkillsResponse = {
	_id: string;
	skill: string;
	skill_type: string;
	img: {
		_id: string;
		fileName: string;
		ref: string;
	};
}[];

export type GetExperiencesResponse = {
	_id: string;
	experience: string;
	description: string[];
	startDate: Date;
	endDate: Date;
	img: {
		_id: string;
		fileName: string;
		ref: string;
	};
}[];

export type GetProjectsResponse = {
	_id: string;
	title: string;
	description: string;
	media: {
		light: {
			_id: string;
			fileName: string;
			ref: string;
		};
		dark: {
			_id: string;
			fileName: string;
			ref: string;
		};
	};
	url: string;
}[];
