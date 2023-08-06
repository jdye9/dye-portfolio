export type Experience = {
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
};
