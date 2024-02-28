import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import platform from "../data/platforms";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: platform.length, results: platform, next: null },
  });

export default usePlatforms;
