import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => {
          console.log({ res });
          return res.data;
        }),
    staleTime: 10_000,
  });

export default usePlatforms;
