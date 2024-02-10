import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { error, games, isLoaing } = useGames();
  const skeletons = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <>
      {error && <Text>{error}</Text>}
      {!error && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding="10px"
          spacing={10}
        >
          {isLoaing &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default GameGrid;
