import React from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const {
    error,
    data: games,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useGames(gameQuery);

  const skeletons = Array.from({ length: 15 }, (_, index) => index + 1);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGameCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGameCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results?.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
