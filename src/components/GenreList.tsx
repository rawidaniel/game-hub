import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedIMage from "../services/image-url";
import GenerListSkeleton from "./GenerListSkeleton";

interface Props {
  onSelectGenre: (genere: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 13 }, (_, index) => index + 1);

  // if (isLoading) return <Spinner />;
  if (isLoading) {
    return <GenerListSkeleton skeletons={skeletons} />;
  }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedIMage(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
