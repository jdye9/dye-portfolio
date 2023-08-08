import {
	GetExperiencesResponse,
	GetProjectsResponse,
	GetSkillsResponse,
} from "./types";

export const getSkills = async (): Promise<GetSkillsResponse> => {
	const response = await fetch(
		`https://dye-portfolio-api.onrender.com:10000/skills/`,
		{
			method: "GET",
		}
	);
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};

export const getExperiences = async (): Promise<GetExperiencesResponse> => {
	const response = await fetch(
		`http://dye-portfolio-api.onrender.com:10000/experiences/`,
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
	const response = await fetch(
		`http://dye-portfolio-api.onrender.com:10000/projects/`,
		{
			method: "GET",
		}
	);
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};
