import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId);
  const first = data?.results[0];

  if (isLoading) return null;

  if (!first) return null;

  if (error) throw error;
  return (
    <video src={first?.data[480]} poster={first?.preview} controls></video>
  );
}

export default GameTrailer;
