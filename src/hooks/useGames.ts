import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectGenere: Genre | null,
  selectPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectGenere?.id,
        parent_platforms: selectPlatform?.id,
      },
    },
    [selectGenere?.id, selectPlatform?.id]
  );

export default useGames;
