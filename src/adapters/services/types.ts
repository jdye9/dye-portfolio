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
