import { GetSkillsResponse } from "./types";

export const getSkills = async (): Promise<GetSkillsResponse> => {
	const response = await fetch(`http://localhost:9000/skills/`, {
		method: "GET",
	});
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};
