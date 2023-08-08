import {
	GetExperiencesResponse,
	GetProjectsResponse,
	GetSkillsResponse,
} from "./types";

export const getSkills = async (): Promise<GetSkillsResponse> => {
	const response = await fetch(`https://cyan-goat-slip.cyclic.app/skills/`, {
		method: "GET",
	});
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};

export const getExperiences = async (): Promise<GetExperiencesResponse> => {
	const response = await fetch(
		`https://cyan-goat-slip.cyclic.app/experiences/`,
		{
			method: "GET",
		}
	);
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};

export const getProjects = async (): Promise<GetProjectsResponse> => {
	const response = await fetch(`https://cyan-goat-slip.cyclic.app/projects/`, {
		method: "GET",
	});
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};
