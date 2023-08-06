import { UseQueryResult, useQuery } from "react-query";
import {
	GetExperiencesResponse,
	GetProjectsResponse,
	GetSkillsResponse,
} from "../adapters/services/types";
import {
	getExperiences,
	getProjects,
	getSkills,
} from "../adapters/services/mongoDb";

export const useGetSkills = (): UseQueryResult<GetSkillsResponse> => {
	return useQuery(["skills"], () => getSkills());
};

export const useGetExperiences = (): UseQueryResult<GetExperiencesResponse> => {
	return useQuery(["experiences"], () => getExperiences());
};

export const useGetProjects = (): UseQueryResult<GetProjectsResponse> => {
	return useQuery(["projects"], () => getProjects());
};
