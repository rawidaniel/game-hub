import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ScreenShot from "../entities/ScreenShot";

const useGameScreenShots = (gameId: number) => {
  const apiClient = new ApiClient<ScreenShot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenShots;
