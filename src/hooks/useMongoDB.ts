import { UseQueryResult, useQuery } from "react-query";
import { GetSkillsResponse } from "../adapters/services/types";
import { getSkills } from "../adapters/services/mongoDb";

export const useGetSkills = (): UseQueryResult<GetSkillsResponse> => {
	return useQuery(["skills"], () => getSkills());
};
