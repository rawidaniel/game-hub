import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";
import getCroppedIMage from "../services/image-url";

interface GameCardProps {
  game: Game;
}
function GameCard({ game }: GameCardProps) {
  console.log("gamessss", game.parent_platforms);
  return (
    <Card>
      <Image src={getCroppedIMage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconLists
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
