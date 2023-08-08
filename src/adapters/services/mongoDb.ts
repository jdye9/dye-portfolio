import {
	GetExperiencesResponse,
	GetProjectsResponse,
	GetSkillsResponse,
} from "./types";

export const getSkills = async (): Promise<GetSkillsResponse> => {
	const response = await fetch(
		`https://dye-portfolio-service.onrender.com/skills/`,
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
		`http://dye-portfolio-service.onrender.com/experiences/`,
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
		`http://dye-portfolio-service.onrender.com/projects/`,
		{
			method: "GET",
		}
	);
	if (response.ok) {
		return response.json();
	}
	throw new Error("Sorry, something went wrong...");
};
